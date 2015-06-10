/* PROBLEM
Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result
as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1
is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place
even if it is a zero.
 
*/

function formattedDivision(num1, num2){
	var arr = (num1 / num2).toFixed(4).split(""); // toFixed method to set divided num to 4 decimal points

	for(var i = arr.length-8; i > 0; i -= 3){
		arr.splice(i, 0, ",");
	}
	/* arr.length-8 because if the divided num has 4 decimal points, that will be the first point in the array
	where a comma will be needed, then decrement by 3 since that will be the next place a comma is needed*/
	
	return arr.join("");
}

console.log(formattedDivision(123456789, 10000)); // 12,345.6789
console.log(formattedDivision(894392, 232)); // 3,855.1379
console.log(formattedDivision(52346, 121)); // 432.6116