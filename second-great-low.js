/* PROBLEM
Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second
lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains
[7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers.
It can get tricky if there's just two numbers! 

- check if arr has only 2 values: if it does, return items at index 0 and 1
- remove duplicate values, store in new array
- sort new array in asc order
- return item at arr index 1 (second lowest) and arr index length -2 (second greatest) */

function secondGreatLow(arr){
	if(arr.length == 2){
		return arr[0] + " " + arr[1];
	}

	var noDupes = arr.filter(function(num, index){
		return arr.indexOf(num) == index; // found here: http://mikeheavers.com/main/code-item/removing_duplicates_in_an_array_using_javascript
	});
	
	noDupes.sort(function(a, b){ return a - b});
	return noDupes[1] + " " + noDupes[noDupes.length -2];
}

console.log(secondGreatLow([7, 98, 12, 56, 106])); // 12 98
console.log(secondGreatLow([7, 12])); // 7 12
console.log(secondGreatLow([100, 200, 3, 400, 5, 1])); // 3 200
console.log(secondGreatLow([2,2,2,5,5,5,6])); // 5 5
