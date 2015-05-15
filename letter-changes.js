/* PROBLEM
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

PSEUDO CODE
- loop through string
- if char is alpha [a-zA-Z], replace with next character in char index
- return replaced string */

function letterChanges(str){
	for(var i = 0; i < str.length; i++){
		if((/[a-zA-Z]/).test(str[i])){
			str[i].replace(str[i].fromCharCode(str[i+1]));
		}
	return str;
	}
}
console.log(letterChanges("gabi"));