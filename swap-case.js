/* Have the function SwapCase(str) take the str parameter and swap the case of each character. For example:
if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

problem: swap lowercase for uppercase and vice versa for a string. nums and symbols stay the same

- loop through str
- check if character is equal to character.toUppercase; if it is, make it lower case with .toLowerCase
- else .toUpperCase
- return joined array
*/

function swapCase(str){
	var arr = str.split("");
	var swapped = [];

	for(var i = 0; i < arr.length; i++){
		if(arr[i] === arr[i].toUpperCase()){
			swapped.push(arr[i].toLowerCase());
		}
		else { swapped.push(arr[i].toUpperCase())};
	};
	return swapped.join("");
};

console.log(swapCase("Hello World")); // hELLO wORLD
console.log(swapCase("why HELLO there!!")); // WHY hello THERE!!