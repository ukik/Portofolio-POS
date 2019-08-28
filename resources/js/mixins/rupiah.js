module.exports = {
    methods: {
        rupiah(value, args){
            var parts = value.toString().split(".");

            parts[0] = parseInt(parts[0]);

            parts = (parseFloat(parts.join(".")).toFixed(2)).toString();

            parts = parts.toString().split(".");

            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            if (args == undefined) {
                args = "Rp. "
            }

            return args + parts.join(",")

        }
    }
}

