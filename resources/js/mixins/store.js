module.exports = {
    computed: {
        checking_state() {
            return function (payload) {
                if (payload === undefined) {
                    return 'no data'
                }
                return payload
            }
        }
    }
}
