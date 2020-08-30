import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});
Vue.directive('rainbow', {
    bind: function(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});

Vue.directive('theme', {
    bind: function(el, binding) {
        if (binding.value == 'wide') {
            el.style.maxWidth = "1260px";
        }

        if (binding.arg == 'column') {
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});
new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})