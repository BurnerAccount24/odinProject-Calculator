function add(firstNum, secondNum) {
	return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
	return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
	return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
	return firstNum / secondNum;
}

let firstNum = '';
let secondNum = '';
let operaterType = '';

function operate(firstNum, operaterType, secondNum) {
	if (operaterType === '+') {
		return add(firstNum, secondNum);
	} else if (operaterType === '-') {
		return subtract(firstNum, secondNum);
	} else if (operaterType === '×') {
		return multiply(firstNum, secondNum);
	} else if (operaterType === '÷') {
		return divide(firstNum, secondNum);
	} else {
		return `something went wrong!`;
	}
}

let displayVal = document.querySelector('#displayNum');
let numBtns = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.opeator');
let result = document.querySelector('.result');
let updatedNumVal = ''; // accumulate the string type of the clicked num btns before assigning them to either firstNum or secondNum but after turning them to numbers
function populateDisplay() {
	numBtns.forEach((numBtns) =>
		numBtns.addEventListener('click', () => {
			updatedNumVal += numBtns.innerText;
			displayVal.innerText = updatedNumVal;
		})
	);

	operators.forEach((operate) =>
		operate.addEventListener('click', () => {
			operaterType = operate.innerText;
			firstNum = Number(updatedNumVal);
			updatedNumVal = '';
		})
	);

	result.addEventListener('click', () => {
		secondNum = Number(updatedNumVal);
		displayVal.innerText = operate(firstNum, operaterType, secondNum);
		updatedNumVal = '';
	});
}

populateDisplay();
