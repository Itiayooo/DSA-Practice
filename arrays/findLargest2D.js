function findLargest2D(array) {
    let largest = array[0][0];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > largest) {
                largest = array[i][j];
            }
        }
    }

    return largest;
}

console.log(findLargest2D(numbers));