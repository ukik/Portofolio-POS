import Vue from 'vue'

import _map_order from './transaksi'
import _map_menu from './menu'
import _map_karyawan from './karyawan'
import _map_auth from './auth'

Vue.mixin(_map_order)
Vue.mixin(_map_menu)
Vue.mixin(_map_karyawan)
Vue.mixin(_map_auth)