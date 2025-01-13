function choose(n, k) {
    if (k === 0 || n === k) {
        return 1;
    }
    return choose(n - 1, k) + choose(n - 1, k - 1);
}

let n = 5;
let k = 3;
let kq = choose(n, k);
console.log(kq);
