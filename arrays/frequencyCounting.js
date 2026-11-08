function frequencyCounting(nums) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {        
        let num = nums[i]

        if (map.has(num)) {
            return true
        }else{
            map.set(num, map.get(nums) + 1)
        }
    }
    return map
}

console.log(frequencyCounting([5, 5, 3, 5, 6, 2, 2, 2]));
