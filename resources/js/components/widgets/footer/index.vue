<template>
    <div class="footer-basic">
        <footer>
            <p class="copyright">© {{ new Date().getFullYear() }}</p>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login_style: "position: absolute; width: 100%;bottom: 0px;z-index: 9;",
                current_style: '',
            }
        },
        watch: {
            '$route.name': function (val) {
                // console.log(val)
                if(val === 'login') {
                  this.current_style = this.login_style
                  return
                }
                this.current_style = ""
            }
        },
        mounted(){
            if(this.$route.name === 'login') {
              this.current_style = this.login_style
              return
            }
            this.current_style = ""
        }
    }

</script>
