function printArray(arr) {
    let table = "";
    for (let i = 0; i < arr.length; i++) {
        table += arr[i] + "\t";
    }
    console.log(table);
}


function printPermutations(arr, i) {
    printArray(arr);
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
        printPermutations(arr, i + 1);
    }
}

let M = [10, 2, 5];
printPermutations(M, 0);
