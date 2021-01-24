'use strict';
document.addEventListener('DOMContentLoaded', () => {
	//look up an element in the document hierarchy by id
	const greeting = document.getElementById('greeting');
	const streetName = getInput('Please enter your street name.');
	const petName = getInput('Please enter your pet name.');
	var favColor = getInput('Which color is better (Blue,Green, or Red)');
	const favLanguage = getInput('What is your favorite programming language?');
	greeting.textContent =
		'Oh, you must be the famous' +
		' ' +
		favLanguage +
		' ' +
		'hacker' +
		' ' +
		petName +
		' ' +
		streetName;
	//code to change color based on user input
	document.getElementById('greeting').style.color = favColor;
});
function getInput(prompText) {
	let name = prompt(prompText);
	while (name === '') {
		name = prompt('Cannot Leave Blank: ' + prompText);
	}
	return name;
} //end function getInput(promptText)
