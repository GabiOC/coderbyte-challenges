// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word
// in the string. If there are two or more words that are the same length, return the first word from
// the string with that length. Ignore punctuation and assume sen will not be empty.

function longestWord(sen){
	
	var strArray = sen.split(" ").sort(compareLength); // split, add to array and sort
	return strArray[0]; //return first object in array (longest word)
}

// compare string length to one another, in desc order
function compareLength(a, b){
	return b.replace(/[^a-zA-Z]/g,"").length - a.replace(/[^a-zA-Z]/g,"").length;
	// [^a-z|A-Z]/g is a regex to replace any characters not found in the 
	// a-z or A-Z set with "", thereby removing any non-alpha characters
}

console.log(longestWord("Hello this!!! is an example sentence"));

