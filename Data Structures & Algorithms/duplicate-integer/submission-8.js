class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;
    }
}

const solution = new Solution();

console.log(solution.hasDuplicate([1, 2, 3, 3])); // true
console.log(solution.hasDuplicate([1, 2, 3, 4])); // false


