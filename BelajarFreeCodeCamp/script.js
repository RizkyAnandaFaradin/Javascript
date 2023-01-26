function sym(...args) {
    let res = args.reduce((acc, val) => acc.concat(val));
    let uniq_array = res.filter((item, index) => res.indexOf(item) === index);
    return uniq_array.filter((i) => !args.some((a) => a.includes(i)));
}
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
