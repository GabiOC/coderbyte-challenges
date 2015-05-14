/* PROBLEM
Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the
parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact
a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

PSEUDO CODE
- create reversed version of string to test palindrome
- clean up reversed v and original string: remove symbols, spaces, all letters are lowercase
- compare reversed version to original string */

function isPalindromeTwo(str){
	var reversedStr = str.replace(/[^a-zA-Z]/g, "").split("").reverse("").join("").toLowerCase("");
	var cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase("");
	if (reversedStr == cleanStr){
		return "true";
	}
	else {
		return "false";
	}
}

console.log(isPalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));
console.log(isPalindromeTwo("Gabi"));