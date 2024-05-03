function firstNonRepeatedChar(str) {
	// Write your code here
	const l  = str.trim().length;
	for(let i = 0 ; i < l; i++){
		const char = str[i];
		if(str.indexOf(char) === i && str.lastIndexOf(char) === i) return char;
}
	return null;
	
 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
