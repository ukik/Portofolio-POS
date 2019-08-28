module.exports = {
    computed: {
        navbar() {
            return function (payload) {
                for (let i = 0; i < payload.length; i++) {
                    const element = payload[i];
                    if(element === this.getAuth.role) {
                        return true
                    }
                }
                return false
            }
        }
    }
}
