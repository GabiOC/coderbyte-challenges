/* PROBLEM
Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of
numbers in the array can be added up to equal the largest number in the array, otherwise return the string false.
For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will
not be empty, will not contain all the same elements, and may contain negative numbers. 

PSEUDO CODE
- sort array in descending order
- get largest number array[0]
- loop through array to get sums of all combinations of array items
- if any equal largest number, return true
- if not, negative */

function arrayAddition(arr){
	var sortedArray = arr.sort(function(a,b){
		return b-a;
	})
	return largestNum = sortedArray[0];
}

console.log(arrayAddition(2,3,4,5));