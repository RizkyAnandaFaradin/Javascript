function Rekursif(c) {
    if (c === 0) {
        return;
    }
    console.log(c);
    return Rekursif(c - 1);
}

function factorial(n) {
    let hasil = 1;

    for (let i = n; i > 0; i--) {
        hasil *= i;
    }
    return hasil;
}
console.log(factorial(5));
