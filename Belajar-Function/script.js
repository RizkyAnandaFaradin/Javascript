function SumKubus(a, b) {
    let sisi1 = a;
    let sisi2 = b;

    let volKubus1 = sisi1 * sisi1 * sisi1;
    let volKubus2 = sisi2 * sisi2 * sisi2;

    let jumlahVolKubus = volKubus1 + volKubus2;

    return jumlahVolKubus;
}

console.log(SumKubus(8, 3));

function BelajarArguments() {
    let hasil = 0;

    for (let i = 0; i <= arguments.length; i++) {
        hasil += arguments[i];
        console.log(arguments[i]);
    }

    return hasil;
}
console.log(BelajarArguments(1, 2, 3, 4, 5));
