/*
131. Palindrome Partitioning
Medium
Topics
premium lock icon
Companies
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const path = [];

    function isPal(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPal(start, end)) {
                path.push(s.slice(start, end + 1));
                backtrack(end + 1);
                path.pop();
            }
        }
    }

    backtrack(0);
    return result;
};