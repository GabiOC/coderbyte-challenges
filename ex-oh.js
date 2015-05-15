/* PROBLEM

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number
of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation
or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

PSEUDO CODE
- count number of x's in string using a regex, store as 'x'
- count number of o's in string using a regex, store as 'o'
- if 'x' == 'o', return true
- else return false */

function exOh(str){
	var x = str.match(/[x]/g).length;
	var o = str.match(/[o]/g).length;

	if(x == o){
		return true;
	}
	return false;
}

console.log(exOh("xooxxxxooxo")); // false
console.log(exOh("xooxxxooxo")); // true
console.log(exOh("xo")); // true