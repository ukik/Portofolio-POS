import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const transaksi = require('./modules/transaksi')
const menu = require('./modules/menu')
const karyawan = require('./modules/karyawan')
const auth = require('./modules/auth')

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    // plugins: [createPersistedState()],
    modules: {
        auth,
        transaksi,
        menu,
        karyawan,
    }
})

Vue.prototype.$store = store

export {
    store
}
