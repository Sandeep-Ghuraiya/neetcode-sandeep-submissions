class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hasMap = new Map();

        strs.forEach((str) => {
            const key = str.split('').sort().join();

            if(!hasMap.has(key)){
                hasMap.set(key, []);
            }
            hasMap.get(key).push(str);
        })
        return Array.from(hasMap.values());
    }
}


const sol = new Solution();

console.log(sol.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); // true
console.log(sol.groupAnagrams(["x"])); // false
console.log(sol.groupAnagrams([""]));