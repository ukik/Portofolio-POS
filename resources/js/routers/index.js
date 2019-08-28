const PageLogin = resolve => {
    require.ensure(
      ["../components/pages/login"],
      () => {
        resolve(require("../components/pages/login"))
      }, 'js/page/login'
    )
  }

const PageMenu = resolve => {
    require.ensure(
      ["../components/pages/menu"],
      () => {
        resolve(require("../components/pages/menu"))
      }, 'js/page/menu'
    )
  }

const PageKaryawan = resolve => {
    require.ensure(
      ["../components/pages/karyawan"],
      () => {
        resolve(require("../components/pages/karyawan"))
      }, 'js/page/karyawan'
    )
  }

const PageStruk = resolve => {
    require.ensure(
      ["../components/pages/struk"],
      () => {
        resolve(require("../components/pages/struk"))
      }, 'js/page/struk'
    )
  }


const PageKasir = resolve => {
    require.ensure(
      ["../components/pages/kasir"],
      () => {
        resolve(require("../components/pages/kasir"))
      }, 'js/page/kasir'
    )
  }

const PageDaftarTransaksi = resolve => {
    require.ensure(
      ["../components/pages/daftar/transaksi"],
      () => {
        resolve(require("../components/pages/daftar/transaksi"))
      }, 'js/page/daftar/transaksi'
    )
  }

const PageDaftarMenu = resolve => {
    require.ensure(
      ["../components/pages/daftar/menu"],
      () => {
        resolve(require("../components/pages/daftar/menu"))
      }, 'js/page/daftar/menu'
    )
  }


const PageDaftarKaryawan = resolve => {
    require.ensure(
      ["../components/pages/daftar/karyawan"],
      () => {
        resolve(require("../components/pages/daftar/karyawan"))
      }, 'js/page/daftar/karyawan'
    )
  }


const PageRegister = resolve => {
    require.ensure(
      ["../components/pages/register"],
      () => {
        resolve(require("../components/pages/register"))
      }, 'js/page/register'
    )
  }
  
import { store } from '../store'
import { AUTH } from '../store/namespaces'

function nextStaff(to, from, next){
    if(!store.getters[AUTH].auth || store.getters[AUTH].token === null) {
        // console.log(1,store.getters[AUTH])      
        return next('/login')
    }     
    if(store.getters[AUTH].auth && store.getters[AUTH].role === 'staff') {
        // console.log(2,store.getters[AUTH])      
        return next()
    } else {
        // console.log(3,store.getters[AUTH])      
        return next('/login')
    }
}

function nextManager(to, from, next){
    if(!store.getters[AUTH].auth || store.getters[AUTH].token === null) {
        // console.log(1,store.getters[AUTH])      
        return next('/login')
    }     
    if(store.getters[AUTH].auth && store.getters[AUTH].role === 'manager') {
        // console.log(2,store.getters[AUTH])      
        return next()
    } else {
        // console.log(3,store.getters[AUTH])      
        return next('/login')
    }
}

function nextAll(to, from, next){
    if(!store.getters[AUTH].auth || store.getters[AUTH].token === null) {
        // console.log(1,store.getters[AUTH])      
        return next('/login')
    }     
    if(store.getters[AUTH].auth && store.getters[AUTH].role === 'manager' || store.getters[AUTH].role === 'staff') {
        // console.log(2,store.getters[AUTH])      
        return next()
    } else {
        // console.log(3,store.getters[AUTH])      
        return next('/login')
    }
}

function nextGuest(to, from, next){
    if(!store.getters[AUTH].auth || store.getters[AUTH].token === null) {
        // console.log(3,store.getters[AUTH])      
        return next()
    }     
    if(store.getters[AUTH].auth){
        switch(store.getters[AUTH].role) {
            case 'manager':
                return next('/daftar/karyawan')
                break;
            case 'staff':
                return next('/kasir')
                break;
        }
        // console.log(2,store.getters[AUTH].role, store.getters[AUTH].auth)                
    } else {
        // console.log(3,store.getters[AUTH].role, store.getters[AUTH].auth)        
        return next('/login')
    }
}


const routes = [
    {
        path: '/login',
        name: 'login',
        component: PageLogin,
        // meta: { auth: false }, // globally        
        beforeEnter: (to, from, next) => {
            nextGuest(to, from, next)
        }        
    }, 
    {
        path: '/register',
        name: 'register',
        component: PageRegister,
        // meta: { auth: false }, // globally             
    },     
    {
        path: '/menu',
        name: 'menu',
        component: PageMenu,
        // meta: { auth: true, roles: ['','staff'] }, // globally 
        beforeEnter: (to, from, next) => {
            nextAll(to, from, next)
        }
    }, 
    {
        path: '/karyawan',
        name: 'karyawan',
        component: PageKaryawan,
        // meta: { auth: true, roles: ['','manager'] }, // globally 
        beforeEnter: (to, from, next) => {
            nextManager(to, from, next)
        }
    },  
    {
        path: '/kasir',
        name: 'kasir',
        component: PageKasir,
        // meta: { auth: true, roles: ['staff', ''] }, // globally 
        beforeEnter: (to, from, next) => {
            nextStaff(to, from, next)
        }        
    },      
    {
        path: '/struk',
        name: 'struk',
        component: PageStruk,
        // meta: { auth: true, roles: ['staff','manager'] }, // globally 
        beforeEnter: (to, from, next) => {
            nextAll(to, from, next)
        }         
    },       
    {
        path: '/daftar/transaksi',
        name: 'daftar-transaksi',
        component: PageDaftarTransaksi,
        // meta: { auth: true, roles: ['staff','manager'] }, // globally 
        beforeEnter: (to, from, next) => {
            nextAll(to, from, next)
        }        
    },      
    {
        path: '/daftar/menu',
        name: 'daftar-menu',
        component: PageDaftarMenu,
        // meta: { auth: true, roles: ['staff','manager'] }, // globally 
        beforeEnter: (to, from, next) => {
            nextAll(to, from, next)
        }        
    },          
    {
        path: '/daftar/karyawan',
        name: 'daftar-karyawan',
        component: PageDaftarKaryawan,
        // meta: { auth: true, roles: ['staff','manager'] }, // globally 
        beforeEnter: (to, from, next) => {
            nextAll(to, from, next)
        }        
    },          
    {
        path: '*',
        redirect: '/login',
        // meta: { auth: false } // globally        
    },    
    {
        path: '/',
        redirect: '/login',
        // meta: { auth: false } // globally         
    },    
]

export { routes }