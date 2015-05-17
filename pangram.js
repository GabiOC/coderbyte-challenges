/* PROBLEM
Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and
plans to lock the single door through which the enemy can enter his kingdom. But, to lock the door he needs a key that is an anagram of a certain palindrome string. 
The king has a string composed of lowercase English letters. Help him figure out whether any anagram of the string can be a palindrome or not.

PSEUDO CODE
- reverse str: split, reverse, join
- if str == reverse, return palindrome
- if not, return not palidndrome */

function processData(arr) {
    var v = arr.length[-1];
    arr.pop();
    for(i = 0; i < arr.length; i++){
        if(arr(i) > v){
            arr[i] += arr[i+1];
            console.log(arr);
        }
        else if(arr(i) < v){
            arr[i] += v;
        }
    console.log(arr);
    }
}

processData([2,4,6,8,3]);