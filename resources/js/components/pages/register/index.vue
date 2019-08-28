<template>
    <div>
        <form @submit.prevent="onSubmit" id="form">
            <div class="container mt-2">
                <div class="form-row">
                    <Alert>FORMULIR KARYAWAN</Alert>

                    <div class="col col-12 col-md-4 col-lg-3 col-xl-3 text-center p-3" id="avatar-content">
                        <img v-image-preview="foto" id="image-preview" class="rounded-circle" />
                        <p class="mt-2">
                            <span class="label label-info" id="upload-file-info"></span>
                        </p>
                        <label class="btn btn-primary" for="image-upload">
                            <input id="image-upload" @change="onImageChange" type="file" style="display:none" accept="image/*"/>
                            <span class="fa fa-folder-open"></span>
                            <span class="buttonText">Choose file</span>
                            <!--     <span class="badge">1</span> -->
                        </label>
                    </div>
                    <div class="col col-12 col-md-8 col-lg-9 col-xl-9 p-3" id="main-content">
                        <div class="form-group col-12 p-1 mb-0">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="nik">KTP</label>
                                    <input :value="getKaryawanDetail.nik" type="text" class="form-control"
                                        id="nik" placeholder="wajib diisi 16 digit" required />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="password">
                                      Kata Sandi
                                    </label>
                                    <input :value="getKaryawanDetail.password" type="text" class="form-control"
                                        id="password" placeholder="wajib diisi" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="nama-depan">Nama Depan</label>
                                    <input :value="getKaryawanDetail.nama_depan" type="text" class="form-control"
                                        id="nama-depan" placeholder="wajib diisi" required />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="nama-belakang">
                                        Nama
                                        Belakang
                                    </label>
                                    <input :value="getKaryawanDetail.nama_belakang" type="text" class="form-control"
                                        id="nama-belakang" placeholder />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="telpon">Telpon</label>
                                    <input :value="getKaryawanDetail.telpon" type="text" class="form-control"
                                        id="telpon" placeholder="wajib diisi" required />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="email">Email</label>
                                    <input :value="getKaryawanDetail.email" type="email" class="form-control" id="email"
                                        placeholder="wajib diisi" required />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="tempat-lahir">
                                        Tempat
                                        Lahir
                                    </label>
                                    <input :value="getKaryawanDetail.tempat_lahir" type="text" class="form-control"
                                        id="tempat-lahir" placeholder="wajib diisi" required />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="tanggal-lahir">
                                        Tanggal
                                        Lahir
                                    </label>
                                    <div class="input-append date form_datetime">
                                        <input :value="getKaryawanDetail.tanggal_lahir" size="16" type="text"
                                            class="form-control bg-white" id="tanggal-lahir" placeholder="wajib diisi"
                                            required />
                                        <!--      tag dibawah ini wajib ada        -->
                                        <span class="add-on pull-right"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="pendidikan-terakhir">
                                        Pendidikan
                                        Terakhir
                                    </label>
                                    <select class="form-control" id="pendidikan-terakhir"
                                        :value="getKaryawanDetail.pendidikan_terakhir" required>
                                        <option disabled />
                                        <option value="SD">SD</option>
                                        <option value="SMP">SMP</option>
                                        <option value="SMA">SMA</option>
                                        <option value="SMK">SMK</option>
                                        <option value="MA">MA</option>
                                        <option value="D3">D3</option>
                                        <option value="S1">S1</option>
                                        <option value="S2">S2</option>
                                        <option value="S3">S3</option>
                                        <option value="PROF">PROF</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="font-weight-bold text-secondary" for="gaji">Gaji</label>
                                    <input :value="getKaryawanDetail.gaji" type="number" step="1000"
                                        class="form-control" id="gaji" placeholder="wajib diisi" required />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label class="font-weight-bold text-secondary">Status</label>

                                    <div class="form-check">
                                        <input :checked="getKaryawanDetail.jabatan" class="form-check-input" type="radio"
                                            name="jabatan" id="jabatan-manager" value="manager" required />
                                        <label class="form-check-label" for="jabatan-manager">Manager</label>
                                    </div>
                                    <div class="form-check">
                                        <input :checked="getKaryawanDetail.jabatan" class="form-check-input" type="radio"
                                            name="jabatan" id="jabatan-staff" value="staff" required />
                                        <label class="form-check-label" for="jabatan-staff">Staff</label>
                                    </div>
                                </div>

                                <div class="form-group col-md-4">
                                    <label class="font-weight-bold text-secondary">Jenis Kelamin</label>

                                    <div class="form-check">
                                        <input :checked="getKaryawanDetail.jenis_kelamin" class="form-check-input"
                                            type="radio" name="jenis-kelamin" id="jenis-kelamin-laki" value="laki-laki"
                                            required />
                                        <label class="form-check-label" for="jenis-kelamin-laki">Laki-Laki</label>
                                    </div>
                                    <div class="form-check">
                                        <input :checked="getKaryawanDetail.jenis_kelamin" class="form-check-input"
                                            type="radio" name="jenis-kelamin" id="jenis-kelamin-perempuan"
                                            value="perempuan" required />
                                        <label class="form-check-label" for="jenis-kelamin-perempuan">Perempuan</label>
                                    </div>
                                </div>

                                <div class="form-group col-md-4">
                                    <label class="font-weight-bold text-secondary">Status</label>

                                    <div class="form-check">
                                        <input :checked="getKaryawanDetail.status" class="form-check-input" type="radio"
                                            name="status" id="status-lajang" value="lajang" required />
                                        <label class="form-check-label" for="status-lajang">Lajang</label>
                                    </div>
                                    <div class="form-check">
                                        <input :checked="getKaryawanDetail.status" class="form-check-input" type="radio"
                                            name="status" id="status-menikah" value="menikah" required />
                                        <label class="form-check-label" for="status-menikah">Menikah</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-12 mb-2">
                                    <label class="font-weight-bold text-secondary" for="alamat">Alamat</label>
                                    <textarea :value="getKaryawanDetail.alamat" class="form-control" id="alamat"
                                        rows="2" placeholder="wajib diisi" required></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 mb-2 p-3" id="submit-content">
                        <button class="btn btn-primary btn-block icon-button" type="submit">
                            <i class="fa fa-save"></i>
                            <span>Simpan Data</span>
                        </button>
                        <button class="btn btn-danger btn-block icon-button" type="button" @click="$router.back()">
                            <i class="fa fa-arrow-left"></i>
                            <span>Login</span>
                        </button>                        
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import "../../../libraries/bootstrap-datepicker3.min.js";

    export default {
        data() {
            return {
                default_image: "", //"./images/no-menu-1.png"
            };
        },
        // watch: {
        //   "$route.name": function(val) {
        //     this.data_karyawan.push(this.getKaryawanDetail);
        //   }
        // },
        computed: {
            foto() {
                if (_.size(this.getKaryawanDetail) <= 0) {
                    return null
                }
                if(this.getKaryawanDetail.foto !== undefined) {
                    if (this.getKaryawanDetail.foto.length <= 0) {
                        return null
                    }
                    return this.getKaryawanDetail.foto;
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

            onSubmit() {
                var vm = this;

                vm.$root.request = true;
                const payload = {
                    nik: $('#nik').val(),
                    nama_depan: $('#nama-depan').val(),
                    nama_belakang: $('#nama-belakang').val(),
                    jabatan: $('input[name=jabatan]:checked','#form').val(),
                    alamat: $('#alamat').val(),
                    telpon: $('#telpon').val(),
                    password: $('#password').val(),
                    email: $('#email').val(),
                    tempat_lahir: $('#tempat-lahir').val(),
                    tanggal_lahir: $('#tanggal-lahir').val(),
                    jenis_kelamin: $('input[name=jenis-kelamin]:checked','#form').val(),
                    status: $('input[name=status]:checked','#form').val(),
                    pendidikan_terakhir: $('#pendidikan-terakhir').val(),
                    gaji: $('#gaji').val(),
                    foto: vm.default_image
                };

                axios
                    .post("register", payload)
                    .then(response => {
                        vm.$root.request = false;
                        if(!response.data.fails){
                            vm.setAuth(response.data)
                            console.log(response.data);
							
							switch (response.data.role) {
								case 'manager':
									vm.gotoPage({ name: 'daftar-karyawan' })
									break;
								default:
									vm.gotoPage({ name: 'kasir' })
									break;
							}							
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
            },
            readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        // $('#image-preview').css('background-image', 'url('+e.target.result +')');

                        $("#image-preview").hide();
                        $("#image-preview").fadeIn(650);

                        const el = document.getElementById("image-preview");
                        el.src = e.target.result;
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            }
        },
        mounted() {
            const vm = this;

            $("#image-upload").change(function (e) {
                vm.readURL(this);
                // $("#upload-file-info").html(e.target.files[0].name);
            });

            // bootstrap-datepicker
            $(".form_datetime").datepicker({
                format: "dd/MM/yyyy",
                autoclose: true,
                todayBtn: true,
                // Use startView option (0-days, 1-months, 2-years, see plugin docs):
                startView: 2,
                // stop pick to month, disable to pick time
                minView: 2
            });

            // document.getElementById("image-preview").src = vm.default_image;
        }
    };

</script>

<style scoped>
    .form-control {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

</style>
