function Fizz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            result.push(' Fizz Buzz');
        } else if (i % 5 == 0) {
            result.push(' Buzz');
        } else if (i % 3 == 0) {
            result.push(' Fizz');
        } else {
            result.push(' ' + i);
        }
    }
    return result.join(',');
}

console.log(Fizz(37));
