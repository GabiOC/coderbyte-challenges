/* PROBLEM
Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them
together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91.
You will have to differentiate between single digit numbers and multiple digit numbers like in the example
above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one
letter or symbol. 

problem summary: search for nums (inc. single and multiple digit nums) in string, add them together and return final number
- find nums in str using regex, store as nums variable
- if there are no nums in str, return 0
- else return nums joined with +, using eval method to add the string into a final sum
*/

function numberSearch(str){
	var nums = str.match(/\d+/g);

	if(nums === null){
		return 0;
	}
	return eval(nums.join("+"));
}

console.log(numberSearch("5Hello 5")); // 10
console.log(numberSearch("55Hello2")); // 57
console.log(numberSearch("88Hello 3World!")); // 91