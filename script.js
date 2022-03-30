const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value")
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const number = document.querySelectorAll(".number")

numbers.forEach ((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
    
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
const operators = document.querySelectorAll(",operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})
const iputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}
const operators = document.querySelectorAll("operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
const equalSign = document.querySelectorAll('.equal-sign')

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
})
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = prevNumber + currentNumber
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}