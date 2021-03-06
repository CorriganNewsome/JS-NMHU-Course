'use strict';

let CHOICE_CLASS = 'choiceButton';

document.addEventListener('DOMContentLoaded', () => {
	let surveyButton = document.getElementById('survey');
	surveyButton.addEventListener('click', () => {
		surveyButton.remove(); //delete the button
		createSurvey();
	});
});
//build survey buttons
function createSurvey() {
	let animals = ['Turtle', 'Cat', 'HedgeDog'];
	for (let i = 0; i < animals.length; i++) {
		//create a button for each animal in the array
		let btn = document.createElement('button');
		btn.innerHTML = animals[i];
		btn.className = CHOICE_CLASS;
		btn.addEventListener('click', buttonClicked);
		document.getElementById('content').append(btn);
	}
} //end function createSurvey();

function buttonClicked(event) {
	clearChoices(); //delete old buttons
	displayChoice(event.target.innerHTML); //show their choice
} //end function buttonClicked();

function clearChoices() {
	let buttons = document.getElementsByTagName('button');
	while (buttons.length > 0) {
		buttons[0].remove();
	}
} //end function clearChoice();

function displayChoice(choice) {
	let div = document.getElementById('content');
	div.innerHTML = `What a great choice <em> ${choice} </em> is`;
} //end function displayChoice(choice);
