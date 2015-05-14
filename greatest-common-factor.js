/* PROBLEM
Have the function Division(num1,num2) take both parameters being passed and return the Greatest
Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder.
For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both
parameters will be from 1 to 10^3. */

var gcd = function(num1, num2) {
    if ((num1 % num2) == 0){
    	return num2;
    }
    else {
    	return gcd(num2, num1 % num2); // use recursion to repeatedly divide nums until the remainder == 0, in which case that is the gcd
	}
}

console.log(gcd(4,20));
console.log(gcd(270,35));


// EXPLORATORY STUFF BELOW TO WRAP MY HEAD AROUND EUCLID'S ALGORITHM
// if ((4 % 20) == 0){
// 	return 20;
// }
// else {
// 	return gcd(20, 4)
// }

// var modulus = function(num1, num2){
// 	return num1 % num2;
// }

// console.log(modulus(4, 20));