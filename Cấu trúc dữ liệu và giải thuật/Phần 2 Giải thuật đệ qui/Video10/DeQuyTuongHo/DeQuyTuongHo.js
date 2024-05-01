function isEven(n) {
    if (n === 0)
        return true;
    else
        return isOdd(n - 1);
}

function isOdd(n) {
    return !isEven(n);
}

let n1 = 9;
let kq = isEven(n1);
if (kq === true)
    console.log(n1 + " la so chan");
else
    console.log(n1 + " la so le");
