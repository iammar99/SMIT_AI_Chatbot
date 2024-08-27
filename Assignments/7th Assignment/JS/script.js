let output = document.getElementById("output-container")
let array = [2, 23, 43, 234, 54, 234, 12, 65, 56, 2]


// -------------------------- handlefun1 ==> (  print numbers from 1 to 10.) --------------------------

const handlefun1 = () => {
    output.innerHTML = ""
    for (let i = 1; i <= 10; i++) {
        output.innerHTML += i + " "
    }
}

// -------------------------- handlefun2 ==> (print Even numbers in given array) --------------------------

const handlefun2 = () => {
    output.innerHTML = ""
    let result = []
    for (let i = 0; i <= array.length; i++) {
        if (array[i] % 2 == 0) {
            result.push(array[i])
        }
    }
    output.innerHTML = "These are the even numbers from given array ==> [" + result + "]"
}

// ----------- handlefun3 ==> (delete all occurrence of element in given array) -----------

const handlefun3 = () => {
    output.innerHTML = ""
    let num = prompt("Enter a Number")
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] != num) {
            result.push(array[i])
        }
    }
    output.innerHTML = `The Array after deleting all occurence is [ ${result} ]`
}

// ---------- handlefun4 ==> (find the power of a number using for loop) ----------

const handlefun4 = () => {
    let num = prompt("Enter any Number")
    let power = prompt("Enter the power of the number")
    let ans = 1
    for (let i = 1; i <= power; i++) {
        ans = ans * num
    }
    output.innerHTML = `The  ${num} raise to power ${power} is ${ans}`
}

// -------------------------- handlefun5 ==> (print a pattern) --------------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8

const handlefun5 = () => {
    output.innerHTML = ""
    for (let i = 1; i <= 8; i++) {
        output.innerHTML += "<br>"
        for (let j = 1; j <= i; j++) {
            output.innerHTML += j
        }
    }
}

// -------------------------- handlefun6 ==> ( find the no of digits in a number) --------------------------

const handlefun6 = () => {
    output.innerHTML = ""
    let num = prompt("Enter any number")
    let result = 0
    // for(let i = 0 ; i < num.length ; i++){
    //     result += i
    // }
    result = num.length
    output.innerHTML += `The no of digits ${num} are ${result}`
}

// ------------------ handlefun7 ==> (calculate the sum of digits in a number) ------------------

const handlefun7 = () => {
    output.innerHTML = ""
    let num = prompt("Enter any Number")
    let result = 0
    for (let i = 0; i < num.length; i++) {
        result += Number(num[i])
    }
    output.innerHTML += `The sum of digits of ${num} are ${result}`
}

// -------------- handlefun8 ==> ( find the largest number in an array ) ---------------- 

const handlefun8 = () => {
    output.innerHTML = ""
    let result = array[0]
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (result < array[i]) {
                result = array[i]
            }
        }
    }
    output.innerHTML = `The largest Number in the array is ${result}`
}

// ---------------- handlefun9 ==> (print the Fibonacci series for a given value of N) ---------------- 

const handlefun9 = () => {
    let number = prompt("Enter number for how long Series should print")
    output.innerHTML = ""
    let array = [0, 1]
    const fabiconi = (num) => {
        for (let i = 2; i < num; i++) {
            array[i] = array[i - 1] + array[i - 2]
        }
        return array
    }

    let result = []
    result = fabiconi(number)
    output.innerHTML = `The Fabiconni Series for ${number} Numbers is ${array}`
}

// ---------------- handlefun10 ==> (find duplicate values in a given array) ----------------

const handlefun10 = () => {
    output.innerHTML = ""
    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                result.push(array[i])
            }
        }
    }
    output.innerHTML = `The Array all duplicate values is [ ${result} ]`
}

// --------------- handlefun11 ==> (Linear search algorithm)----------------

const handlefun11 = () => {
    let target = prompt("Enter the target value")
    let index = ""
    const linearSearch = (array, target) => {
        for (let i = 0; i < array.length; i++) {
            if (target == array[i]) {
                return i
            }
        }
        return -1
    }
    let result = linearSearch(array, target)
    if (result !== -1) {
        output.innerHTML = `The targeted value is on the index # ${result}`
    }
    else {
        output.innerHTML = `The targeted value is not in the array`
    }
}

// -------------------------- handlefun12 ==> (Binary search algorithm) -------------------------- 

const handlefun12 = () => {
    output.innerHTML = ""
    let target = prompt("Enter the targeted value")
    target = +target
    let sortedArray = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
    const binarySearch = (sortedArray, target) => {
        for (let left = 0, right = sortedArray.length - 1; left <= right;) {
            let mid = Math.floor((left + right) / 2)
            if (sortedArray[mid] == target) {
                return mid
            }
            else if (sortedArray[mid] < target) {
                left = mid + 1
            }
            else {
                right = mid - 1
            }
        }
        return -1
    }
    let result = binarySearch(sortedArray, target)
    if (result !== -1) {
        output.innerHTML = `The targeted value ${target} is on the index # ${result}`
    }
    else {
        output.innerHTML = `The targeted value ${target} is not in the List`
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