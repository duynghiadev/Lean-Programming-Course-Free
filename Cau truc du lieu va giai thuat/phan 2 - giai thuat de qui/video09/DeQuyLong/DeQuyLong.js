function ackerman(m, n) {
    if (m === 0) {
        return n + 1;
    } else if (n === 0) {
        return ackerman(m - 1, 1);
    } else {
        return ackerman(m - 1, ackerman(m, n - 1));
    }
}

let kq = ackerman(2, 1);
console.log(kq);
