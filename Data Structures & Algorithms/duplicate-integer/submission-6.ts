class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<number>();

        for(const num of nums){

            if(seen.has(num)){
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}

const sol = new Solution();

console.log(sol.hasDuplicate([1,2,3,3]));
console.log(sol.hasDuplicate([1,2,3,4]));
