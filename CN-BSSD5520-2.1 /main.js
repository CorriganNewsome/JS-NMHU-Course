'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const greeting = document.getElementById('greeting');
	const streetName = getInput('Please enter your street name.');
	const petName = getInput('Please enter your pet name.');
	var favColor = getInput('Which color is better (Blue,Green, or Red)');
	const favLanguage = getInput('What is your favorite programming language?');
	const name = petName + favColor;

	if (favColor === 'blue' || favColor === 'red' || favColor === 'green') {
		greeting.textContent =
			'Oh, you must be the famous' +
			' ' +
			favLanguage +
			' ' +
			'hacker' +
			' ' +
			name.fontcolor(favColor);
	} else {
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
		document.body.style.backgroundColor = 'red';
		h2.textContent = 'Access Granted';
	}
});

function getInput(prompText) {
	let name = prompt(prompText);
	while (name === '') {
		name = prompt('Cannot Leave Blank: ' + prompText);
	}
	return name;
} //end function getInput(promptText)
