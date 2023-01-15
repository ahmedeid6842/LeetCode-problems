/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let letters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let result = 0;
for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] < letters[s[i + 1]]) {
        result = result + (letters[s[i + 1]] - letters[s[i]]);
        i = i + 1;
    } else {
         result += letters[s[i]]
    }
}
return result;
};