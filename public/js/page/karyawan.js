(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(a,t,e){var i=e(55);"string"==typeof i&&(i=[[a.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(6)(i,s);i.locals&&(a.exports=i.locals)},22:function(a,t,e){"use strict";e.r(t);e(19);var i={data:function(){return{default_image:""}},computed:{foto:function(){return _.size(this.getKaryawanDetail)<=0?null:void 0!==this.getKaryawanDetail.foto?this.getKaryawanDetail.foto.length<=0?null:this.getKaryawanDetail.foto:null}},methods:{onImageChange:function(a){var t=a.target.files||a.dataTransfer.files;t.length&&this.createImage(t[0])},createImage:function(a){var t=new FileReader,e=this;t.onload=function(a){e.default_image=a.target.result},t.readAsDataURL(a)},onSubmit:function(){var a=this;a.$root.request=!0;var t={nik:$("#nik").val(),nama_depan:$("#nama-depan").val(),nama_belakang:$("#nama-belakang").val(),jabatan:$("input[name=jabatan]:checked","#form").val(),alamat:$("#alamat").val(),telpon:$("#telpon").val(),password:$("#password").val(),email:$("#email").val(),tempat_lahir:$("#tempat-lahir").val(),tanggal_lahir:$("#tanggal-lahir").val(),jenis_kelamin:$("input[name=jenis-kelamin]:checked","#form").val(),status:$("input[name=status]:checked","#form").val(),pendidikan_terakhir:$("#pendidikan-terakhir").val(),gaji:$("#gaji").val(),foto:a.default_image};axios.post("karyawan",t).then(function(t){a.$root.request=!1,t.data.fails?Swal.fire({type:"warning",title:"Proses Tidak Berhasil",text:JSON.stringify(t.data.messages)}):(a.deleteKaryawanDetail(t.data.payload),a.gotoPage({name:"daftar-karyawan"}))}).catch(function(t){a.$root.request=!1})},readURL:function(a){if(a.files&&a.files[0]){var t=new FileReader;t.onload=function(a){$("#image-preview").hide(),$("#image-preview").fadeIn(650),document.getElementById("image-preview").src=a.target.result},t.readAsDataURL(a.files[0])}}},mounted:function(){var a=this;$("#image-upload").change(function(t){a.readURL(this)}),$(".form_datetime").datepicker({format:"dd/MM/yyyy",autoclose:!0,todayBtn:!0,startView:2,minView:2})}},s=(e(54),e(1)),r=Object(s.a)(i,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),a.onSubmit(t)}}},[e("div",{staticClass:"container mt-2"},[e("div",{staticClass:"form-row"},[e("Alert",[a._v("FORMULIR KARYAWAN")]),a._v(" "),e("div",{staticClass:"col col-12 col-md-4 col-lg-3 col-xl-3 text-center p-3",attrs:{id:"avatar-content"}},[e("img",{directives:[{name:"image-preview",rawName:"v-image-preview",value:a.foto,expression:"foto"}],staticClass:"rounded-circle",attrs:{id:"image-preview"},on:{error:a.noImage}}),a._v(" "),a._m(0),a._v(" "),e("label",{staticClass:"btn btn-primary",attrs:{for:"image-upload"}},[e("input",{staticStyle:{display:"none"},attrs:{id:"image-upload",type:"file",accept:"image/*"},on:{change:a.onImageChange}}),a._v(" "),e("span",{staticClass:"fa fa-folder-open"}),a._v(" "),e("span",{staticClass:"buttonText"},[a._v("Choose file")])])]),a._v(" "),e("div",{staticClass:"col col-12 col-md-8 col-lg-9 col-xl-9 p-3",attrs:{id:"main-content"}},[e("div",{staticClass:"form-group col-12 p-1 mb-0"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"nik"}},[a._v("KTP")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"nik",placeholder:"wajib diisi 16 digit",required:""},domProps:{value:a.getKaryawanDetail.nik}})]),a._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"password"}},[a._v("\n                                  Kata Sandi\n                                ")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"password",placeholder:"wajib diisi"},domProps:{value:a.getKaryawanDetail.password}})])]),a._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"nama-depan"}},[a._v("Nama Depan")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"nama-depan",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.nama_depan}})]),a._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"nama-belakang"}},[a._v("\n                                    Nama\n                                    Belakang\n                                ")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"nama-belakang",placeholder:""},domProps:{value:a.getKaryawanDetail.nama_belakang}})])]),a._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"telpon"}},[a._v("Telpon")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"telpon",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.telpon}})]),a._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"email"}},[a._v("Email")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.email}})])]),a._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"tempat-lahir"}},[a._v("\n                                    Tempat\n                                    Lahir\n                                ")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"tempat-lahir",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.tempat_lahir}})]),a._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"tanggal-lahir"}},[a._v("\n                                    Tanggal\n                                    Lahir\n                                ")]),a._v(" "),e("div",{staticClass:"input-append date form_datetime"},[e("input",{staticClass:"form-control bg-white",attrs:{size:"16",type:"text",id:"tanggal-lahir",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.tanggal_lahir}}),a._v(" "),e("span",{staticClass:"add-on pull-right"})])])]),a._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"pendidikan-terakhir"}},[a._v("\n                                    Pendidikan\n                                    Terakhir\n                                ")]),a._v(" "),e("select",{staticClass:"form-control",attrs:{id:"pendidikan-terakhir",required:""},domProps:{value:a.getKaryawanDetail.pendidikan_terakhir}},[e("option",{attrs:{disabled:""}}),a._v(" "),e("option",{attrs:{value:"SD"}},[a._v("SD")]),a._v(" "),e("option",{attrs:{value:"SMP"}},[a._v("SMP")]),a._v(" "),e("option",{attrs:{value:"SMA"}},[a._v("SMA")]),a._v(" "),e("option",{attrs:{value:"SMK"}},[a._v("SMK")]),a._v(" "),e("option",{attrs:{value:"MA"}},[a._v("MA")]),a._v(" "),e("option",{attrs:{value:"D3"}},[a._v("D3")]),a._v(" "),e("option",{attrs:{value:"S1"}},[a._v("S1")]),a._v(" "),e("option",{attrs:{value:"S2"}},[a._v("S2")]),a._v(" "),e("option",{attrs:{value:"S3"}},[a._v("S3")]),a._v(" "),e("option",{attrs:{value:"PROF"}},[a._v("PROF")])])]),a._v(" "),e("div",{staticClass:"form-group col-md-6"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"gaji"}},[a._v("Gaji")]),a._v(" "),e("input",{staticClass:"form-control",attrs:{type:"number",step:"1000",id:"gaji",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.gaji}})])]),a._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-4"},[e("label",{staticClass:"font-weight-bold text-secondary"},[a._v("Status")]),a._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"jabatan",id:"jabatan-manager",value:"manager",required:""},domProps:{checked:a.getKaryawanDetail.jabatan}}),a._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"jabatan-manager"}},[a._v("Manager")])]),a._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"jabatan",id:"jabatan-staff",value:"staff",required:""},domProps:{checked:a.getKaryawanDetail.jabatan}}),a._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"jabatan-staff"}},[a._v("Staff")])])]),a._v(" "),e("div",{staticClass:"form-group col-md-4"},[e("label",{staticClass:"font-weight-bold text-secondary"},[a._v("Jenis Kelamin")]),a._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"jenis-kelamin",id:"jenis-kelamin-laki",value:"laki-laki",required:""},domProps:{checked:a.getKaryawanDetail.jenis_kelamin}}),a._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"jenis-kelamin-laki"}},[a._v("Laki-Laki")])]),a._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"jenis-kelamin",id:"jenis-kelamin-perempuan",value:"perempuan",required:""},domProps:{checked:a.getKaryawanDetail.jenis_kelamin}}),a._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"jenis-kelamin-perempuan"}},[a._v("Perempuan")])])]),a._v(" "),e("div",{staticClass:"form-group col-md-4"},[e("label",{staticClass:"font-weight-bold text-secondary"},[a._v("Status")]),a._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"status",id:"status-lajang",value:"lajang",required:""},domProps:{checked:a.getKaryawanDetail.status}}),a._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"status-lajang"}},[a._v("Lajang")])]),a._v(" "),e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"status",id:"status-menikah",value:"menikah",required:""},domProps:{checked:a.getKaryawanDetail.status}}),a._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"status-menikah"}},[a._v("Menikah")])])])]),a._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-12 mb-2"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"alamat"}},[a._v("Alamat")]),a._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"alamat",rows:"2",placeholder:"wajib diisi",required:""},domProps:{value:a.getKaryawanDetail.alamat}})])])])]),a._v(" "),a._m(1)],1)])])])},[function(){var a=this.$createElement,t=this._self._c||a;return t("p",{staticClass:"mt-2"},[t("span",{staticClass:"label label-info",attrs:{id:"upload-file-info"}})])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"col col-12 mb-2 p-3",attrs:{id:"submit-content"}},[t("button",{staticClass:"btn btn-primary btn-block icon-button",attrs:{type:"submit"}},[t("i",{staticClass:"fa fa-save"}),this._v(" "),t("span",[this._v("Simpan Data")])])])}],!1,null,"16f1a6ea",null);t.default=r.exports},54:function(a,t,e){"use strict";var i=e(11);e.n(i).a},55:function(a,t,e){(a.exports=e(5)(!1)).push([a.i,"\n.form-control[data-v-16f1a6ea] {\n    box-shadow: none;\n}\n\n",""])}}]);