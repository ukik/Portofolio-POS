<template>
  <div>
    <div class="container mt-2">
      <div class="row">

        <div class="col mb-2" id="print-content">

            <data-viewer 
                :getter="getter"
                :setter="setter"
                :route_name="route_name"                           
                :init_params="init_params"
                :alias="alias" 
                :source="source" 
                :thead="thead" 
                :filter="filter" 
                :title="title">

                <template slot-scope="props" slot="table-body">
                    <tr>
                        <td>{{props.item.nik}}</td>
                        <td>{{props.item.nama_depan}} {{props.item.nama_belakang}}</td>
                        <!-- <td>{{props.item.alamat}}</td> -->
                        <td>{{props.item.telpon}}</td>
                        <td>{{props.item.email}}</td>
                        <!-- <td>{{props.item.tempat_lahir}}</td> -->
                        <!-- <td>{{props.item.tanggal_lahir}}</td> -->
                        <!-- <td>{{props.item.jenis_kelamin}}</td> -->
                        <td>{{props.item.jabatan}}</td>
                        <!-- <td>{{props.item.status}}</td> -->
                        <!-- <td>{{props.item.pendidikan_terakhir}}</td> -->
                        <td>{{props.item.gaji | rupiah}}</td>
                        <td class="action text-center">
                            <button class="btn btn-success" @click="onDetail(props.item.nik)"><i class="fa fa-cogs" /></button>
                            <button class="btn btn-danger" @click="onDelete(props.item.nik)"><i class="fa fa-trash-o" /></button>
                        </td>
                    </tr>
                </template>
            </data-viewer>

        </div>

      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'daftar_karyawan',
        data() {
            return {
                getter: 'getKaryawan',
                setter: 'setKaryawan',
                title: 'Daftar Karyawan',
                route_name: 'daftar-karyawan', // because we use keep-alive cache, so rerender component must be manually
                source: '/karyawan', // segment of url api
                init_params: 'nama_depan', // default params    
                
                thead: [                     
                    {title: 'NIK', key: 'nik', sort: true},
                    {title: 'Nama Lengkap', key: 'nama', sort: true},
                    // {title: 'Alamat', key: 'alamat', sort: true},
                    {title: 'Telpon', key: 'telpon', sort: true},
                    {title: 'Email', key: 'email', sort: true},
                    {title: 'Jabatan', key: 'jabatan', sort: true},
                    // {title: 'Tempat Lahir', key: 'tempat_lahir', sort: true},
                    // {title: 'Tanggal Lahir', key: 'tanggal_lahir', sort: true},
                    // {title: 'Jenis Kelamin', key: 'jenis_kelamin', sort: true},
                    // {title: 'Status', key: 'status', sort: true},
                    // {title: 'Pendidikan', key: 'pendidikan_terakhir', sort: true},
                    {title: 'Gaji', key: 'gaji', sort: true},
                    {title: '', key: '', sort: false}
                ],
                filter: [
                    'nik',
                    'nama_depan',
                    'nama_belakang',
                    'jabatan',
                    'alamat',
                    'telpon',
                    'email',
                    'tempat_lahir',
                    'tanggal_lahir',
                    'jenis_kelamin',
                    'status',
                    'pendidikan_terakhir',
                    'gaji',
                    'created_at',     
                    '',
                    'transaksis.nama_customer',
                    'transaksis.nomor_meja',
                    'transaksis.uang_dibayarkan',                           
                    'transaksis.created_at',                           
                ],
                alias: [
                    'NIK',
                    'Nama Depan',
                    'Nama Belakang',
                    'Jabatan',
                    'Alamat',
                    'Telpon',
                    'Email',
                    'Tempat Lahir',
                    'Tanggal Lahir',
                    'Jenis Kelamin',
                    'Status',
                    'Pendidikan Terakhir',
                    'Gaji',
                    'Tanggal Simpan',     
                    '---------------------------',
                    'Transaksi: Nama Customer',
                    'Transaksi: Nomor Meja',
                    'Transaksi: Uang Dibayarkan',
                    'Transaksi: Tanggal Simpan',
                ]                
            }
        },
        methods: {
            onDetail(payload){
				this.deleteKaryawanDetail()
                this.setKaryawanDetail(payload)
                this.gotoPage({ name:'karyawan' })
            },     
            onDelete(id) {
                const vm = this;

                Swal.queue([
                {
                    type: "question",
                    title: "Delete Data?",
                    showLoaderOnConfirm: true,
                    confirmButtonText: "Proses",
                    cancelButtonText: "Batal",
                    text: 'Kode Menu: '+id+", data yang terhapus tidak dapat dikembalikan",
                    showCancelButton: true,                    
                    preConfirm: () => {

                        return axios
                            .delete("karyawan/"+id)
                            .then(response => {

                                Swal.insertQueueStep({
                                    type: "success",
                                    title: "Data Terhapus",
                                    // text: data.ip,
                                    timer: 3000,
                                    onClose: () => {
                                        vm.spliceMenu(id)
                                    }
                                });                    

                            })
                            .catch(error => {
                                
                                Swal.insertQueueStep({
                                    type: "error",
                                    title: "Data Tidak Terhapus",
                                    timer: 3000
                                });                      
                            });

                        },
                    }
                ]);              
            }                        
        }
    }
</script>
