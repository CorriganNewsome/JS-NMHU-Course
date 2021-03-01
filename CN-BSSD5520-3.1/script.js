'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const button = document.createElement('button');
	button.innerHTML = 1;
	button.setAttribute('id', 'num1');
	button.addEventListener('click', () => {
		document.getElementById('result').innerHTML += 1;
	});
	document.getElementById('buttons').append(button);

	document.getElementById('result').innerHTML = '1' + '1';
});
