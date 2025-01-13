function H10ToH2(n) {
    if (n > 0) {
        let sd = n % 2;
        n = Math.floor(n / 2);
        H10ToH2(n);
        process.stdout.write(sd.toString());
        // console.log(sd.toString());
    }
}

let n = 13;
H10ToH2(n);
