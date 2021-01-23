'use strict';
document.addEventListener('DOMContentLoaded', () => {
	//look up an element in the document hierarchy by id
	const greeting = document.getElementById('greeting');
	const name = prompt('Please enter your name.');
	greeting.textContent = name;
});

function createGreetingHTML() {
	//create html tag elements in memory
	const divider = document.createElement('div');
	const paragraph = document.createElement('p');
	const emphasis = document.createElement('em');
	//append tags in a parent-child hierarchy
	divider.append(paragraph);
	//set inner content of the p tag
	paragraph.textContent = 'Hello, ';
	paragraph.append(emphasis);
	//set inner content of the em tag
	emphasis.textContent = name;
	paragraph.append('. How is your day?');

	//append the parent div to the document's pre-existing body tag.
	document.body.append(divider);
}
