/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let reversedString = String(x);
    reversedString = reversedString.split("").reverse().join("")
    
    return reversedString === String(x);
};