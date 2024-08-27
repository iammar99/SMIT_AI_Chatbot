let output = document.getElementById("output-container")


// -------------------------- handlefun1 ==> ( maximum between two numbers.) --------------------------

const handlefun1 = () => {
    let num1 = prompt("Enter The First Number")
    let num2 = prompt("Enter The Second Number")

    if (num1 < num2) {
        output.innerHTML = `The maximum number between ${num1} & ${num2} is Second Number ${num2}`
    }
    else if (num1 > num2) {
        output.innerHTML = `The maximum number between ${num1} & ${num2} is First Number ${num1}`
    }
    else if (num1 === num2) {
        output.innerHTML = `Both numbers ${num1} & ${num2} are equal`
    }
    else {
        output.innerHTML = `Kindly Enter a number`
    }
}

// -------------------------- handlefun2 ==> (maximum between three numbers) --------------------------

const handlefun2 = () => {
    let num1 = prompt("Enter The First Number")
    let num2 = prompt("Enter The Second Number")
    let num3 = prompt("Enter The Third Number")

    if (num1 > num2) {
        if (num1 > num3) {
            output.innerHTML = `The maximum number between ${num1} , ${num2} & ${num3} is First Number ${num1}`
        }
    }
    else if (num2 > num1) {
        if (num2 > num3) {
            output.innerHTML = `The maximum number between ${num1} , ${num2} & ${num3} is Second Number ${num2}`
        }
    }
    else if (num3 > num1) {
        if (num3 > num3) {
            output.innerHTML = `The maximum number between ${num1} , ${num2} & ${num3} is Third Number ${num3}`
        }
    }
    else if (num1 === num2 && num2 === num3) {
        output.innerHTML = `All numbers ${num1} , ${num2} & ${num3} are equal`
    }
    else {
        output.innerHTML = `Kindly Enter a number`
    }
}

// ----------- handlefun3 ==> (whether a number is negative, positive or zero) -----------

const handlefun3 = () => {
    let num = prompt("Enter a Number")
    if (num < 0) {
        output.innerHTML = `The  number ${num} is Negative Number`
    }
    else if (num > 0) {
        output.innerHTML = `The  number ${num} is Positive Number`
    }
    else if (num == 0) {
        output.innerHTML = `The  number is Zero`
    }
    else {
        output.innerHTML = `Kindly Enter a number`
    }
}

// ---------- handlefun4 ==> (whether a number is divisible by 5 and 11 or not) ----------

const handlefun4 = () => {
    let num = prompt("Enter any Number")
    if (num % 5 == 0 && num % 11 == 0) {
        output.innerHTML = `The  number ${num} is Divisible by both 5 & 11`
    }
    else {
        output.innerHTML = `The  number ${num} is not Divisible by  5 & 11`
    }
}

// -------------------------- handlefun5 ==> (k whether a number is even or odd) --------------------------

const handlefun5 = () => {
    let num = prompt("Enter any Number")
    if (num % 2 == 0) {
        output.innerHTML = `The  number ${num} is Even`
    }
    else {
        output.innerHTML = `The  number ${num} is Odd`
    }
}

// -------------------------- handlefun6 ==> (whether a year is leap year or not) --------------------------

const handlefun6 = () => {
    let num = prompt("Enter any Year")
    if (num % 4 == 0) {
        output.innerHTML = `The  year ${num} is Leap`
    }
    else {
        output.innerHTML = `The  year ${num} is not Leap`
    }
}

// ------------------ handlefun7 ==> (any alphabet and check whether it is vowel or consonant) ------------------

const handlefun7 = () => {
    let alphabet = prompt("Enter any Alphabet")
    let charCode = alphabet.charCodeAt(0)
    // console.log('charCode', charCode)
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        if (alphabet === 'A' || alphabet == 'a'
            || alphabet === 'E' || alphabet == 'e'
            || alphabet === 'I' || alphabet == 'i'
            || alphabet === 'O' || alphabet == 'o'
            || alphabet === 'U' || alphabet == 'u') {
            output.innerHTML = `The character ${alphabet} is a Vowel `
        }
        else {
            output.innerHTML = `The character ${alphabet} is a Consonant `
        }
    }
    else {
        output.innerHTML = `The character ${alphabet} is not an Alphabet .  Please Enter an Alphabet`
    }
}

// -------------- handlefun8 ==> ( check whether a character is uppercase or lowercase alphabet----------------

const handlefun8 = () => {
    let alphabet = prompt("Enter any Uppercase Or Lowercase Alphabet Charcter")
    let charCode = alphabet.charCodeAt(0)
    if (alphabet.length === 1) {
        if (charCode >= 65 && charCode <= 90) {
            output.innerHTML = `The Charachter ${alphabet} is Capital Letter`
        }
        else if (charCode >= 97 && charCode <= 122) {
            output.innerHTML = `The Charachter ${alphabet} is Small Letter`
        }
        else {
            output.innerHTML = `The Charachter ${alphabet} is not a Alphabet . Please enter a valid Alphabet`
        }
    }
    else {
        output.innerHTML = `Please enter a Single Alphabet`
    }
}

// ---------------- handlefun9 ==> (input the week number and print weekday) ----------------

const handlefun9 = () => {
    let weekday = prompt("Enter Any weekday number")
    if (weekday == 1) {
        output.innerHTML = `The day is Monday`
    }
    else if (weekday == 2) {
        output.innerHTML = `The day is Tuesday`
    }
    else if (weekday == 3) {
        output.innerHTML = `The day is Wednesday`
    }
    else if (weekday == 4) {
        output.innerHTML = `The day is Thursday`
    }
    else if (weekday == 5) {
        output.innerHTML = `The day is Friday`
    }
    else if (weekday == 6) {
        output.innerHTML = `The day is Saturday`
    }
    else if (weekday == 7) {
        output.innerHTML = `The day is Sunday`
    }
    else {
        output.innerHTML = `${weekday} is not a valid weekday number . Please Enter a valid weekday number`
    }
}

// ---------------- handlefun10 ==> (month number and print the number of days in that month) ----------------

const handlefun10 = () => {
    let num = prompt("Enter Number of any months")
    if (num == 1) {
        output.innerHTML = `The Month is January`
    }
    else if (num == 2) {
        output.innerHTML = `The Month is February`
    }
    else if (num == 3) {
        output.innerHTML = `The Month is March`
    }
    else if (num == 4) {
        output.innerHTML = `The Month is April`
    }
    else if (num == 5) {
        output.innerHTML = `The Month is May`
    }
    else if (num == 6) {
        output.innerHTML = `The Month is June`
    }
    else if (num == 7) {
        output.innerHTML = `The Month is July`
    }
    else if (num == 8) {
        output.innerHTML = `The Month is August`
    }
    else if (num == 9) {
        output.innerHTML = `The Month is September`
    }
    else if (num == 10) {
        output.innerHTML = `The Month is October`
    }
    else if (num == 11) {
        output.innerHTML = `The Month is November`
    }
    else if (num == 12) {
        output.innerHTML = `The Month is December`
    } else {
        output.innerHTML = `Please Enter a valid Month number`
    }
}

// --------------- handlefun11 ==> (count a minimum number of notes in a given amount)----------------

const handlefun11 = () => {
    let amount = prompt("Enter the Amount")
    let notes = [5000, 1000, 500, 100, 50 , 20, 10, 5 , 1]
    let counter = 0
    console.log(typeof(amount))
    output.innerHTML =  `The Minimum number of notes used in a ${amount} are following :-` + "<br>" 
    for (let i = 0; i <= 9 ; i++){
        if(amount >= 0){
            if(amount > notes[i]){
                counter = Math.floor(amount/notes[i])
                amount = amount % notes[i]
                output.innerHTML +=  "Rs " + notes[i] 
                output.innerHTML +=  "-->" 
                output.innerHTML +=  counter 
                output.innerHTML +=  "<br>"
            }
        }
    }
}

// -------------------------- handlefun12 ==> (Calculate percentage and grade) --------------------------

// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


const handlefun12 = () => {
    let Physics = prompt("Enter Your Makrs in Physics out of 100")
    let Chemistry = prompt("Enter Your Makrs in Chemistry out of 100")
    let Biology = prompt("Enter Your Makrs in Biology out of 100")
    let Mathematics = prompt("Enter Your Makrs in Mathematics out of 100")
    let Computer = prompt("Enter Your Makrs in Computer out of 100")
    let totalMarks = Number(Physics) + Number(Chemistry) + Number(Biology) + Number(Mathematics) + Number(Computer)
    let percentage = (totalMarks / 5)
    if (percentage >= 90) {
        output.innerHTML = `Congrats !! Your Percentage is ${percentage} . You have scored an A Grade`
    }
    else if (percentage >= 80) {
        output.innerHTML = `Congrats !! Your Percentage is ${percentage} . You have scored an B Grade`
    }
    else if (percentage >= 70) {
        output.innerHTML = `Congrats !! Your Percentage is ${percentage} . You have scored an C Grade`
    }
    else if (percentage >= 60) {
        output.innerHTML = `Congrats !! Your Percentage is ${percentage} . You have scored an D Grade`
    }
    else if (percentage >= 40) {
        output.innerHTML = `Congrats !! Your Percentage is ${percentage} . You have scored an E Grade`
    }
    else if (percentage <= 40) {
        output.innerHTML = `Congrats !! Your Percentage is ${percentage} . You have scored an F Grade`
    }
    else {
        output.innerHTML = `Please Enter Valid number`
    }
}

// -------------------------- handlefun13 ==> (calculate its Gross salary) --------------------------

// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

const handlefun13 = () => {
    let salary = prompt("Enter You Salaray")
    salary = Number(salary)
    let totalSalary
    if (salary <= 10000) {
        totalSalary = salary + (salary * .2) + (salary * .8)
        output.innerHTML = `Your Grossy Salary is ${totalSalary}`
    }
    else if (salary <= 20000) {
        totalSalary = salary + (salary * .25) + (salary * .9)
        output.innerHTML = `Your Grossy Salary is ${totalSalary}`
    }
    else if (salary > 20000) {
        totalSalary = salary + (salary * .3) + (salary * .95)
        output.innerHTML = `Your Grossy Salary is ${totalSalary}`
    }
    else {
        output.innerHTML = `Please Enter valid Salary`
    }
}

// -------------------------- handlefun14 ==> (calculate total electricity bill) --------------------------

// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

const handlefun14 = () => {
    let units = prompt("Enter You Electricity Units")
    let bill
    units = Number(units)
    if (units <= 50) {
        bill = units * .5
        output.innerHTML = `The Electricity Bill for ${units} is Rs ${bill}`
    }
    else if (units <= 150) {
        bill = (50 * .5) + ((units - 50) * .75)
        output.innerHTML = `The Electricity Bill for ${units} is Rs ${bill}`
    }
    else if (units <= 250) {
        bill = (50 * .5) + (100 * .75) + ((units - 100) * 1.20)
        output.innerHTML = `The Electricity Bill for ${units} is Rs ${bill}`
    }
    else if (units > 250) {
        bill = (50 * .5) + (100 * .75) + (100 * 1.20) + ((units - 250) * 1.50)
        output.innerHTML = `The Electricity Bill for ${units} is Rs ${bill}`
    }
    else {
        output.innerHTML = `Please Enter Valid Electicity Units`
    }
}

// -------------------------- handleClear --------------------------

const handleClear = () => {
    output.innerHTML = ""
}




// ------------------------ Date ------------------------

let date = new Date
date = date.getFullYear()
document.getElementById("date").innerHTML = date