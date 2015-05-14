/* PROBLEM
Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a
palindrome, (the string is the same forward as it is backward) otherwise return the string false.
For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. */

/* PSEUDO CODE
- create reversed string to test palidndrome: split string, reverse and join
- clean up reversed string & original string to ensure letters accurately tested: all lowercase, remove all spaces
- check if reversed string is the same as original string: if true, is palindrome, if not, is not */

function isPalindrome(str){
	var palTest = str.replace(/ /g, "").split("").reverse("").join("").toLowerCase();
	if (palTest == str.toLowerCase().replace(/ /g, "")){
		return "true";
	}
	else {
		return "false";
	}
}

console.log(isPalindrome("racecar")); // palindrome test
console.log(isPalindrome("RacEcar")); // uppercase palindrome test
console.log(isPalindrome("dont nod")); // 1 space test
console.log(isPalindrome("never odd or even")); // multiple space test
console.log(isPalindrome("Gabi")); // non-pal test