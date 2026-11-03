class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        return s.split('').sort().join('') ===
               t.split('').sort().join('');
    }
}

const solution = new Solution();

console.log(solution.isAnagram("racecar", "carrace")); // true
console.log(solution.isAnagram("jar", "jam")); // false
