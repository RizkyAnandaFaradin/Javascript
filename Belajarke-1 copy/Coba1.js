var maximumWealth = function (accounts) {
    let arr = [];
    let num = 0;
    for (let j = 0; j < accounts.length; j++) {
        const sum = accounts[j].reduce((a, b) => a + b, 0);
        arr.push(sum);
    }
    return Math.max(...arr);
};
