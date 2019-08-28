import Vue from 'vue'

Vue.filter('rupiah', function (value, args) {

    var parts = value.toString().split(".");

    parts[0] = parseInt(parts[0]);

    if (args !== 'short') {
        parts = (parseFloat(parts.join(".")).toFixed(2)).toString();
    }

    parts = parts.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return 'Rp. ' + parts.join(",")

});

Vue.filter('kategori', function (value, args) {
    switch (Number(value)) {
        case 0:
            return 'makanan';
            break;
        case 1:
            return 'minuman';
            break;
        case 2:
            return 'camilan';
            break;
    }
});

Vue.filter('status', function (value, args) {
    switch (Number(value)) {
        case 0:
            return 'lajang';
            break;
        case 1:
            return 'menikah';
            break;

    }
});

Vue.filter('kelamin', function (value, args) {
    switch (Number(value)) {
        case 0:
            return 'laki-laki';
            break;
        case 1:
            return 'perempuan';
            break;
    }
});

Vue.filter('jabatan', function (value, args) {
    switch (Number(value)) {
        case 0:
            return 'manajer';
            break;
        case 1:
            return 'staff';
            break;
    }
});


Vue.filter('satuan', function (value, args) {
    switch (Number(value)) {
        case 0:
            return 'piring';
            break;
        case 1:
            return 'mangkok';
            break;
        case 2:
            return 'gelas';
            break;
    }
});

