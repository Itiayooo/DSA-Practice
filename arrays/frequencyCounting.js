// Given an array of integers nums, write a function that counts how many times each distinct number appears in the array.


function frequencyCounting(nums) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]

        if (map.has(num)) {
            return true
        } else {
            map.set(num, map.get(nums) + 1)
        }
    }
    return map
}

console.log(frequencyCounting([5, 5, 3, 5, 6, 2, 2, 2]));









/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let outputArr = []
    for (let i = 0; i < numbers.length; i++) {
        let startIndex = numbers[i]
        for (let j = 0; j <= i; i++) {
            if (startIndex + j === target) {
                outputArr.push([startIndex, j])
            }
        }
    }
    return outputArr
}