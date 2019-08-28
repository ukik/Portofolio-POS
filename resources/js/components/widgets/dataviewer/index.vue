<template>
  <div>
    <!-- <div class="panel panel-default"> -->
    <div class="col-12 p-1 pt-3 pb-3" style="padding: 10px 0px 15px 0px">
      <div>
        <button class="btn btn-primary" @click="showFilter = !showFilter">Filter</button>
        <button class="btn btn-success" @click="onPrint()">Print</button>
      </div>
    </div>

    <div class="form-group mb-3 col-12 p-1" v-if="showFilter">
      <div class="input-group">
        <div class="input-group-prepend">
          
          <div>
              <select class="form-control" id="search-operator" v-model="params.search_operator" @change="fetchData">
                <option v-for="(value, key) in operators" :value="key" :key="key">{{value}}</option>
              </select>
          </div>
          <div>
              <select class="form-control" id="search-column" v-model="params.search_column" @change="fetchData">
                <option v-for="(column, index) in filter" :value="column" :key="index" v-option="column">{{alias[index]}}</option>
              </select>
          </div>        
          
        </div>

        <input
          type="text"
          class="form-control"
          v-model="params.search_query_1"
          @keyup="fetchData"
          placeholder="Search"
        />

        <input
          v-if="params.search_operator === 'between'"
          type="text"
          class="form-control"
          v-model="params.search_query_2"
          @keyup="fetchData"
          placeholder="Search"
        />

        <div class="input-group-append">
          <button class="btn btn-primary" type="button" style="height: fit-content;" @click="fetchData">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="table-responsive p-1" id="print">
      <table class="table table-bordered table-hover table-xs bg-white">
        <thead class="text-center">
          <tr class="bg-primary text-light">
            <td :colspan="thead_length" class="text-center font-weight-bold">
              {{title}}
            </td>
          </tr>
          <tr class="bg-primary text-light">
            <th v-for="item in thead" :key="item.key" class="align-middle text-light action">
              <div class="dataviewer-th" @click="sort(item.key)" v-if="item.sort">
                <span style="font-size:14px">{{item.title}}</span>
                <span v-if="params.column === item.key">
                  <span v-if="params.direction === 'asc'">&#x25B2;</span>
                  <span v-else>&#x25BC;</span>
                </span>
              </div>
              <div v-else>
                <span style="font-size:14px">{{item.title}}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <slot v-for="(item, index) in model.data" :item="item" name="table-body" :index="index" ></slot>
          <tr v-if="items_length <= 0">
            <td :colspan="thead.length" class="text-center">
              <em>Tidak ada data</em>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td :colspan="thead_length" class="text-center font-weight-bold">
              Total Data: {{ items_length }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Example single danger button -->
    <div class="col-12 p-1">
        <div class="row">
            <div class="col-12 col-md-3 col-lg-2 col-xl-2 mb-2">
                <div class="btn-group w-100">
                    <button type="button" class="btn btn-danger dropdown-toggle  text-left" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Per Halaman {{ params.per_page }}
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" @click="page(10)">10</a>
                        <a class="dropdown-item" @click="page(25)">25</a>
                        <a class="dropdown-item" @click="page(50)">50</a>
                        <!-- <div class="dropdown-divider"></div> -->
                        <!-- <a class="dropdown-item">Separated link</a> -->
                    </div>
                </div>    
            </div>
            <div class="col mb-2">
                <div class="form-inline">
                    <label>Halaman </label>
                    <input type="text" v-model="params.page" class="form-control col-7 col-md-4 col-lg-4 col-xl-4 ml-2 mr-2" @keyup.enter="fetchData">
                    <label> / {{model.last_page}}</label>
                </div>
            </div>
            <div id="bottom-nav-data-viewer" class="col-12 col-md-4 col-lg-3 col-xl-3 mb-2 text-right">
                <span class="btn btn-success" @click="prev">
                    <a class="fa fa-arrow-left"> Mundur</a>
                </span>
                <span class="btn btn-success"  @click="next">
                    <a class="fa fa-arrow-right"> Maju</a>
                </span>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Default System
    source: {},
    thead: {},
    filter: {},
    title: null,
    alias: {},
    init_params: null,

    // vuex
    getter: null,
    setter: null,

    // rerender by route.name
    route_name: null,
  },
  data() {
    return {
      showFilter: true,
      model: {
        data: [] // used computed items_length
      },
      params: {
        column: this.init_params,
        direction: "desc",
        per_page: 25,
        page: 1,
        search_column: this.init_params,
        search_operator: "like",
        search_query_1: "",
        search_query_2: ""
      },
      operators: {
        equal_to: "= (Sama Dengan)",
        not_equal: "<> (Kecuali)",
        less_than: "< (Lebih Kecil)",
        greater_than: "> (Lebih Besar)",
        less_than_or_equal_to: "<= (Lebih Kecil Sama Dengan)",
        greater_than_or_equal_to: ">= (Lebih Besar Sama Dengan)",
        in: "IN (Dalam)",
        not_in: "NOT IN (Di Luar)",
        like: "LIKE (Seperti/Meliputi)",
        between: "BETWEEN (Di Antara)"
      }
    };
  },
  computed: {
    items_length() {
      if(this.model.data == undefined) {
        return 0
      }
      return this.model.data.length
    },
    thead_length(){
      if(this.thead == undefined) {
        return 0
      }
      return this.thead.length
    }
  },
  watch: {
    "this.params": function(val) {
      // console.log(val);
    },
    "$route.name": function(val) { // manually rerender
      if(val === this.route_name) {
        this.model = this[this.getter];
        this.fetchData();
      }
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
                <title>Struk: ${this.title}</title>
                
                <link href="css/app.css" rel="stylesheet">
                <link href="css/font-awesome.min.css" rel="stylesheet"> 
                <style>
                    @media print {
                      @page { 
                          margin: 0; 
                          
                      }
                      body { 
                        margin: 1.6cm; 
                      }
                    }

                    .action {
                      display:none;
                    }
                </style>

            </head>     
            <body>
                ${document.getElementById("print").innerHTML}
            </body>
            </html>
            `
      );
      setTimeout(function() {
        w.print();
      }, 250);
    },    
    next() {
      var vm = this;
      if (this.model.next_page_url) {
        if (vm.params.page < vm.model.last_page) {
          vm.params.page++;
          vm.fetchData();
        }
      }
    },
    prev() {
      var vm = this;
      if (this.model.prev_page_url) {
        if (vm.params.page > 1) {
          vm.params.page--;
          vm.fetchData();
        }
      }
    },
    sort(column) {
      if (column === this.params.column) {
        if (this.params.direction === "desc") {
          this.params.direction = "asc";
        } else {
          this.params.direction = "desc";
        }
      } else {
        this.params.column = column;
        this.params.direction = "asc";
      }
      this.fetchData();
    },
    page(page){
      this.params.per_page = page
      this.fetchData()
    },
    fetchData() {
      var vm = this;

      axios
        .get(this.buildURL())
        .then(function(response) {

          vm[vm.setter](response.data)
          Vue.set(vm.$data, "model", response.data);

        })
        .catch(function(error) {
          // console.log(error)
        });
    },
    buildURL() {
      // error handler reset
      // this.$root.error.status = false;
      // this.$root.error.message = "";
      // this.$root.request = true; // membuka spinner ui

      var p = this.params;

      return `http://localhost:8000/api${this.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`;
    }
  },
  //beforeMount() {
  mounted(){
    this.model = this[this.getter];
    this.fetchData();
  }
};
</script>

<style scoped>
#search-operator {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
#search-column {
    border-radius: 0;
}
.fa {
    font-family: sans-serif, FontAwesome;    
}
label {
    display: inline-block;
    margin-bottom: 0;
}
@media (max-width: 425px) {
    #bottom-nav-data-viewer { text-align:center !important }
}
.form-control {
    -webkit-box-shadow: none;
    box-shadow: none;  
}
td {
  text-transform: capitalize;  
}
</style>