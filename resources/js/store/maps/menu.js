const { mapActions, mapGetters } = require('vuex')
const { MENU, MENU_DETAIL, MENU_DETAIL_DELETE, MENU_DETAIL_UPDATE, MENU_SPLICE } = require('../namespaces')

const MapMenu = {
    computed: {
        ...mapGetters({
            getMenu: MENU,
            getMenuDetail: MENU_DETAIL,
        }),
    },
    methods: {
        ...mapActions({
			setMenu: MENU,
            setMenuDetail: MENU_DETAIL,
            deleteMenuDetail: MENU_DETAIL_DELETE,
            updateMenuDetail: MENU_DETAIL_UPDATE,
            spliceMenu: MENU_SPLICE,
        }),        
    },
}

module.exports = MapMenu