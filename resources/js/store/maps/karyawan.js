const { mapActions, mapGetters } = require('vuex')
const { EMPLOYEE, EMPLOYEE_DETAIL, EMPLOYEE_DETAIL_UPDATE, EMPLOYEE_DETAIL_DELETE, EMPLOYEE_SPLICE } = require('../namespaces')

const MapKaryawan = {
    computed: {
        ...mapGetters({
            getKaryawan: EMPLOYEE,
            getKaryawanDetail: EMPLOYEE_DETAIL,
        }),
    },
    methods: {
        ...mapActions({
			setKaryawan: EMPLOYEE,
            setKaryawanDetail: EMPLOYEE_DETAIL,
            updateKaryawanDetail: EMPLOYEE_DETAIL_UPDATE,            
            deleteKaryawanDetail: EMPLOYEE_DETAIL_DELETE,
            spliceKaryawan: EMPLOYEE_SPLICE,
        }),        
    },
}

module.exports = MapKaryawan