'use strict';
document.addEventListener('DOMContentLoaded', () => {
	let surveyButton = document.getElementById('survey');
	surveyButton.addEventListener('click', () => {
		surveyButton.remove();
		createSurvey();
	});
});
//build survey buttons
function createSurvey() {
	let animals = ['Turtle', 'Cat', 'HedgeDog'];
	for (var i = 0; i < animals.length; i++) {
		//create a button for each animal in the array
		let btn = document.createElement('button');
		btn.innerHTML = animals[i];
		btn.addEventListener('click', buttonClicked);
		document.getElementById('content').append(btn);
	}
}

//end function createSurvey();

function buttonClicked(event) {
	//console.log(event.target.innerHTML);
	clearChoices(); //delete old buttons
	displayChoice(event.target.innerHTML); //show their choice
} //end function buttonClicked();

function clearChoices() {
	//not sure how to do this yet
} //end function clearChoice();
function displayChoice(choice) {
	let div = document.getElementById('content');
	div.innerHTML = 'What a great choice <em> ${choice} </em> is.';
} //end function displayChoice(choice);
