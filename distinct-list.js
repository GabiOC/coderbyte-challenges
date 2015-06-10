/* PROBLEM
Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of
duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there
are two duplicates of one of the elements.

*/


function distinctList(arr){
	var elements = [arr[0]];
	var dupes = 0;

	for(var i = 0; i < arr.length; i++){
		if(elements.indexOf(arr[i]) == -1){ // check if num doesn't have a duplicate in array
			elements.push(arr[i]);
		}
		else {
			dupes++; // increment num of duplicates
		}
	}
	return dupes - 1 ; // -1 to remove original num from list of duplicates
}

console.log(distinctList([1,2,2,2,3])) // 2
console.log(distinctList([3,3,1,4,5])) // 1
console.log(distinctList([3,3,3,3,2])) // 3
