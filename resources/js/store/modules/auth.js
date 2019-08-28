const {
    AUTH,
    LOADING
} = require("../namespaces");

const state = {
    loading: false,
    credential: {
        auth: true, // default is false, true = logged, false = logout
        role: 'manager', // manager or staff      
        token: null,
    }
};

const mutations = {
    [AUTH]: (state, data) => {
        //console.log(data, 'mutations')
        state.credential = data;
        localStorage.setItem('token', data.token)
    },
    [LOADING]: (state, data) => {
        //console.log(data, 'mutations')
        state.loading = data;
    },    
};

const getters = {
    [AUTH]: (state) => {
        return state.credential
    },
    [LOADING]: (state) => {
        return state.loading
    },    
};

const actions = {
    [AUTH]: ({
        commit
    }, data) => {
        //console.log(data, 'actions')
        commit(AUTH, data);
    },
    [LOADING]: ({
        commit
    }, data) => {
        //console.log(data, 'actions')
        commit(LOADING, data);
    },
};

// export this module.
module.exports = {
    state,
    mutations,
    getters,
    actions,
}
