/* Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2,
and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return
the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000
the output should be "12,345". 

*/

function divString(num1, num2){

	var arr = Math.floor(num1 / num2).toString().split("");
	var index = -3;

	while (arr.length + index > 0) {
        arr.splice(index, 0, ',');
        index -= 4; // decrement by 4 since we just added another unit to the array
    }
    return arr.join("");
};


console.log(divString(123456789,10000));