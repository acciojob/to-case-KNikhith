function toCase(text) {
  // write your code herer
	text=text.trim();
	text=text.replace(/\s+/g,"");
	return `${text.toLowerCase()}-${text.toUpperCase()}`
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
