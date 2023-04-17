let output = document.getElementById('output');
let expression = '';

function appendChar(char) {
	expression += char;
	output.textContent = expression;
}

function clearScreen() {
	expression = '';
	output.textContent = '0';
}

function deleteChar() {
	expression = expression.slice(0, -1);
	output.textContent = expression || '0';
}

function calculate() {
	try {
		expression = eval(expression).toString();
		output.textContent = expression;
	} catch (e) {
		expression = '';
		output.textContent = 'Error';
	}
}
