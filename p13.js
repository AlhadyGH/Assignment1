function Largest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const numbers = [1, 3, 7, 2, 4];
console.log(Largest(numbers));