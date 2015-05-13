// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases,
// the parameter num will be any number from 1 to 1000.

var i = 1;
var temp = 0; // hold running total
var sum;

function simpleAdding(num){
	while(i <= num){
		temp += i;
		sum = temp;
		i++;
	}
	return sum;
}


console.log(simpleAdding(3));