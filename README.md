<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f5f5f5;
        }

        .calculator {
            width: 240px;
            border: 1px solid #ccc;
            padding: 10px;
            display: inline-block;
            background-color: #b3c0c7;
            border-radius: 10px;
        }

        .calculator-screen {
            width: 100%;
            height: 50px;
            background-color: #e3edf3;
            border: none;
            text-align: right;
            padding-right: 10px;
            font-size: 24px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: inset 0 0 5px #888;
        }

        .calculator-keys {
            width: 100%;
        }

        button {
            width: 50px;
            height: 50px;
            margin: 3px;
            font-size: 20px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0 2px #888;
        }

        button:active {
            box-shadow: none;
            transform: translateY(2px);
        }

        .operator {
            background-color: #8b9298;
            color: white;
        }

        .number-button {
            background-color: #e6e8ea;
        }

        .equal-sign {
            background-color: #f3931e;
            color: white;
            width: 106px;
            box-shadow: 0 2px #888;
        }

        .clear-button {
            background-color: #999ea1;
            color: white;
        }

        .calculator-row {
            display: flex;
            justify-content: space-between;
        }

        .wide-button {
            width: 106px;
        }

    </style>
</head>
<body>

    <h2>Bài 2: Xây dựng trang web mô phỏng Calculator</h2>

    <div class="calculator">
        <input type="text" class="calculator-screen" id="screen" value="" disabled>
        <div class="calculator-keys">
            <div class="calculator-row">
                <button class="clear-button" onclick="clearScreen()">MC</button>
                <button class="operator" onclick="memoryPlus()">M+</button>
                <button class="operator" onclick="memoryMinus()">M-</button>
                <button class="operator" onclick="recallMemory()">RM</button>
            </div>
            <div class="calculator-row">
                <button class="operator" onclick="square()">x²</button>
                <button class="operator" onclick="squareRoot()">√x</button>
                <button class="operator" onclick="toggleSign()">+/-</button>
                <button class="operator" onclick="inputKey('*')">×</button>
            </div>
            <div class="calculator-row">
                <button class="number-button" onclick="inputKey('7')">7</button>
                <button class="number-button" onclick="inputKey('8')">8</button>
                <button class="number-button" onclick="inputKey('9')">9</button>
                <button class="operator" onclick="inputKey('-')">−</button>
            </div>
            <div class="calculator-row">
                <button class="number-button" onclick="inputKey('4')">4</button>
                <button class="number-button" onclick="inputKey('5')">5</button>
                <button class="number-button" onclick="inputKey('6')">6</button>
                <button class="operator" onclick="inputKey('+')">+</button>
            </div>
            <div class="calculator-row">
                <button class="number-button" onclick="inputKey('1')">1</button>
                <button class="number-button" onclick="inputKey('2')">2</button>
                <button class="number-button" onclick="inputKey('3')">3</button>
                <button class="operator" onclick="inputKey('/')">÷</button>
            </div>
            <div class="calculator-row">
                <button class="wide-button" onclick="inputKey('0')">0</button>
                <button class="equal-sign" onclick="calculate()">=</button>
            </div>
        </div>
    </div>
    <script>
        let memory = 0;
        function inputKey(value) {
            document.getElementById('screen').value += value;
        }
        function clearScreen() {
            document.getElementById('screen').value = "";
        }
        function toggleSign() {
            let currentValue = document.getElementById('screen').value;
            if (currentValue) {
                if (currentValue.charAt(0) === '-') {
                    document.getElementById('screen').value = currentValue.substring(1);
                } else {
                    document.getElementById('screen').value = '-' + currentValue;
                }
            }
        }
        function square() {
            let currentValue = parseFloat(document.getElementById('screen').value);
            document.getElementById('screen').value = currentValue * currentValue;
        }
        function squareRoot() {
            let currentValue = parseFloat(document.getElementById('screen').value);
            document.getElementById('screen').value = Math.sqrt(currentValue);
        }
        function memoryPlus() {
            let currentValue = parseFloat(document.getElementById('screen').value);
            memory += currentValue;
            clearScreen();
        }
        function memoryMinus() {
            let currentValue = parseFloat(document.getElementById('screen').value);
            memory -= currentValue;
            clearScreen();
        }

        function recallMemory() {
            document.getElementById('screen').value = memory;
        }
    </script>
  <script src="calculator.js"></script>
</body>
</html>
