const { mapActions, mapGetters } = require('vuex')
const { AUTH, LOADING } = require('../namespaces')

const MapAuth = {
    computed: {
        ...mapGetters({
            getAuth: AUTH,
            getLoading: LOADING,
        }),
    },
    methods: {
        ...mapActions({
            setAuth: AUTH,
            setLoading: LOADING,
        }),        
    },
}

module.exports = MapAuth