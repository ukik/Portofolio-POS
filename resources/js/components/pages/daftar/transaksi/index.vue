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
                        <td>{{props.item.kode_transaksi}}</td>
                        <td>{{props.item.nama_customer}}</td>
                        <td>{{props.item.nomor_meja}}</td>
                        <td>{{props.item.total_harga | rupiah}}</td>
                        <td>{{props.item.uang_dibayarkan | rupiah}}</td>
                        <td>{{props.item.uang_dibayarkan - props.item.total_harga | rupiah}}</td>
                        <td class="action text-center">
                            <button class="btn btn-success" @click="onDetail(props.item.kode_transaksi)"><i class="fa fa-eye" /></button>
                            <button class="btn btn-danger" @click="onDetail(props.item.kode_transaksi)"><i class="fa fa-trash-o" /></button>
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
        name: 'daftar_transaksi',
        data() {
            return {
                getter: 'getOrder',
                setter: 'setOrder',
                title: 'Daftar Transaksi',
                route_name: 'daftar-transaksi', // because we use keep-alive cache, so rerender component must be manually
                source: '/transaksi', // segment of url api
                init_params: 'nama_customer', // default params    
                
                thead: [                     
                    {title: 'Kode Transaksi', key: 'kode_transaksi', sort: true},
                    {title: 'Nama Customer', key: 'nama_customer', sort: true},
                    {title: 'Nomor Meja', key: 'nomor_meja', sort: true},
                    {title: 'Total Harga', key: 'total_harga', sort: false},
                    {title: 'Uang Dibayarkan', key: 'uang_dibayarkan', sort: true},
                    {title: 'Uang Kembalian', key: 'uang_kembalian', sort: false},
                    {title: '', key: '', sort: false}
                ],
                filter: [
                    'kode_transaksi',
                    'nama_customer',
                    'nomor_meja',
                    'uang_dibayarkan',
                    '',
                    'menus.nama_menu',
                    'menus.kategori',
                    'menus.harga',
                    'menus.unit',
                    'menus.satuan',
                    'menus.created_at'
                ],
                alias: [
                    'Kode Transaksi',
                    'Nama Customer',
                    'Nomor Meja',
                    'Uang Dibayarkan',
                    '---------------------------',
                    'Menu: Nama Menu',
                    'Menu: Kategori',
                    'Menu: Harga',
                    'Menu: Unit',
                    'Menu: Satuan',
                    'Menu: Tanggal Simpan'
                ]                
            }
        },
        methods: {
            onDetail(payload){
                this.setOrderDetail(payload)
                this.gotoPage({ name:'struk' })
            },             
        }
    }
</script>
