/* PROBLEM
Have the function ABCheck(str) take the str parameter being passed and return the string true
if the characters a and b are separated by exactly 3 places anywhere in the string at least
once (ie. "lane borrowed" would result in true because there is exactly three characters between
a and b). Otherwise return the string false.

Examples: Input = "after badly" Output = "false"
Input = "Laura sobs" Output = "true"

PSEUDO CODE
problem summary: return true if str has a and b separated by exactly 3 characters, including spaces and letters
- use regex to check if 'a' exists in string
- if it does, check if 'b' exists in string at positions +1 to +3 from 
- if it doesn't, return false