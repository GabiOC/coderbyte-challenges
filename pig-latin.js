/* PROBLEM
Write a method the takes in a string and returns the pig latin equivalent. Pig Latin takes the
first consonant, moves it to the end of the word and places “ay” at the end. If the string starts
with a vowel do nothing. “pig” = “igpay”, “banana” = “ananabay”

PSEUDO CODE
problem summary: output string that returns pig latin equivalent of original string. (takes first consonant, and moves
consonant to end of word and add 'ay' to it) 
- create new empty array to store pig latin version
- check if first letter is not a vowel using a regex
- if it isn't, push arr substring from 2nd letter to end of string + first letter substring + "ay" to new pig latin array
- return joined array */

function pigLatin(str){
	var pigArr = [];

	if((/\b[^aeiou]\w/).test(str)){
		pigArr.push(str.substring(1, str.length) + str.substring(0,1) + "ay");
		return pigArr.join("");
	}
	else{
		return str;
	}
}

console.log(pigLatin("pig"));
console.log(pigLatin("apple"));