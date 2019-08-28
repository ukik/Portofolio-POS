const {
    EMPLOYEE,
    EMPLOYEE_DETAIL,
    EMPLOYEE_DETAIL_UPDATE,
    EMPLOYEE_DETAIL_DELETE,
    EMPLOYEE_SPLICE,
} = require("../namespaces");

const state = {
    karyawan: {
        data: []
    },
    karyawan_detail: { }
};

const mutations = {
    [EMPLOYEE]: (state, data) => {
        //console.log(data, 'mutations')
        state.karyawan = data;
    },
    [EMPLOYEE_DETAIL]: (state, id) => {
        const data = state.karyawan.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.nik) {
                    state.karyawan_detail = element;
                }
            }
        }
    },
    [EMPLOYEE_SPLICE]: (state, id) => {
        const data = state.karyawan.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.nik) {
                    data.splice(i,1)
                }
            }
        }
    },    
    [EMPLOYEE_DETAIL_DELETE]: (state) => {
        //console.log(data, 'mutations')
        state.karyawan_detail = {};
    },    
    [EMPLOYEE_DETAIL_UPDATE]: (state, payload) => {
        state.karyawan_detail = payload;
    },        
};

const getters = {
    [EMPLOYEE]: (state) => {
        return state.karyawan
    },
    [EMPLOYEE_DETAIL]: (state) => {
        return state.karyawan_detail
    },
};

const actions = {
    [EMPLOYEE]: ({
        commit
    }, data) => {
        commit(EMPLOYEE, data);
    },
    [EMPLOYEE_DETAIL]: ({
        commit
    }, data) => {
        commit(EMPLOYEE_DETAIL, data);
    },
    [EMPLOYEE_DETAIL_DELETE]: ({
        commit
    }) => {
        commit(EMPLOYEE_DETAIL_DELETE);
    },        
    [EMPLOYEE_DETAIL_UPDATE]: ({
        commit
    }, data) => {
        commit(EMPLOYEE_DETAIL_UPDATE, data);
    },    
    [EMPLOYEE_SPLICE]: ({
        commit
    }, data) => {
        // console.log(data)
        commit(EMPLOYEE_SPLICE, data);
    },        
};

// export this module.
module.exports = {
    state,
    mutations,
    getters,
    actions,
}
