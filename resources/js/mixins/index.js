import Vue from 'vue'

import _router from './router'
import _rupiah from './rupiah'
import _store from './store'
import _navbar from './navbar'
import _uuid from './uuid'
import _image from './image'

Vue.mixin(_router)
Vue.mixin(_rupiah)
Vue.mixin(_store)
Vue.mixin(_navbar)
Vue.mixin(_uuid)
Vue.mixin(_image)