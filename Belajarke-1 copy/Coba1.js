let day = [
    [1, 3, 3],
    [1, 7, 3],
    [1, 2, 3],
];

let maxWealth;
day.forEach((number) => {
    sum = number.reduce((a, b) => {
        a + b, 0;
    });

    maxWealth = Math.max(maxWealth, sum);

    console.log('costumer has wealth =' + maxWealth);
});
