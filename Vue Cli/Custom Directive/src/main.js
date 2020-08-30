import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueResource);

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
    render: h => h(App)
})