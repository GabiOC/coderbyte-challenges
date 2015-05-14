/* PROBLEM
Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter
is a prime number, otherwise return the string false. The range will be between 1 and 2^16. */

/* PSEUDO CODE
- check if number is less than 2. If it is, it will not be prime
- check if number is whole number. If it isn't, it will not be prime 
- check every whole number from 2 to sqrt of n -- if any divides n exactly (remainder == 0), return false
- else return true
*/

function primeTime(num){
	if(num < 2){
		return false;
	}
	if(num != Math.round(num)){
		return false;
	}

	for(var i = 2; i <= Math.sqrt(num); i++){
		if(num % i == 0){
			return false;
		}
	}
	return true;
}

console.log(primeTime(20));
console.log(primeTime(13));
console.log(primeTime(3.5));
console.log(primeTime(-2));