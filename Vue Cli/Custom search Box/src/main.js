import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


Vue.use(VueResource);



Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
});



new Vue({
    el: '#app',
    render: h => h(App)
})