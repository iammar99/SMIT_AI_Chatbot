
// <================== VARIABLE DECLARATION ==================>

let screen = document.getElementById("screen")
screen.innerHTML = "0"

let equation = ""
let dot_exist = false
let current_value = "0"
let prev_value = ""
let operator = ""
let operatorToDisplay = ""
let pi = 3.14159265359
let e = 2.71828182846



// <================== DISPLAY FUNCTION ==================>

const display = () => {
    // equation = prev_value + operatorToDisplay + current_value
    screen.innerHTML = prev_value + operatorToDisplay + current_value
    // console.log("current_value",current_value)
    // console.log("prev_value",prev_value)
}

// <================== CLEAR ==================>

const handleClear = () => {
    if (current_value) {
        let afterDel = current_value.slice(0, current_value.length - 1)
        current_value = afterDel
    }
    else if (operator) {
        let afterDel = operator.slice(0, operator.length - 1)
        operator = afterDel
        operatorToDisplay = afterDel
    }
    else {
        prev_value = prev_value.toString()
        let afterDel = prev_value.slice(0, prev_value.length - 1)
        prev_value = afterDel
    }
    if(!current_value && !operator && !prev_value){
        current_value = "0"
    }

    display()
}

const handleClearAll = () => {
    current_value = "0"
    prev_value = ""
    operator = ""
    operatorToDisplay = ""
    dot_exist = false
    display()
}


// <================== NUMBER ==================>

const appendNumber = (num) => {
    // ------------ CHECK CURRENT VALUE CONTAIN OPERATOR ------------
    if (current_value == operator) {
        current_value = ""
    }
    // ------------ CHECK CURRENT IS ZERO -----------
    if (current_value == 0) {
        if (num == ".") {
            if (dot_exist) {

            }
            else {
                dot_exist = true
                current_value += num
            }
        }
        // ------------ CHECK IF DOT EXIST OR NOT ------------
        else {
            // ------------ CHECK IF NUMBER IS PI OR E ------------
            if (num == pi || num == e) {
            }
            if (dot_exist) {
                current_value += num
            }
            else {
                current_value = num
            }
        }
    }
    else {
        // ------------ CHECK IF DOT EXIST OR NOT ------------
        if (num == ".") {
            if (dot_exist) {

            }
            else {
                dot_exist = true
                current_value += num
            }
        }
        // ------------ CHECK IF DOT EXIST OR NOT ------------
        else {
            // ------------ CHECK IF NUMBER IS PI OR E ------------
            if (num == pi || num == e) {
                // console.log("first")
            }
            current_value += num
        }
    }
    // ------------ CHECK IF DOT EXIST OR NOT ------------
    display()
}


// <================== CALCULATE ==================>


const calculate = () => {
    switch (operator) {
        case "+":
            current_value = parseFloat(prev_value) + parseFloat(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "-":

            current_value = parseFloat(prev_value) - parseFloat(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "*":
            current_value = parseFloat(prev_value) * parseFloat(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "/":
            current_value = parseFloat(prev_value) / parseFloat(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "!":
            let fact = 1
            for (let i = 1; i <= prev_value; i++) {
                fact *= i
            }
            current_value = fact
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "%":
            current_value = parseFloat(prev_value) / 100
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "ln":
            current_value = Math.log(parseFloat(current_value))
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "log":
            current_value = Math.log10(parseFloat(current_value))
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "^":
            let ans = 1
            for (let i = 0; i < current_value; i++) {
                ans *= parseFloat(prev_value)
            }
            current_value = ans
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "sin":
            current_value = Math.sin(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "cos":
            current_value = Math.cos(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "tan":
            current_value = Math.tan(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "cosec":
            current_value = 1 / Math.sin(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "sec":
            current_value = 1 / Math.cos(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "cot":
            current_value = 1 / Math.tan(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
        case "√":
            current_value = Math.sqrt(current_value)
            prev_value = ""
            operator = ""
            operatorToDisplay = ""
            break;
    }
    display()
}



// <================== OPERATOR ==================>

const handleFun = (op) => {
    if (operator) {
        calculate()
    }
    if (op == "sin" || op == "cos" || op == "tan" || op == "ln" ||  op == "cosec" || op == "sec" || op == "cot" || op == "log") {
        prev_value = ""
        operator = op
        operatorToDisplay = op + "("
        dot_exist = false
    }
    else if(op == "√" ){
        prev_value = ""
        operator = op
        operatorToDisplay = op 
        dot_exist = false
    }
    else {
        operator = op
        operatorToDisplay = op
        prev_value = current_value
        current_value = ""
        dot_exist = false
    }
    display()

}



// <================== COPY ==================>


const handleCopy = () => {
    navigator.clipboard.writeText(screen.innerHTML);
    Toastify({
        text: "Copied",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#a8ff78",
            background: "linear - gradient(to right, #78ffd6, #a8ff78)",

        },

    }).showToast();
}










// <================== COPY ==================>

let date = new Date
date = date.getFullYear()

document.getElementById("date").innerHTML = date