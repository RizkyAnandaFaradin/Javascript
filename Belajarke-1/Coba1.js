let c = '';
let panjang = 6;
let lebar = 6;

for (let a = 1; a <= lebar; a++) {
    if (a % 2 == 0) {
        for (let b = 1; b <= panjang; b++) {
            if (b % 2 == 0) {
                c += '+';
            } else {
                c += ' ';
            }
        }
    } else {
        for (let d = 1; d <= panjang; d++) {
            if (d % 2 == 0) {
                c += ' ';
            } else {
                c += '+';
            }
        }
    }

    c += '\n';
}

console.log(c);

// let n = '';

// for (let a = 0; a <= n; a++) {
//     for (let b = 0; b <= 5; b++) {
//         s += '';
//     }
//     s += '\n';
// }
