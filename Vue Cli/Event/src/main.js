import Vue from 'vue'
import App from './App.vue'
import com from './component/com.vue'

Vue.component('com', com)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')