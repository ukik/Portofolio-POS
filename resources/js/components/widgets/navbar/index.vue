<template>
    <div id="navigation">
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-button pt-1 pb-2"
            style="background-color: #465765;color: rgb(255,255,255);">
            <div class="container">
                <a class="navbar-brand pb-3 pt-3">WARUNG MAKAN WADAH KITA</a>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav mr-auto" v-if="getAuth.auth && getAuth.token !== null">
                        <li class="dropdown nav-item">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false"
                                href="#">Input Data</a>
                            <div v-no-children class="dropdown-menu" role="menu">
                                <a v-pointer v-if="navbar(['staff','manager'])" class="dropdown-item" @click="gotoMenu">Input Menu</a>
                                <a v-pointer v-if="navbar(['manager'])" class="dropdown-item" @click="gotoKaryawan">Input
                                    Karyawan</a>
                            </div>
                        </li>
                        <li class="dropdown nav-item">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false"
                                href="#">Daftar Data</a>
                            <div v-no-children class="dropdown-menu" role="menu">
                                <a v-pointer class="dropdown-item" v-if="navbar(['manager','staff'])" @click="gotoPage({ name:'daftar-menu' })">Daftar Menu</a>
                                <a v-pointer class="dropdown-item" v-if="navbar(['manager','staff'])" @click="gotoPage({ name:'daftar-transaksi' })">Daftar
                                    Transaksi</a>
                                <a v-pointer class="dropdown-item" v-if="navbar(['manager',''])" @click="gotoPage({ name:'daftar-karyawan' })">Daftar
                                    Karyawan</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a v-pointer class="nav-link" v-if="navbar(['staff'])" @click="gotoPage({ name:'struk', query: { last_order: true, title: 'TERAKHIR' } })">Pesanan Terakhir</a>
                        </li>
                    </ul>
                    <span class="navbar-text actions" v-if="getAuth.auth && getAuth.token !== null">
                        <a class="btn btn-light action-button" v-if="navbar(['staff'])"  @click="gotoPage({ name:'kasir' })">Pesan Kasir</a>
                    </span>
                    <span class="navbar-text mr-2" v-if="getAuth.auth && getAuth.token !== null">
                        <button class="btn btn-outline-secondary color-white" style="color: white;border-color: white; margin-left: 10px; border-radius: 50%;" @click="onLogout"><i class="fa fa-sign-out" /></button>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        gotoMenu(){
            this.gotoPage({ name:'menu' })
            this.deleteMenuDetail()
        },
        gotoKaryawan(){
            this.gotoPage({ name:'karyawan' })
            this.deleteKaryawanDetail()
        },        
        onLogout(){
            const vm = this
            vm.$root.request = true
            axios
                .post(
                "logout",
                )
                .then(response => {
                    // console.log(response);
                    vm.setAuth(response.data);
                    vm.gotoPage({ name:'login' })
                    vm.deleteKaryawanDetail()
                    vm.deleteMenuDetail()
                    vm.$root.request = false
                    localStorage.removeItem('token')
					location.reload()
                })
                .catch(error => {
					vm.$root.request = false				
				});            
        }
    }
}
</script>

<style scoped>
    .nav-item:hover,
    .nav-item:active,
    .nav-item:focus {
        background: #00000075 !important;
        border-radius: 25px !important;
        /* font-weight: bold !important; */
    }

</style>
