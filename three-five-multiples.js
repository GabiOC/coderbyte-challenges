/* PROBLEM

Have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are
below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9,
and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.

- loop up to but not inc num
- check if num is divisible by 3 or 5
- if it is, push to array
- use reduce method to return sum of array */

function threeFiveMultiples(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		if(i % 3 == 0 || i % 5 == 0){
			arr.push(i);
		}
	}

	return arr.reduce(function(memo, x) {return memo + x}, 0); // memo = result of last call; x = current; 0 = initial
}

console.log(threeFiveMultiples(10)); // 23
console.log(threeFiveMultiples(56)); // 753