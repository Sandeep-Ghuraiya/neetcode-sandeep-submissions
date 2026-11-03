class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const key = str.split('').sort().join('');

            if (!map.has(key)) map.set(key, []);
            map.get(key).push(str);
        }

        return [...map.values()];
    }
    
}

const solution = new Solution();

console.log(solution.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
console.log(solution.groupAnagrams(["x"]));
console.log(solution.groupAnagrams([""]));