import Vue from 'vue'
import App from './App.vue'
import com from './component/com.vue'

export const bus = new Vue();
Vue.component('com', com)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')