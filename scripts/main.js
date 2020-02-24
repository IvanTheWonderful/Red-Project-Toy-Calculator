// Define variables
var inputNumber = [];
var firstNumber;
var secondNumber;
var operator;
var result;

// Functions for "onclick" events of the number buttons
function num1(){
    inputNumber.push(1);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num2(){
    inputNumber.push(2);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num3(){
    inputNumber.push(3);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num4(){
    inputNumber.push(4);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num5(){
    inputNumber.push(5);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num6(){
    inputNumber.push(6);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num7(){
    inputNumber.push(7);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num8(){
    inputNumber.push(8);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num9(){
    inputNumber.push(9);
    console.log(inputNumber);
    showNumberOnScreen();
}

function num0(){
    inputNumber.push(0);
    console.log(inputNumber);
    showNumberOnScreen();
}

/* the "." button should turn any number after into 
that (number / (10 ^ the length of that number)) */
function theDot(){
    inputNumber.push('.');

    console.log(inputNumber);
    showNumberOnScreen();
}

function numberAfterDot(){
    
}

// The AC button should reset all variables
function AC(){
    inputNumber = [];
    firstNumber = null;
    secondNumber = null;
    result = null;
    showNumberOnScreen();
    console.log("inputNumber is "+ inputNumber,
                "firstNumber is "+ firstNumber,
                "secondNumber is "+ secondNumber,
                "result is " + result);
}

/* Define functions of the operators
"+-x÷": each can transform all digits that are clicked
before "+-x÷" into a single number. */
function plus(){
    firstNumber = parseInt(inputNumber.join(""));
    operator = "plus";
    inputNumber = [];
    console.log("inputNumber is "+ inputNumber,
    "firstNumber is "+ firstNumber,
    "secondNumber is "+ secondNumber,
    "result is " + result);
}

function minus(){
    firstNumber = parseInt(inputNumber.join(""));
    operator = "minus";
    inputNumber = [];
    console.log("inputNumber is "+ inputNumber,
    "firstNumber is "+ firstNumber,
    "secondNumber is "+ secondNumber,
    "result is " + result);
}

function multiply(){
    firstNumber = parseInt(inputNumber.join(""));
    operator = "multiply";
    inputNumber = [];
    console.log("inputNumber is "+ inputNumber,
    "firstNumber is "+ firstNumber,
    "secondNumber is "+ secondNumber,
    "result is " + result);
}

function divide(){
    firstNumber = parseInt(inputNumber.join(""));
    operator = "divide";
    inputNumber = [];
    console.log("inputNumber is "+ inputNumber,
                "firstNumber is "+ firstNumber,
                "secondNumber is "+ secondNumber,
                "result is " + result);
}

/* Give the result based on which button is clicked */
function calculation(){
    if(operator == "plus"){
        result = firstNumber + secondNumber;
    }else if(operator == "minus"){
        result = firstNumber - secondNumber;
    }else if(operator == "multiply"){
        result = firstNumber * secondNumber;
    }else if(operator == "divide"){
        result = firstNumber / secondNumber;
    }
}

/* "=" transforms all digits that are clicked after 
"+-x÷" into another number */
function equal(){
    secondNumber = parseInt(inputNumber.join(""));
    inputNumber = [];
    calculation();
    console.log("inputNumber is "+ inputNumber,
                "firstNumber is "+ firstNumber,
                "secondNumber is "+ secondNumber,
                "result is " + result);
    // Display the result of "number1 operator number2"
    if (isNaN(result)){
        document.getElementById("screen").innerHTML="X_X error...";
    }else{
        document.getElementById("screen").innerHTML=result;
    }
}

function showNumberOnScreen(){
    let numberOnScreen = inputNumber.join("");
    document.getElementById("screen").innerHTML=numberOnScreen;
}

function decimal(){

}




    
