const { mapActions, mapGetters } = require('vuex')
const { ORDER, ORDER_DETAIL, ORDER_DETAIL_UPDATE, ORDER_LAST } = require('../namespaces')

const MapOrder = {
    computed: {
        ...mapGetters({
            getOrder: ORDER,
            getOrderDetail: ORDER_DETAIL,
            getOrderLast: ORDER_LAST,
        }),
    },
    methods: {
        ...mapActions({
			setOrder: ORDER,
            setOrderDetail: ORDER_DETAIL,
            setOrderLast: ORDER_LAST,         
            updateOrderDetail: ORDER_DETAIL_UPDATE,       
        }),        
    },
}

module.exports = MapOrder