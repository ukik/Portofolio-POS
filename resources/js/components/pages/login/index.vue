<template>
  <div class="container-fluid" style="min-height: 450px;">
    <div class="row" style="height:74vh;text-align: -webkit-center;">
      <div class="col-12 pt-5 bg-white" id="login-block">
        <div class="col-12 col-sm-9 col-lg-8 col-xl-8 w-lg-75 w-xl-50 text-left">
          <h3 class="text-info font-weight-light mb-5 text-center">
            <i class="fa fa-diamond"></i> Welcome
          </h3>
          <form @submit.prevent="onLogin">
            <div class="form-group">
              <label class="text-secondary">Email</label>
              <input
                id="email"
                type="text"
                value=""
                class="form-control"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$"
                inputmode="email"
              />
            </div>
            <div class="form-group">
              <label class="text-secondary">Password</label>
              <input type="password" id="password" class="form-control" value="" required />
            </div>
            <button class="btn btn-info mt-2" type="submit">Log In</button>
            <button class="btn btn-info mt-2" type="button" @click="gotoPage({ name:'register' })">Mendaftar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin() {
      var vm = this;

      vm.$root.request = true
      const payload = {
          email: $('#email').val(),
          password: $('#password').val(),
      };

      axios
        .post(
          "login",
          payload
        )
        .then(response => {
            vm.setAuth(response.data);
            // console.log(response.data)
            switch (response.data.role) {
                case 'manager':
                    vm.gotoPage({ name: 'daftar-karyawan' })
                    break;
                default:
                    vm.gotoPage({ name: 'kasir' })
                    break;
            }
            vm.$root.request = false
        })
        .catch(error => {
			vm.$root.request = false
		});
    }
  }
};
</script>

<style scoped>
.form-control {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
