/* PROBLEM
write method that returns which cats have hats at the end of 100 passes, where the hat is toggled on each pass. the first pass,
you stop at each cat and add a hat, the 2nd pass, you stop at every 2nd cat and toggle (remove) the hat, 3rd pass, you stop
at every 3rd cat and toggle the hat and so on.

- check if cat is divisible by pass
- check whether cat currently has or does not have a hat
- if it is divisble by pass and does not have a hat, push cat to array
- if it is divisible by pass and does have hat, remove cat from array
- return hat array
*/


function catHats(num){
	var hat = []; // empty array to store which cats have hats

	for(var cat = 1; cat <= num; cat++){
		for(var pass = 1; pass <= num; pass++){
			if(cat % pass == 0 && hat.indexOf(cat) == -1){ // check if cat is divisible by pass and not in hat array (i.e. currently no hat)
				hat.push(cat); // add cat to hat array
			}
			else if(cat % pass == 0 && hat.indexOf(cat) > -1){ // check if cat is divisible by pass and in hat array (i.e. currently has hat)
				hat.pop(cat); // remove cat from hat array
			}
		}
	}
	return hat;
}

console.log(catHats(100));
