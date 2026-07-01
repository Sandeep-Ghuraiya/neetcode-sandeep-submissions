class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }

        return s.split('').sort().join('') === t.split('').sort().join('')
    }
}

const sol = new Solution();

console.log(sol.isAnagram("racecar", "carrace"));
console.log(sol.isAnagram("jar", "jam"))