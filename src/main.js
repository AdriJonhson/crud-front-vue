import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Snotify from 'vue-snotify'
import Vodal from 'vodal'

require("expose-loader?$!jquery")

Vue.use(Snotify, {toast: {showProgressBar: false}})

Vue.component(Vodal.name, Vodal)

new Vue({
    router,
    render: h => h(App),
    el: '#app'
})
