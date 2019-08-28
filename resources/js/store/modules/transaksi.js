const {
    ORDER,
    ORDER_DETAIL,
    ORDER_DETAIL_UPDATE,
    ORDER_LAST,
} = require("../namespaces");

const state = {
    transaksi: {
        data: [],
    },
    transaksi_detail: {
        kode_transaksi: null,
        nik: null,
        nama_customer: null,
        nomor_meja: 0,
        uang_dibayarkan: 0,
        created_at: null,
        updated_at: null,
        total_harga: 0,
        karyawan: {
            nik: null,
            nama_depan: null,
            nama_belakang: null,
            jabatan: null,
            alamat: null,
            telpon: null,
            email: null,
            tempat_lahir: null,
            tanggal_lahir: null,
            jenis_kelamin: null,
            status: null,
            pendidikan_terakhir: null,
            gaji: 0,
            created_at: null,
            updated_at: null
        },
        menus: [{
            kode_mutasi: null,
            kode_transaksi: null,
            nama_menu: null,
            unit: 0,
            kategori: null,
            harga: 0,
            satuan: null,
            created_at: null,
            updated_at: null
        }, ]
    },
    transaksi_terakhir: {},
};

const mutations = {
    [ORDER]: (state, data) => {
        //console.log(data, 'mutations')
        state.transaksi = data;
    },
    [ORDER_DETAIL]: (state, id) => {
        const data = state.transaksi.data
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (id == element.kode_transaksi) {
                    state.transaksi_detail = element;
                }
            }
        }
    },
    [ORDER_DETAIL_UPDATE]: (state, payload) => {
        state.transaksi_detail = payload;
    },    
    [ORDER_LAST]: (state, payload) => {
        state.transaksi_terakhir = payload;
    },            
};

const getters = {
    [ORDER]: (state) => {
        return state.transaksi
    },
    [ORDER_DETAIL]: (state) => {
        return state.transaksi_detail
    },
    [ORDER_LAST]: (state) => {
        if (_.size(state.transaksi_terakhir) <= 0) {
            return state.transaksi_detail
        }
        return state.transaksi_terakhir
    },
};

const actions = {
    [ORDER]: ({
        commit
    }, data) => {
        //console.log(data, 'actions')
        commit(ORDER, data);
    },
    [ORDER_DETAIL]: ({
        commit
    }, data) => {
        //console.log(data, 'actions')
        commit(ORDER_DETAIL, data);
    },
    [ORDER_DETAIL_UPDATE]: ({
        commit
    }, data) => {
        commit(ORDER_DETAIL_UPDATE, data);
    },     
    [ORDER_LAST]: ({
        commit
    }, data) => {
        commit(ORDER_LAST, data);
    },         
};

// export this module.
module.exports = {
    state,
    mutations,
    getters,
    actions,
}
