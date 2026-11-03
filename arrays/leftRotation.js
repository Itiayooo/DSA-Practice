function rotateLeft(d, arr) {
    const n = arr.length;
    const shift = d % n; // d can be larger than the array length
    return [...arr.slice(shift), ...arr.slice(0, shift)];
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]));