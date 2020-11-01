import Vue from 'vue'
import Vuex from 'vuex'
import weatherModule from '@/store/modules/Weather'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        footer: {
            message: 'Build by Carlo Moleka, using VueJS, Openweathermap API and Vuetify UI.'
        }
    },
    getters: {
        getFooter(state) {
            return state.footer
        }
    },
    modules: {
        weatherModule
    },
    strict: debug
})
