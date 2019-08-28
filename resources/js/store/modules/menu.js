const {
    MENU,
    MENU_DETAIL,
    MENU_DETAIL_DELETE,
    MENU_DETAIL_UPDATE,
    MENU_SPLICE,
} = require("../namespaces");

const state = {
    menu: {
        data: []
    },
    menu_detail: {
        'kode_menu': null,
        'nama_menu': null,
        'kategori': null,
        'harga': null,
        'satuan': null,
        'foto': null,
        'created_at': null,
    },
};

const mutations = {
    [MENU]: (state, data) => {
        //console.log(data, 'mutations')
        state.menu = data;
    },
    [MENU_DETAIL]: (state, id) => {
        const data = state.menu.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.kode_menu) {
                    state.menu_detail = element;
                }
            }
        }
    },
    [MENU_SPLICE]: (state, id) => {
        const data = state.menu.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.kode_menu) {
                    data.splice(i, 1);
                }
            }
        }
    },    
    [MENU_DETAIL_DELETE]: (state) => {
        //console.log(data, 'mutations')
        state.menu_detail = {};
    },
    [MENU_DETAIL_UPDATE]: (state, payload) => {
        state.menu_detail = payload;
    },    
};

const getters = {
    [MENU]: (state) => {
        return state.menu
    },
    [MENU_DETAIL]: (state) => {
        return state.menu_detail
    },
};

const actions = {
    [MENU]: ({
        commit
    }, data) => {
        commit(MENU, data);
    },
    [MENU_DETAIL]: ({
        commit
    }, data) => {
        commit(MENU_DETAIL, data);
    },
    [MENU_DETAIL_DELETE]: ({
        commit
    }) => {
        commit(MENU_DETAIL_DELETE);
    },    
    [MENU_DETAIL_UPDATE]: ({
        commit
    }, data) => {
        // console.log(data)
        commit(MENU_DETAIL_UPDATE, data);
    },
    [MENU_SPLICE]: ({
        commit
    }, data) => {
        // console.log(data)
        commit(MENU_SPLICE, data);
    },    
};

// export this module.
module.exports = {
    state,
    mutations,
    getters,
    actions,
}
