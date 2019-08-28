module.exports = {
    methods: {
        gotoPage(payload){
            if(payload.name !== this.$route.name) {
                this.$router.push(payload)
            }
            if(payload.name === 'struk') {
                this.$router.push(payload)
            }
        }
    }
}