(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{24:function(a,t,e){"use strict";e.r(t);var n={name:"daftar_karyawan",data:function(){return{getter:"getKaryawan",setter:"setKaryawan",title:"Daftar Karyawan",route_name:"daftar-karyawan",source:"/karyawan",init_params:"nama_depan",thead:[{title:"NIK",key:"nik",sort:!0},{title:"Nama Lengkap",key:"nama",sort:!0},{title:"Telpon",key:"telpon",sort:!0},{title:"Email",key:"email",sort:!0},{title:"Jabatan",key:"jabatan",sort:!0},{title:"Gaji",key:"gaji",sort:!0},{title:"",key:"",sort:!1}],filter:["nik","nama_depan","nama_belakang","jabatan","alamat","telpon","email","tempat_lahir","tanggal_lahir","jenis_kelamin","status","pendidikan_terakhir","gaji","created_at","","transaksis.nama_customer","transaksis.nomor_meja","transaksis.uang_dibayarkan","transaksis.created_at"],alias:["NIK","Nama Depan","Nama Belakang","Jabatan","Alamat","Telpon","Email","Tempat Lahir","Tanggal Lahir","Jenis Kelamin","Status","Pendidikan Terakhir","Gaji","Tanggal Simpan","---------------------------","Transaksi: Nama Customer","Transaksi: Nomor Meja","Transaksi: Uang Dibayarkan","Transaksi: Tanggal Simpan"]}},methods:{onDetail:function(a){this.deleteKaryawanDetail(),this.setKaryawanDetail(a),this.gotoPage({name:"karyawan"})},onDelete:function(a){var t=this;Swal.queue([{type:"question",title:"Delete Data?",showLoaderOnConfirm:!0,confirmButtonText:"Proses",cancelButtonText:"Batal",text:"Kode Menu: "+a+", data yang terhapus tidak dapat dikembalikan",showCancelButton:!0,preConfirm:function(){return axios.delete("karyawan/"+a).then(function(e){Swal.insertQueueStep({type:"success",title:"Data Terhapus",timer:3e3,onClose:function(){t.spliceMenu(a)}})}).catch(function(a){Swal.insertQueueStep({type:"error",title:"Data Tidak Terhapus",timer:3e3})})}}])}}},i=e(1),s=Object(i.a)(n,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"container mt-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col mb-2",attrs:{id:"print-content"}},[e("data-viewer",{attrs:{getter:a.getter,setter:a.setter,route_name:a.route_name,init_params:a.init_params,alias:a.alias,source:a.source,thead:a.thead,filter:a.filter,title:a.title},scopedSlots:a._u([{key:"table-body",fn:function(t){return[e("tr",[e("td",[a._v(a._s(t.item.nik))]),a._v(" "),e("td",[a._v(a._s(t.item.nama_depan)+" "+a._s(t.item.nama_belakang))]),a._v(" "),e("td",[a._v(a._s(t.item.telpon))]),a._v(" "),e("td",[a._v(a._s(t.item.email))]),a._v(" "),e("td",[a._v(a._s(t.item.jabatan))]),a._v(" "),e("td",[a._v(a._s(a._f("rupiah")(t.item.gaji)))]),a._v(" "),e("td",{staticClass:"action text-center"},[e("button",{staticClass:"btn btn-success",on:{click:function(e){return a.onDetail(t.item.nik)}}},[e("i",{staticClass:"fa fa-cogs"})]),a._v(" "),e("button",{staticClass:"btn btn-danger",on:{click:function(e){return a.onDelete(t.item.nik)}}},[e("i",{staticClass:"fa fa-trash-o"})])])])]}}])})],1)])])])},[],!1,null,null,null);t.default=s.exports}}]);