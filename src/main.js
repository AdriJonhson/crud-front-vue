import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Snotify from 'vue-snotify'

require("expose-loader?$!jquery")

Vue.use(Snotify, {toast: {showProgressBar: false}})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
