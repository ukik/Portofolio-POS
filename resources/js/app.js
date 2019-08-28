// save area is here
require('./bootstrap');
require('./directives')
require('./filters');
require('./components');
require('./layouts');
require('./mixins');
require('./store/maps');

window.Vue = require('vue');

import App from './views';

import VueRouter from 'vue-router';
Vue.use(VueRouter)

const {
    routes
} = require('./routers')
const router = new VueRouter({
    routes,
    // mode: 'history', // remove # from default url,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
})

import {
    store
} from './store'

// import _router from './mixins/router'
// import _rupiah from './mixins/rupiah'
// import _store from './mixins/store'
// import _navbar from './mixins/navbar'
// import _uuid from './mixins/uuid'
// Vue.mixin(_router)
// Vue.mixin(_rupiah)
// Vue.mixin(_store)
// Vue.mixin(_navbar)
// Vue.mixin(_uuid)

// import _map_order from './store/maps/transaksi'
// import _map_menu from './store/maps/menu'
// import _map_karyawan from './store/maps/karyawan'
// import _map_auth from './store/maps/auth'
// Vue.mixin(_map_order)
// Vue.mixin(_map_menu)
// Vue.mixin(_map_karyawan)
// Vue.mixin(_map_auth)

const app = new Vue({
    el: '#app',
    data() {
        return {
            domain: 'http://localhost:8000', // , 
            request: false,
        }
    },
    mounted() {
        const vm = this;
        const token = localStorage.getItem('token');

        if(token == null) {
            console.log('app.js', token)
            this.$router.replace('/login')
            return
        }

        this.request = true
        axios.get(this.domain+'/api/refresh', {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            vm.request = false
            vm.setAuth(response.data)
            // console.log('app.js', response)                
            if(response.data.auth){
                switch (response.data.role) {
                    case 'manager':
                        vm.gotoPage({ name: 'daftar-karyawan' })
                        break;
                    default:
                        vm.gotoPage({ name: 'kasir' })
                        break;
                }
            }
        })        
        .catch(error => {
            this.request = false
            // console.log('app.js error', error)
        })
    },
    store,
    router,
    render: h => h(App),
});

router.replace('/login')

window.axios.defaults.baseURL = app.$data.domain + '/api/';

window.axios.interceptors.request.use(function (config) {

    // override init every request
    // config.params = {};
    // config.params['signiture'] = app.$data.signiture;
    config.headers.common['Authorization'] = 'Bearer ' + store.state.auth.credential.token;
    // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    // switch (config.method) {
    //   case "post":
    //   case "put":
    //   case "delete":
    //   default:
    //     break;
    // }

    return config;

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

window.axios.interceptors.request.use(function (response) {

    return response;

}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});