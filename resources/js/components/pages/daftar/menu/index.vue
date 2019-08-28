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
                        <td>{{props.item.kode_menu}}</td>
                        <td>{{props.item.nama_menu}}</td>
                        <td>{{props.item.kategori}}</td>
                        <td>{{props.item.harga | rupiah}}</td>
                        <td>{{props.item.satuan}}</td>
                        <td class="action text-center">
                            <button class="btn btn-success" @click="onDetail(props.item.kode_menu)"><i class="fa fa-cogs" /></button>
                            <button class="btn btn-danger" @click="onDelete(props.item.kode_menu)"><i class="fa fa-trash-o" /></button>
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
        name: 'daftar_menu',
        data() {
            return {
                getter: 'getMenu',
                setter: 'setMenu',
                title: 'Daftar Menu',
                route_name: 'daftar-menu', // because we use keep-alive cache, so rerender component must be manually
                source: '/menu', // segment of url api
                init_params: 'nama_menu', // default params    
                
                thead: [                     
                    {title: 'Kode Menu', key: 'kode_menu', sort: true},
                    {title: 'Nama Menu', key: 'nama_menu', sort: true},
                    {title: 'Kategori', key: 'kategori', sort: true},
                    {title: 'Harga', key: 'harga', sort: true},
                    {title: 'Satuan', key: 'satuan', sort: true},
                    {title: '', key: '', sort: false}
                ],
                filter: [
                    'kode_menu',
                    'nama_menu',
                    'kategori',
                    'harga',
                    'satuan',
                    'created_at',
                ],
                alias: [
                    'Kode Menu',
                    'Nama Menu',
                    'Kategori',
                    'Harga',
                    'Satuan',
                    'Tanggal Simpan'
                ]                
            }
        },
        methods: {
            onDetail(payload){
				this.deleteMenuDetail()
                this.setMenuDetail(payload)
                this.gotoPage({ name:'menu' })
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
                            .delete("menu/"+id)
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
