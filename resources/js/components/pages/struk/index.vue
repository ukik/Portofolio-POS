<template>
  <div>
    <div class="container mt-2">
      <div class="row">
        <Alert>
          STRUK PESANAN {{ $route.query.title }}
          <p
            class="wtg-alert-text"
            slot="alert-text"
          >Cetak struk pesanan 2 rangkap untuk diberikan kepada: pelayan/koki dan customer</p>
        </Alert>

        <div class="col mb-2 pt-3 pb-3" id="print-content" style="padding-right: 1.70%; padding-left: 1.8%;">
          <button class="btn btn-primary btn-block icon-button" type="button" @click="onPrint">
            <i class="fa fa-print"></i>
            <span>Cetak Struk Pesanan</span>
          </button>
        </div>
        <div class="col col-12" id="main-content">
          <section id="section-cashier">
            <div id="list-product">
              <div class="col-md-12 search-table-col col-12 p-1">
                <div class="table-responsive table table-hover results mb-0">
                  <table class="table table-bordered table-hover">
                    <thead class="bill-header cs">
                      <tr>
                        <th colspan="4" style="padding: 10px !important;">
                          <span id="struk-order">Struk: #{{ lastOrder.kode_transaksi }}</span>
                        </th>
                      </tr>
                      <tr>
                        <th>Produk</th>
                        <th>Unit</th>
                        <th>Harga</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody id="list-menu-ordered">
                      <tr id="no-menu" class="warning no-result">
                        <td colspan="12">
                          <i class="fa fa-warning"></i> Tidak Ditemukan Menu...
                        </td>
                      </tr>
                      <tr v-for="(menu, index) in lastOrder.menus" :key="index+1">
                        <td>{{ menu.nama_menu }}</td>
                        <td class="list-product-td-unit">
                          <label>{{ menu.unit }} </label>
                        </td>
                        <td>
                          {{ menu.harga | rupiah }}
                        </td>
                        <td>
                          {{ (menu.harga * menu.unit) | rupiah }}
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
                      <tr style="height: 40px;">
                        <td width="auto">
                          <strong>Total Harga</strong>
                        </td>
                        <td class="text-right" colspan="2">
                          {{ lastOrder.total_harga | rupiah }}
                        </td>
                      </tr>
                      <tr style="height: 40px;">
                        <td width="auto">
                          <strong>Uang Dibayarkan</strong>
                        </td>
                        <td class="text-right" colspan="2">
                          {{ lastOrder.uang_dibayarkan | rupiah }}
                        </td>
                      </tr>
                      <tr style="height: 40px;">
                        <td width="auto">
                          <strong>Sisa Kembalian</strong>
                        </td>
                        <td class="text-right" colspan="2">
                          {{ lastOrder.uang_dibayarkan - lastOrder.total_harga | rupiah }}
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
                    <span class="input-group-text">Nama Customer</span>
                  </div>
                  <span class="form-control">
                    {{ lastOrder.nama_customer }}
                  </span>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fa fa-user"></i>
                    </button>
                  </div>
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nomor Meja</span>
                  </div>
                  <span class="form-control">
                    {{ lastOrder.nomor_meja }}
                  </span>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fa fa-pencil-square-o"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    lastOrder(){
      if(this.$route.query.last_order) {
        return this.getOrderLast
      }
      return this.getOrderDetail
    }
  },
  methods: {
    onPrint() {
      var w = window.open();
      w.document.write(
        `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Struk: Pesanan Terakhir</title>
                
                <link href="css/app.css" rel="stylesheet">
                <link href="css/font-awesome.min.css" rel="stylesheet"> 
                <style>
                    @media print {
                    @page { 
                        margin: 0; 
                        
                    }
                    body { margin: 1.6cm; }
                    }
                </style>

            </head>     
            <body>
                ${document.getElementById("main-content").innerHTML}
            </body>
            </html>
            `
      );
      setTimeout(function() {
        w.print();
      }, 500);
    }
  },
};
</script>

<style scoped>
label {
    display: inline-block;
    margin-bottom: 0;
}
.auto-calculation-input, .form-control:disabled, .form-control[readonly] {
    border: 0;
    border-bottom-width: 1px;
    background: #ffffff00;
    text-align: right;
    font-size: 14px;
}
</style>