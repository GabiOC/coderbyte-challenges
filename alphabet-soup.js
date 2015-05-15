/* PROBLEM
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in
alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string

PSEUDO CODE
- create array from str letters, make lower case
- sort by alphabetical index
- return joined array */


function alphabetSoup(str){         
	return str.toLowerCase().split("").sort().join(""); 
}

console.log(alphabetSoup("asdjkfla")); // result = aadfjkls
console.log(alphabetSoup("gabi")); // result = abgi
console.log(alphabetSoup("TestinGG")); // result = egginstt