/* PROBLEM
Have the function LetterCapitalize(str) take the str parameter being passed and
capitalize the first letter of each word. Words will be separated by only one space */


/* PSEUDO CODE
- find the first letter of each word in string (first letter should be lower case)
- replace first letter with uppercase
- return full string */

function letterCapitalize(str){
	return str.replace(/\b[a-z]/g, function(c){return c.toUpperCase()});
	/* /\b[a-z]/g is a regex to globally (/g) replace the lower case ([a-z]) first letters (\b) in
	the words with uppercase */
}

console.log(letterCapitalize("gabi is awesome"));