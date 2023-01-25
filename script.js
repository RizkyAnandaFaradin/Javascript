function prime(n) {
    let result = [];
    //loop untuk angkanya
    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        //loop untuk testnya
        for (let j = 2; j <= i; j++) {
            if (i !== j && i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(i);
        }
    }
    return result;
}
console.log(prime(10));
