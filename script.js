class Calculator {

	updateScreen(number){
		this.number = number
		calculatorScreen.value = this.number
	}

	inputNumber(number){
		this.number = number

		if (currentNumber === '0'){
			currentNumber = this.number
		}else{
			currentNumber += this.number
		}

	}
	inputOperator(operator){
		this.operator = operator
		if (calcOperator === '') prevNumber = currentNumber

		calcOperator = this.operator
		currentNumber = '0'
	}
	calculate(){
		let result = ''

		switch (calcOperator) {
			case '+':
				result = parseFloat(prevNumber) + parseFloat(currentNumber)
				break;
			case '-':
				result = parseFloat(prevNumber) - parseFloat(currentNumber)
				break;
			case '*':
				result = parseFloat(prevNumber) * parseFloat(currentNumber)
				break;
			case '/':
				result = parseFloat(prevNumber) / parseFloat(currentNumber)
				break;

				default:
				break;
			
		}
		currentNumber = result
		calcOperator = ''
	}

	clearAll(){
		prevNumber = ''
		calcOperator = ''
		currentNumber = '0'
	}
	inputDecimal(dot){
		this.dot = dot
		if(currentNumber.includes('.')) return
		currentNumber += this.dot
	}
}

const calculator = new Calculator()

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const calculatorScreen = document.querySelector('.calculator-screen')
let prevNumber = ''
let calcOperator = ''
let currentNumber = ''
const equalSign = document.querySelector('.equal-sign')
const clear = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')



// mengambil angka yang di klik user
numbers.forEach((number) => {
	number.addEventListener('click', function(){
		calculator.inputNumber(this.value)
		calculator.updateScreen(currentNumber)
	})
})

// Mengambil opeator yang diplih user
operators.forEach((operator) => {
	operator.addEventListener('click', function(){
		calculator.inputOperator(this.value)
	})
})


// jika user klik sama dengan
equalSign.addEventListener('click', function() {
		calculator.calculate()
		calculator.updateScreen(currentNumber)
})

clear.addEventListener('click', () => {
	calculator.clearAll()
	calculator.updateScreen(currentNumber)
})

decimal.addEventListener('click', function(){
	calculator.inputDecimal(this.value)
	calculator.updateScreen(currentNumber)
})