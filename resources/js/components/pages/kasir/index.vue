<template>
  <div>
    <div class="container mt-2">
      <div class="row">
        <div class="col-md-6" id="left-content">
          <form>
            <section id="section-cashier">
              <div id="list-product">
                <div class="col-md-12 search-table-col col-12 p-1">
                  <!--
<div class="form-group pull-left col-lg-4">
    <input type="text" class="search form-control" placeholder="Filter Menu" />
</div>
<span class="counter pull-right"></span>
                  -->
                  <div
                    class="table-responsive table-bordered table table-hover results mb-0"
                    id="table-ordered-products"
                  >
                    <table class="table table-bordered table-hover">
                      <thead class="bill-header cs">
                        <tr>
                          <th class="col-1">Produk</th>
                          <th colspan="3">Unit</th>
                          <th>Harga</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody id="list-menu-ordered">
                        <tr id="no-menu" class="warning no-result">
                          <td colspan="12">
                            <i class="fa fa-warning"></i> Tidak Ditemukan
                            Menu...
                          </td>
                        </tr>

                        <tr v-for="(payload, index) in menu_ordered_array" :key="index+1">
                          <td>{{ payload.name }}</td>
                          <td class="list-product-td-minus" :id="'minus-'+payload.id">
                            <button
                              class="btn btn-primary btn-unit-minus"
                              type="button"
                              @click="updateMenuOrdered($event,{id:payload.id,type:'minus'})"
                            >
                              <i class="fa fa-minus"></i>
                            </button>
                          </td>
                          <td class="list-product-td-unit" :id="'unit-'+payload.id">{{ payload.qty }}</td>
                          <td class="list-product-td-add" :id="'add-'+payload.id">
                            <button
                              class="btn btn-primary btn-unit-add"
                              type="button"
                              @click="updateMenuOrdered($event,{id:payload.id,type:'add'})"
                            >
                              <i class="fa fa-plus"></i>
                            </button>
                          </td>
                          <td :id="'price-'+payload.id">
                            <input
                              :value="payload.price | rupiah"
                              class="input-disabled"
                              disabled
                              readonly
                            />
                          </td>
                          <td :id="'total-'+payload.id">
                            <input
                              :value="payload.price * payload.qty | rupiah"
                              class="input-disabled"
                              disabled
                              readonly
                            />
                          </td>
                          <td>
                            <button
                              class="btn btn-danger"
                              style="margin-left: 5px;"
                              type="button"
                              @click="updateMenuOrdered($event,{id:payload.id,type:'delete'})"
                            >
                              <i class="fa fa-trash" style="font-size: 15px;"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    class="table-responsive table-bordered table table-hover results mb-2"
                    id="table-ordered-products-total"
                  >
                    <table class="table table-bordered table-hover">
                      <thead class="bill-header cs">
                        <tr></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="auto">
                            <strong>Total Harga</strong>
                          </td>
                          <td class="p0 pr-2" colspan="2">
                            <input
                              class="form-control auto-calculation-input"
                              type="text"
                              id="total-price"
                              readonly
                              disabled
                            />
                          </td>
                        </tr>
                        <tr>
                          <td width="auto">
                            <strong>Uang Dibayarkan</strong>
                          </td>
                          <td colspan="2">
                            <div class="form-row">
                              <div class="col col-2">
                                <span>Rp.</span>
                              </div>
                              <div class="col">
                                <input
                                  class="form-control"
                                  type="number"
                                  id="paid-money"
                                  placeholder="wajib diisi"
                                  step="100"
                                  required
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="auto">
                            <strong>Sisa Kembalian</strong>
                          </td>
                          <td colspan="2">
                            <input
                              class="form-control auto-calculation-input"
                              type="text"
                              id="change-money"
                              readonly
                              disabled
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div id="list-payment">
                <div class="form-group mb-3 col-12 p-1" id="profile-transaction">
                  <div class="input-group mb-1">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        Nama
                        Customer
                      </span>
                    </div>
                    <input
                      class="form-control"
                      type="text"
                      id="nama-customer"
                      required
                      placeholder="wajib diisi"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fa fa-user"></i>
                      </button>
                    </div>
                  </div>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        Nomor
                        Meja
                      </span>
                    </div>
                    <input
                      class="form-control"
                      type="number"
                      id="nomor-meja"
                      required
                      placeholder="wajib diisi"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fa fa-pencil-square-o"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col pl-2">
                    <label class="col-form-label">
                      <strong id="struk-order">
                        Struk:
                        <br />
                      </strong>
                    </label>
                  </div>
                  <div class="col">
                    <button class="btn btn-primary btn-block icon-button" type="submit">
                      <i class="fa fa-shopping-basket"></i>
                      <span>
                        &nbsp;Proses
                        Pesanan
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
        
        <div class="col-md-6" id="right-content">
          <div class="filterizr-control">
            <ul id="filterizr-filter" v-if="ui_complete && jquery_complete" class="filterizr-filter col-12 p-1 m-0 overflow-auto">
              <div class="btn-group col-12 pl-0 pr-0" role="group">
                <button type="button" class="btn btn-outline-secondary" data-filter="all">Semua</button>
                <button type="button" class="btn btn-outline-primary" data-filter="makanan">Makanan</button>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  data-filter="minuman"
                >Minuman</button>
                <button type="button" class="btn btn-outline-danger" data-filter="camilan">Camilan</button>
              </div>
            </ul>

            <div class="input-group mb-3 col-12 p-1 filtr-search">
              <div class="input-group-append">
                <span class="input-group-text btn btn-primary">
                  <i class="fa fa-search"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="cari menu..." data-search />
            </div>
          </div>
          <div id="app"></div>
          <div class="article-list filtr-container demo-gallery">
            <div class="container col-12">

              <div class="row articles" v-if="ui_complete && jquery_complete">
                <div  v-for="(menu, index) in filterMenu('makanan')" :key="index+'A'"
                  class="col-sm-6 col-md-3 item pt-0 pb-1 pl-1 pr-1 filtr-item"
                  :data-category="menu.kategori"
                  :data-title="menu.kategori" >
                  <a 
                    :href="foto(menu.foto)"
                    target="_blank"
                    data-width="1600"
                    :data-caption="'Makanan: '+ menu.nama_menu + ', Harga: '+ rupiah(menu.harga)"
                    data-height="800"
                    data-size="1600x800"
                    :data-med="foto(menu.foto)"
                    data-med-size="1024x600"
                    class="demo-gallery__img--main"
                  >
                    <div class="item-image-wrapper">
                      <div v-menu-display="menu.kategori" class="zoomin frame" style="width:100%;height:135px;">
                        <img :src="foto(menu.foto)" style="width:100%;height:135px;" />
                      </div>
                    </div>
                  </a>
                  <h3 class="name">{{ menu.nama_menu }}</h3>
                  <button
                    class="btn btn-primary m-2"
                    type="button"
                    v-btn-menu-display="menu.kategori"
                    @click="orderMenu($event,{
                      id:menu.kode_menu,
                      category:menu.kategori,
                      price:menu.harga,
                      name:menu.nama_menu,
                      qty:1
                    })"
                  >
                    {{ menu.harga | rupiah('short') }}
                  </button>
                </div>

                <div  v-for="(menu, index) in filterMenu('minuman')" :key="index+'B'"
                  class="col-sm-6 col-md-3 item pt-0 pb-1 pl-1 pr-1 filtr-item"
                  :data-category="menu.kategori"
                  :data-title="menu.kategori" >
                  <a
                    :href="foto(menu.foto)"
                    target="_blank"
                    data-width="1600"
                    :data-caption="'Minuman: '+ menu.nama_menu + ', Harga: '+ rupiah(menu.harga)"
                    data-height="800"
                    data-size="1600x800"
                    :data-med="foto(menu.foto)"
                    data-med-size="1024x600"
                    class="demo-gallery__img--main"
                  >
                    <div class="item-image-wrapper">
                      <div v-menu-display="menu.kategori" class="zoomin frame" style="width:100%;height:135px;">
                        <img :src="foto(menu.foto)" style="width:100%;height:135px;" />
                      </div>
                    </div>
                  </a>
                  <h3 class="name">{{ menu.nama_menu }}</h3>
                  <button
                    class="btn btn-primary m-2"
                    type="button"
                    v-btn-menu-display="menu.kategori"
                    @click="orderMenu($event,{
                      id:menu.kode_menu,
                      category:menu.kategori,
                      price:menu.harga,
                      name:menu.nama_menu,
                      qty:1
                    })"
                  >
                    {{ menu.harga | rupiah('short') }}
                  </button>
                </div>

                <div  v-for="(menu, index) in filterMenu('camilan')" :key="index+'C'"
                  class="col-sm-6 col-md-3 item pt-0 pb-1 pl-1 pr-1 filtr-item"
                  :data-category="menu.kategori"
                  :data-title="menu.kategori" >
                  <a
                    :href="foto(menu.foto)"
                    target="_blank"
                    data-width="1600"
                    :data-caption="'Camilan: '+ menu.nama_menu + ', Harga: '+ rupiah(menu.harga)"
                    data-height="800"
                    data-size="1600x800"
                    :data-med="foto(menu.foto)"
                    data-med-size="1024x600"
                    class="demo-gallery__img--main"
                  >
                    <div class="item-image-wrapper">
                      <div v-menu-display="menu.kategori" class="zoomin frame" style="width:100%;height:135px;">
                        <img :src="foto(menu.foto)" style="width:100%;height:135px;" />
                      </div>
                    </div>
                  </a>
                  <h3 class="name">{{ menu.nama_menu }}</h3>
                  <button
                    class="btn btn-primary m-2"
                    type="button"
                    v-btn-menu-display="menu.kategori"
                    @click="orderMenu($event,{
                      id:menu.kode_menu,
                      category:menu.kategori,
                      price:menu.harga,
                      name:menu.nama_menu,
                      qty:1
                    })"
                  >
                    {{ menu.harga | rupiah('short') }}
                  </button>
                </div>
              </div>
            </div>

          </div>


          <!-- Root element of PhotoSwipe. Must have class pswp. -->
          <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
              <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
              </div>
              <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                  <div class="pswp__counter"></div>
                  <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                  <button class="pswp__button pswp__button--share" title="Share"></button>
                  <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                  <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                  <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div class="pswp__share-tooltip"></div>
                </div>
                <button
                  class="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                ></button>
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div class="pswp__caption">
                  <div class="pswp__caption__center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSwipe from "../../../libraries/photoswipe.min.js";
// import "../../../libraries/photoswipe-ui-default.min.js";
import "../../../libraries/jquery.filterizr.min.js";

export default {
  data() {
    return {
      ui_complete: false,
      jquery_complete: false,
      waiting: null,
      // menu_ordered_array = {id:2,category:'camilan',price:1000,name:'es teh',qty:1}
      menu_ordered_array: [],
      total_price: 0,
      paid_money: 0,
      change_money: 0,
      code_order: "",
    };
  },
  watch: {
    '$route.name': function(val){
      if(val === 'kasir')
        this.fetchData()
        this.generateCodeOrder();

        clearInterval(this.waiting)
        this.waiting = setInterval(() => {
          if(this.ui_complete) {
            // console.log(vm.getMenu)
            this.jquery_complete = true
            if(this.getMenu.data.length > 0) {
              // this.onFilterizr();
              this.onPhotoSwipe();
              console.log('refresh')
            }
            this.$root.request = false
            clearInterval(this.waiting)
          }
        }, 500);      
    }
  },
  computed: {
    filterMenu(){
      const vm = this
      return function(params) {
        var temp_array = []
        if(vm.getMenu.data !== undefined) {
          vm.getMenu.data.forEach((element, index) => {
            if(element.kategori === params) {
              temp_array.push(element)
            }
          });
        }
        // console.log(temp_array)
        return temp_array
      }
    },
    foto(){
      return function(foto) {
        if(foto === undefined || foto.length <= 0){
          return './images/no-menu-1.png'
        }
        return foto
      }
    }
  },
  methods: {
    onFilterizr() {
      // You can override any of these options and then call...
      $(".filterizr-filter li").click(function() {
        var targetFilter = $(this).data("multifilter");
        if (targetFilter === "all") {
          $(".filterizr-filter li").removeClass("filtr-active");
          $(this).addClass("filtr-active");
          filterizd.filterizr("filter", "all");
          filterizd._fltr._toggledCategories = {};
        } else {
          $('.filterizr-filter li[data-multifilter="all"]').removeClass(
            "filtr-active"
          );
          $(this).toggleClass("filtr-active");
          filterizd.filterizr("toggleFilter", targetFilter);
        }
        if (!filterizd._fltr._multifilterModeOn()) {
          $('.filterizr-filter li[data-multifilter="all"]').addClass(
            "filtr-active"
          );
        }
      });

      var filterizd = $(".filtr-container").filterizr();
      filterizd.filterizr('sort', 'title', 'desc');
    },

    onPhotoSwipe() {
      var container = []; // global

      (function($) {
        // Init empty gallery array
        var initGallery = function() {
          container = [];

          // Loop over gallery items and push it to the array
          $(".demo-gallery")
            .find(".filtr-item:not(.filteredOut) a")
            .each(function() {
              var $link = $(this),
                item = {
                  src: $link.attr("href"),
                  w: $link.data("width"),
                  h: $link.data("height"),
                  title: $link.data("caption")
                };
              container.push(item);
            //   console.log(JSON.stringify(container));
            });
        };

        // Define click event on gallery item
        $("a.demo-gallery__img--main").click(function(event) {
        //   console.log(event);

          // Prevent location change
          event.preventDefault();

          initGallery();

          // Define object and gallery options
          var $pswp = $(".pswp")[0],
            options = {
              index: $(this)
                .parent("figure")
                .index(),
              bgOpacity: 0.85,
              shareEl: false,
              shareButtons: [
                {
                  id: "download",
                  label: "Download image",
                  url: "{{raw_image_url}}",
                  download: true
                }
              ],
              showHideOpacity: true
            };

          // Initialize PhotoSwipe
          var gallery = new PhotoSwipe(
            $pswp,
            PhotoSwipeUI_Default,
            container,
            options
          );
          gallery.init();
        });
      })(jQuery);
    },

    orderMenu(e, payload) {
      this.filterMenuOrderedArray(this.menu_ordered_array, payload);
    },

    filterMenuOrderedArray(array, payload) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].id == payload.id) {
          //console.log('sudah ada');

          const unit = document.getElementById("unit-" + payload.id);
          const total = document.getElementById("total-" + payload.id);

          array[i].qty += payload.qty;
          //unit.innerText = array[i].qty;
          //total.innerText = this.rupiah(array[i].qty * array[i].price);

          this.updateTotalPrice(payload.price);

          return true;
        }
      }

      array.push(payload);

      this.updateTotalPrice(payload.price);

      return false;
    },

    updateMenuOrdered(e, payload) {
      const array = this.menu_ordered_array;

      for (var i = 0; i < array.length; i++) {
        if (array[i].id == payload.id) {
          const unit = document.getElementById("unit-" + payload.id);
          const total = document.getElementById("total-" + payload.id);

          switch (payload.type) {
            case "add":
              array[i].qty += 1;
              //unit.innerText = array[i].qty;
              //total.innerText = this.rupiah(array[i].qty * array[i].price);

              this.updateTotalPrice(array[i].price);

              break;
            case "minus":
              array[i].qty -= 1;
              //unit.innerText = array[i].qty;
              //total.innerText = this.rupiah(array[i].qty * array[i].price);

              this.updateTotalPrice(-array[i].price);

              if (array[i].qty <= 0) {
                array[i].qty = 0;
                array.splice(i, 1);
                //e.parentNode.parentNode.remove(); // DOM
              }
              break;

            case "delete":
              this.updateTotalPrice(-(array[i].qty * array[i].price));
              array.splice(i, 1);
              //e.parentNode.parentNode.remove(); // DOM

              break;
          }
        }
      }
    },

    updateChangeMoney(paid) {
      this.paid_money = paid;
      console.log(this.paid_money, this.total_price)
      this.change_money =  this.paid_money - this.total_price;
      $("#change-money").val(this.rupiah(this.change_money));
    },

    updateTotalPrice(price) {
      this.total_price += price;
      $("#total-price").val(this.rupiah(this.total_price));
      this.updateChangeMoney($("#paid-money").val());
      this.total_price <= 0 ? $("#no-menu").show() : $("#no-menu").hide();
      //console.log(this.menu_ordered_array);
    },

    generateCodeOrder() {
      const code = Math.round(Math.random() * 100);
      const date = new Date();
      this.code_order =
        "#" +
        code +
        "/" +
        date.getDate() +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear() +
        "/" +
        date.getHours() +
        "-" +
        date.getMinutes() +
        "-" +
        date.getSeconds();

      $("#struk-order").text("Struk: " + this.code_order);
    },

    fetchData() {
      var vm = this;
      vm.$root.request = true
      vm.ui_complete = false
      axios
        .get('transaksi-menu')
        .then(function(response) {
          vm.ui_complete = true
          // console.log(response.data);
          vm.setMenu(response)
          if(vm.ui_complete && vm.jquery_complete){
            vm.$root.request = false
          }
        })
        .catch(function(error) {
          // console.log(error)
          if(vm.ui_complete && vm.jquery_complete){
            vm.$root.request = false
          }
        });
    },    
  },
  mounted() {
    const vm = this;

    vm.fetchData()

    var element = null
    clearInterval(vm.waiting)
    vm.waiting = setInterval(() => {
      element = (document.getElementsByClassName('demo-gallery__img--main').length > 0)
      if(vm.ui_complete) {
        // console.log(vm.getMenu)
        vm.jquery_complete = true
        if(vm.getMenu.data.length > 0) {
          if(element) {
            vm.onFilterizr();
          }
          vm.onPhotoSwipe();
        }
        if(element) {
          clearInterval(vm.waiting)
        }
        vm.$root.request = false
        console.log('waiting init');
      }
    }, 500);


    $(document).ready(function() {
      $("#no-menu").show();

      vm.generateCodeOrder();

      $("#paid-money").keyup(function(e) {
        vm.updateChangeMoney(e.target.value);
      });
      $("#paid-money").change(function(e) {
        vm.updateChangeMoney(e.target.value);
      });

      $("form").submit(function(e) {
        e.preventDefault();

        if (vm.total_price <= 0) {
          Swal.fire({
            timer: 4000,
            title: "Perhatian",
            text: "Tidak Ditemukan Menu!",
            type: "warning"
          });
          return;
        } else if (vm.change_money <= -1) {
          Swal.fire({
            timer: 4000,
            title: "Perhatian",
            text: "Uang Dibayarkan Kurang!",
            type: "error"
          });
          return;
        }

        Swal.queue([
          {
            type: "question",
            title: "Proses Pesanan",
            confirmButtonText: "Proses",
            cancelButtonText: "Batal",
            text: "Setelah data pesanan diproses, tidak dapat lagi diubah. Selanjutnya dapat dicetak struk",
            showLoaderOnConfirm: true,
            showCancelButton: true,            
            preConfirm: () => {

              // vm.$root.request = true;
              const payload = {
                kode_transaksi: vm.code_order,
                menu_ordered_array: vm.menu_ordered_array,
                total_harga: vm.total_price,
                uang_dibayarkan: vm.paid_money,
                uang_kembalian: vm.change_money,
                nama_customer: $('#nama-customer').val(),
                nomor_meja: $('#nomor-meja').val(),
              };

              return axios
                  .post("transaksi", payload)
                  .then(response => {

                      console.log('transaksi', response.data);
                      // vm.$root.request = false;

                      vm.menu_ordered_array = [];
                      vm.total_price = 0;
                      vm.paid_money = 0;
                      vm.change_money = 0;
                      vm.code_order = "";

                      $("#total-price").val(null)
                      $("#nama-customer").val(null)
                      $("#nomor-meja").val(null)
                      $("#change-money").val(null)
                      $("#paid-money").val(null)

                      vm.setOrderLast(response.data.payload)

                      Swal.insertQueueStep({
                        type: "success",
                        title: "Proses Berhasil",
                        // text: data.ip,
                        timer: 3000,
                        onClose: () => {
                          vm.gotoPage({ name:'struk', query: { last_order: true, title: 'TERAKHIR' } })
                        }
                      });                    

                  })
                  .catch(error => {
                      // vm.$root.request = false;
                      Swal.insertQueueStep({
                        type: "error",
                        title: "Proses Tidak Berhasil",
                        timer: 3000
                      });                      
                  });

            },
          }
        ]);
      });
    });
  }
};
</script>


<style scoped>
.auto-calculation-input,
.form-control:disabled,
.form-control[readonly] {
  border: 0;
  border-bottom-width: 1px;
  background: #ffffff00;
  /* border-bottom-style: inset; */
  text-align: right;
  font-size: 14px;
}
div#table-ordered-products {
    padding-right: 0px;
}
.form-control {
    -webkit-box-shadow: none;
    box-shadow: none;  
}
</style>
