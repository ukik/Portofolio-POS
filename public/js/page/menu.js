(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{10:function(t,a,e){var i=e(53);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(i,o);i.locals&&(t.exports=i.locals)},27:function(t,a,e){"use strict";e.r(a);var i={data:function(){return{default_image:""}},computed:{foto:function(){return console.log(this.getMenuDetail),_.size(this.getMenuDetail)<=0?null:void 0!==this.getMenuDetail.foto?this.getMenuDetail.foto.length<=0?null:this.getMenuDetail.foto:null}},methods:{onImageChange:function(t){var a=t.target.files||t.dataTransfer.files;a.length&&this.createImage(a[0])},createImage:function(t){var a=new FileReader,e=this;a.onload=function(t){e.default_image=t.target.result},a.readAsDataURL(t)},readURL:function(t){if(t.files&&t.files[0]){var a=new FileReader;a.onload=function(t){$("#image-preview-menu").hide(),$("#image-preview-menu").fadeIn(650),document.getElementById("image-preview-menu").src=t.target.result},a.readAsDataURL(t.files[0])}},onSubmit:function(){var t=this;t.$root.request=!0;var a={kode_menu:t.getMenuDetail.kode_menu,email:$("#email").val(),password:$("#password").val(),nama_menu:$("#nama-menu").val(),kategori:$("#kategori").val(),satuan:$("#satuan").val(),harga:$("#harga").val(),foto:t.default_image};axios.post("menu",a).then(function(a){t.$root.request=!1,a.data.fails?Swal.fire({type:"warning",title:"Proses Tidak Berhasil",text:JSON.stringify(a.data.messages)}):(t.deleteMenuDetail(a.data.payload),console.log(a.data),t.gotoPage({name:"daftar-menu"}))}).catch(function(a){t.$root.request=!1})}},mounted:function(){var t=this;$("#image-upload").change(function(a){t.readURL(this)})}},o=(e(52),e(1)),s=Object(o.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("form",{on:{submit:function(a){return a.preventDefault(),t.onSubmit(a)}}},[e("div",{staticClass:"container mt-2"},[e("div",{staticClass:"form-row"},[e("Alert",[t._v("FORMULIR MENU")]),t._v(" "),e("div",{staticClass:"col col-12 col-md-6 col-lg-6 col-xl-6 text-center p-3",attrs:{id:"image-content"}},[e("div",[e("img",{directives:[{name:"image-preview",rawName:"v-image-preview",value:t.foto,expression:"foto"}],staticClass:"col-12 p-0 m-0",attrs:{id:"image-preview-menu"},on:{error:t.noImage}}),t._v(" "),e("div",{staticClass:"file-picker"},[e("label",{staticClass:"btn btn-primary",attrs:{for:"image-upload"}},[e("input",{staticStyle:{display:"none"},attrs:{id:"image-upload",type:"file",accept:"image/*"},on:{change:t.onImageChange}}),t._v(" "),e("span",{staticClass:"fa fa-folder-open"}),t._v(" "),e("span",{staticClass:"buttonText"},[t._v("Choose file")])])])])]),t._v(" "),e("div",{staticClass:"col col-12 col-md-6 col-lg-6 col-xl-6 p-3",attrs:{id:"main-content"}},[e("div",{staticClass:"form-group col-12 p-1 mb-0"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-12"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"menu"}},[t._v("Nama Menu")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"nama-menu",placeholder:"wajib diisi",required:""},domProps:{value:t.getMenuDetail.nama_menu}})])]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-12"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"kategori"}},[t._v("Kategori")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{id:"kategori",placeholder:"wajib diisi",required:""},domProps:{value:t.getMenuDetail.kategori}},[e("option",{attrs:{disabled:""}}),t._v(" "),e("option",{attrs:{value:"makanan"}},[t._v("Makanan")]),t._v(" "),e("option",{attrs:{value:"minuman"}},[t._v("Minuman")]),t._v(" "),e("option",{attrs:{value:"camilan"}},[t._v("Camilan")])])])]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-12"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"satuan"}},[t._v("Satuan")]),t._v(" "),e("select",{staticClass:"form-control",attrs:{id:"satuan",placeholder:"wajib diisi",required:""},domProps:{value:t.getMenuDetail.satuan}},[e("option",{attrs:{disabled:""}}),t._v(" "),e("option",{attrs:{value:"piring"}},[t._v("Piring")]),t._v(" "),e("option",{attrs:{value:"mangkuk"}},[t._v("Mangkuk")]),t._v(" "),e("option",{attrs:{value:"gelas"}},[t._v("Gelas")])])])]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-12"},[e("label",{staticClass:"font-weight-bold text-secondary",attrs:{for:"harga"}},[t._v("Harga")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"number",step:"100",id:"harga",placeholder:"wajib diisi",required:""},domProps:{value:t.getMenuDetail.harga}})])])])]),t._v(" "),t._m(0)],1)])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col col-12 mb-2 p-3",attrs:{id:"submit-content"}},[a("button",{staticClass:"btn btn-primary btn-block icon-button",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-save"}),this._v(" "),a("span",[this._v("Simpan Data")])])])}],!1,null,"a0b24c26",null);a.default=s.exports},52:function(t,a,e){"use strict";var i=e(10);e.n(i).a},53:function(t,a,e){(t.exports=e(5)(!1)).push([t.i,"\n.form-control[data-v-a0b24c26] {\n    box-shadow: none;\n}\n\n",""])}}]);