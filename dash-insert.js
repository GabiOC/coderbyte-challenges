/* PROBLEM
Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str
is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

PSEUDO CODE
- create dashNum variable to store num with dashes
- loop through num
- check if character at position i and next character are add (num[i] % 2 == 1 && num[i-1] % 2 == 1) 
- if it is, add dash to dashNum
- add num[i] to dashNum
- return new array */

function dashInsert(num){
	num = "" + num;
	var dashNum = "";
	for(var i = 0; i < num.length; i++){
		if(num[i] % 2 == 1 && num[i-1] % 2 == 1){
			dashNum += "-";
		}
		dashNum += num[i];
	}
	return dashNum;
}

console.log(dashInsert(454793)); // 4547-9-3
console.log(dashInsert(123)); // 123