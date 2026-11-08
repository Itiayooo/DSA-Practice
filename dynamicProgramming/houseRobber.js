function rob(nums) {
    let prev1 = 0;
    let prev2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let current = Math.max(prev1, prev2 + nums[i]);

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

console.log(rob([2, 7, 9, 3, 1])); // 12