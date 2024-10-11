let displayValue = '';
let currentOperation = null;
let memoryValue = 0;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === '') return;
    if (currentOperation !== null && displayValue.split(' ').length === 3) {
        calculate(); 
    }
    
    currentOperation = operation;
    displayValue += ` ${operation} `;
    updateDisplay();
}

function calculate() {
    let [num1, operator, num2] = displayValue.split(' ');
    let result = 0;
    if (num1 === undefined || num2 === undefined) return;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Không thể chia cho 0!");
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        case 'square':
            result = Math.pow(num1, 2);
            break;
        case 'sqrt':
            result = Math.sqrt(num1);
            break;
        default:
            return;
    }
    displayValue = result.toString();
    currentOperation = null; 
    updateDisplay();
}

function clearDisplay() {
    displayValue = ''; 
    currentOperation = null;
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.toString().slice(0, -1); 
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue; 
}

function changeSign() {
    if (displayValue !== '') {
        displayValue = (parseFloat(displayValue) * -1).toString(); 
        updateDisplay();
    }
}


function memoryAdd() {
    if (displayValue !== '') {
        memoryValue += parseFloat(displayValue);
        clearDisplay();
        alert(`Đã thêm vào bộ nhớ: ${memoryValue}`); 
    }
}

function memorySubtract() {
    if (displayValue !== '') {
        memoryValue -= parseFloat(displayValue);
        clearDisplay(); 
        alert(`Đã trừ khỏi bộ nhớ: ${memoryValue}`);
    }
}

function memoryRecall() {
    displayValue = memoryValue.toString(); 
    updateDisplay();
}

function memorySubtract() {
    if (displayValue !== '') {
        memoryValue -= parseFloat(displayValue);
        clearDisplay();
        alert(`Đã trừ khỏi bộ nhớ: ${memoryValue}`);
    }
}

function memoryRecall() {
    displayValue = memoryValue.toString(); 
    updateDisplay();
}
function calculate() {
    let expression = document.getElementById('screen').value;
    try {
        document.getElementById('screen').value = eval(expression);
    } catch (error) {
        document.getElementById('screen').value = "Error";
    }
}

