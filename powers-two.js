/* PROBLEM
Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if
it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string
true but if the input is 22 then the output should be the string false. */

function powersOfTwo(num){
  if (num === 0)
    return "true"
  var i = 2
    while(i <= num){
    	if (i === num){
          return "true"
    	}
    	i *= 2;
	}
  return "false";        
}

console.log(powersOfTwo(8)); // true
console.log(powersOfTwo(16)); // true
console.log(powersOfTwo(22)); // false
console.log(powersOfTwo(0)); // true