class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        return [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num);
    }
}

const solution = new Solution();

console.log(solution.topKFrequent([1,2,2,3,3,3], 2));
console.log(solution.topKFrequent([7,7], k = 1));