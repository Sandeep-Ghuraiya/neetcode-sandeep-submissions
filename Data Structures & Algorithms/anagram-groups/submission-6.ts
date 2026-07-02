class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map();

        strs.forEach((str) => {
            const key = str.split("").sort().join();

            if(!hashMap.has(key)){
                hashMap.set(key, []);
            }

            hashMap.get(key).push(str);
        })

        return Array.from(hashMap.values());
    }
}


const sol = new Solution();

console.log(sol.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])); // true
console.log(sol.groupAnagrams(["x"])); // false
console.log(sol.groupAnagrams([""]));