/* PROBLEM
Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2
is greater than num1, otherwise return the string false. If the parameter values are equal to each other
then return the string -1 */

/* PSEUDO CODE
- else if statement to compare num1 and num2: if num2 greater 'true', else if num1 and num2 equal = -1, else 'false' */

function checkNums(num1, num2){
	if(num2 > num1){
		return "true";
	}
	else if (num2 == num1){
		return "-1";
	}
	else {
		return "false";
	}
}

console.log(checkNums(1,2));