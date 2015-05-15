/* PROBLEM
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence
by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters
between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the
string to the left would be false. The string will not be empty and will have at least one letter. 

PSEUDO CODE
- run through all characters in string
- check if char is alphabetical
- if it is, check if either char before or after are not '+'
- if at least one isn't, return false
- outside of loop, return true */

var simpleSymbols = function(str){
	for(var i = 0; i < str.length; i++){
		if((/[a-zA-Z]/).test(str[i])){
			if (str[i-1]!="+" || str[i+1]!="+") return false;
		}
	}	
	return true;
}

console.log(simpleSymbols("++d+===+c++==a")); // return false
console.log(simpleSymbols("gsdfajkl+")); // return false
console.log(simpleSymbols("+i++a++g+++")); // return true