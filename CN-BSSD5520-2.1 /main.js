'use strict';
document.addEventListener('DOMContentLoaded', () => {
	const greeting = document.getElementById('greeting');
	const streetName = getInput('Please enter your street name.');
	const petName = getInput('Please enter your pet name.').toLowerCase();

	var favColor = getInput(
		'Which color is better (Blue,Green, or Red)',
	).toLowerCase();

	const favLanguage = getInput('What is your favorite programming language?');
	const name = petName.capitlize() + ' ' + streetName.capitlize();

	if (favColor === 'blue' || favColor === 'red' || favColor === 'green') {
		document.write(
			'Oh, you must be the famous' +
				' ' +
				favLanguage +
				' ' +
				'hacker' +
				'<em>' +
				' ' +
				name.fontcolor(favColor),
		);
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

String.prototype.capitlize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

function getInput(prompText) {
	let name = prompt(prompText);
	while (name === '') {
		name = prompt('Cannot Leave Blank: ' + prompText);
	}
	return name;
} //end function getInput(promptText)
