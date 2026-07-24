class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
       const seen = new Map();

       for(let i = 0; i < nums.length; i++){
            const complentry = target - nums[i];

            if(seen.has(complentry)){
                return [seen.get(complentry), i];
            }
            seen.set(nums[i], i);
       }
    }
}

const sol = new Solution();

console.log(sol.twoSum([3,4,5,6], 7));
console.log(sol.twoSum([4,5,6], 10));
console.log(sol.twoSum([5,5], 10));