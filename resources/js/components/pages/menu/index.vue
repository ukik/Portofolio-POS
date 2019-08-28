<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="container mt-2">
                <div class="form-row">
                    <Alert>FORMULIR MENU</Alert>

                    <div class="col col-12 col-md-6 col-lg-6 col-xl-6 text-center p-3" id="image-content">
                        <div>
                            <img v-image-preview="foto" id="image-preview-menu" class="col-12 p-0 m-0"  @error="noImage"/>
                            <div class="file-picker">
                                <label class="btn btn-primary" for="image-upload">
                                    <input id="image-upload" @change="onImageChange" type="file" style="display:none"
                                        accept="image/*" />
                                    <span class="fa fa-folder-open"></span>
                                    <span class="buttonText">Choose file</span>
                                    <!--     <span class="badge">1</span> -->
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6 col-lg-6 col-xl-6 p-3" id="main-content">
                        <div class="form-group col-12 p-1 mb-0">
                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label class="font-weight-bold text-secondary" for="menu">Nama Menu</label>
                                    <input :value="getMenuDetail.nama_menu" type="text" class="form-control"
                                        id="nama-menu" placeholder="wajib diisi" required />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label class="font-weight-bold text-secondary" for="kategori">Kategori</label>

                                    <select class="form-control" id="kategori" :value="getMenuDetail.kategori"
                                        placeholder="wajib diisi" required>
                                        <option disabled></option>
                                        <option value="makanan">Makanan</option>
                                        <option value="minuman">Minuman</option>
                                        <option value="camilan">Camilan</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label class="font-weight-bold text-secondary" for="satuan">Satuan</label>

                                    <select class="form-control" id="satuan" placeholder="wajib diisi"
                                        :value="getMenuDetail.satuan" required>
                                        <option disabled></option>
                                        <option value="piring">Piring</option>
                                        <option value="mangkuk">Mangkuk</option>
                                        <option value="gelas">Gelas</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label class="font-weight-bold text-secondary" for="harga">Harga</label>
                                    <input type="number" step="100" class="form-control" :value="getMenuDetail.harga"
                                        id="harga" placeholder="wajib diisi" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 mb-2 p-3" id="submit-content">
                        <button class="btn btn-primary btn-block icon-button" type="submit">
                            <i class="fa fa-save"></i>
                            <span>Simpan Data</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                default_image: "", //"./images/no-menu-1.png"
            };
        },
        computed: {
            foto() {
			console.log(this.getMenuDetail)
                if (_.size(this.getMenuDetail) <= 0) {
                    return null
                }
                if(this.getMenuDetail.foto !== undefined) {
                    if (this.getMenuDetail.foto.length <= 0) {
                        return null
                    }
                    return this.getMenuDetail.foto;
                }
                return null
            }               
        },
        methods: {
            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.default_image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        // $('#image-preview-menu').css('background-image', 'url('+e.target.result +')');

                        $("#image-preview-menu").hide();
                        $("#image-preview-menu").fadeIn(650);

                        const el = document.getElementById("image-preview-menu");
                        el.src = e.target.result;
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            },
            onSubmit() {
                var vm = this;

                vm.$root.request = true;
                const payload = {
                    kode_menu: vm.getMenuDetail.kode_menu,
                    email: $("#email").val(),
                    password: $("#password").val(),
                    nama_menu: $("#nama-menu").val(),
                    kategori: $("#kategori").val(),
                    satuan: $("#satuan").val(),
                    harga: $("#harga").val(),
                    foto: vm.default_image
                };

                axios
                    .post("menu", payload)
                    .then(response => {
                        vm.$root.request = false;
                        if(!response.data.fails){
							vm.deleteMenuDetail(response.data.payload);
                            console.log(response.data);
							vm.gotoPage({ name:'daftar-menu' })
                        } else {
                            Swal.fire({
                                type: "warning",
                                title: "Proses Tidak Berhasil",
                                text: JSON.stringify(response.data.messages),
                                // timer: 3000
                            });                                    
                        }
                    })
                    .catch(error => {
                        vm.$root.request = false;
                    });
            }
        },
        mounted() {
            const vm = this;
            $("#image-upload").change(function (e) {
                vm.readURL(this);
            });
        }
    };

</script>

<style scoped>
    .form-control {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

</style>
