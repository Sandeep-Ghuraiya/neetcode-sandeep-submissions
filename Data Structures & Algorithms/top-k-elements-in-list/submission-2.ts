class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {};

        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        return Object.entries(count)
        .sort((a, b) => Number(b[1]) - Number(a[1]))
        .slice(0, k)
        .map(([num]) => Number(num));
        
    }
}

const sol = new Solution();

console.log(sol.topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log(sol.topKFrequent([7, 7], 1));