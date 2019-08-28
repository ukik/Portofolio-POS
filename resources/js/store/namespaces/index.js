const AUTH = 'credential'
const LOADING = 'loading'

const ORDER = 'transaksi'
const ORDER_DETAIL = 'transaksi-detail'
const ORDER_LAST = 'transaksi-terakhir'
const ORDER_DETAIL_UPDATE = "transaksi-detail-update"

const MENU = 'menu'
const MENU_DETAIL = 'menu-detail'
const MENU_DETAIL_DELETE = "menu-detail-delete"
const MENU_DETAIL_UPDATE = "menu-detail-update"
const MENU_SPLICE = "menu-splice"

const EMPLOYEE = 'karyawan'
const EMPLOYEE_DETAIL = 'karyawan-detail'
const EMPLOYEE_DETAIL_UPDATE = "karyawan-detail-update"
const EMPLOYEE_DETAIL_DELETE = "karyawan-detail-delete"
const EMPLOYEE_SPLICE = "karyawan-splice"

module.exports = {
    AUTH,
    LOADING,

    ORDER,
    ORDER_DETAIL,
    ORDER_LAST,
    ORDER_DETAIL_UPDATE,

    MENU,
    MENU_DETAIL,
    MENU_DETAIL_DELETE,
    MENU_DETAIL_UPDATE,
    MENU_SPLICE,

    EMPLOYEE,
    EMPLOYEE_DETAIL,
    EMPLOYEE_DETAIL_UPDATE,
    EMPLOYEE_DETAIL_DELETE,
    EMPLOYEE_SPLICE,
}

// only works without param in getters 
// inline access 
// this.$store.getters['status/REQUEST_STATUS'] // GETTERS
// this.$store.commit('yourModuleName/doSomething', {payload: data}) // MUTATIONS
// this.$store.dispatch('yourModuleName/doSomething', {payload: data}) // ACTION