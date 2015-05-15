/* PROBLEM
Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string
contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

PSEUDO CODE
- make string lowercase
- match str to vowels using regex
- get length of matches
- return length (count of) */

function vowelCount(str){
	return str.toLowerCase().match(/[aeiou]/g).length;
}

console.log(vowelCount("gabi")); // 2
console.log(vowelCount("kitties are awesome")); // 9
console.log(vowelCount("All cows eat grass")); // 5