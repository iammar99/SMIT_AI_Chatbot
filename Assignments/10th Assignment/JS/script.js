let output = document.getElementById("output-container")


// -------------------------- handlestring --------------------------

const handlestring = () => {
    output.innerHTML = ""
    let string = "abcdefghijklmnopqrstuvwxyz"
    output.innerHTML = `The original string is --> ${string} <br>`
    output.innerHTML += `The length of string is --> ${string.length} <br>`
    output.innerHTML += `The first index of 'xyz' is --> ${string.indexOf('xyz')} <br>`
    output.innerHTML += `The last index of 'xyz' is --> ${string.lastIndexOf('xyz')} <br>`
    output.innerHTML += `It will cut off lmn using slice --> ${string.slice(11,14)} <br>`
    output.innerHTML += `It will replace lmn with nml --> ${string.replace("lmn","nml")} <br>`
    output.innerHTML += `It will Convert to uppercase --> ${string.toUpperCase()} <br>`
    output.innerHTML += `It will Convert to lowercase --> ${string.toLowerCase()} <br>`
    output.innerHTML += `It will Concatenate --> ${string.concat(" ","123456789")} <br>`
    output.innerHTML += `It will tell the character at index 10 --> ${string.charAt(10)} <br>`
    output.innerHTML += `It will tell the character at index 10 --> ${string[10]} <br>`
    output.innerHTML += `It will tell the  ASCII code of character at index 10 --> ${string.charCodeAt(10)} <br>`
    output.innerHTML += `It will convert it into an array with respect to occurence of comma--> ${string.split(",")} <br>`
    output.innerHTML += `It will convert it into an array with individual element--> ${string.split("")} <br>`
}

// -------------------------- handleArray --------------------------

const handleArray = () => {
    output.innerHTML = ""
    let array = [1,2,3,4,5,6]
    output.innerHTML = `The original Array is --> ${array} <br>`
    output.innerHTML += `The value at index 3 is --> ${array.at(3)} <br>`
    output.innerHTML += `It will add 7 to the end --> ${array.push(7)} <br>`
    output.innerHTML += `It will remove an element from the end --> ${array.pop()} <br>`
    output.innerHTML += `It will fill every element with 1 --> ${array.fill(1)} <br>`
    array = [1,2,3,4,5,6]
    output.innerHTML += `It will remove first element  --> ${array.shift()} <br>`
    output.innerHTML += `It will add first element  --> ${array.unshift(1)} <br>`
    output.innerHTML += `It will reverse the array  --> ${array.reverse()} <br>`
    output.innerHTML += `It will find the element 8 from the array  --> ${array.includes(8)} <br>`
    output.innerHTML += `It will display all element after adding 1 in it  --> ${array.map(element=>element+1)} <br>`
    output.innerHTML += `It will display only element less than 5  --> ${array.filter(element=>element < 5)} <br>`
    output.innerHTML += `It will find greater element less than 5  --> ${array.find(element=>element < 5)} <br>`
    output.innerHTML += `It will check condition on every element  --> ${array.every(element=>element < 5)} <br>`
    output.innerHTML += `It will find the index on checking condition on every element  --> ${array.findIndex(element=>element === 4)} <br>`
    output.innerHTML += `It will convert whole array to string  --> ${array.toString()} <br>`
    output.innerHTML += `It will concatenate whole array  --> ${array.join(" + ")} <br>`
    output.innerHTML += `It will add element on specific index  --> ${array.splice(2,0,"a","b")} <br>`
    output.innerHTML += `It sort whole array  --> ${array.sort()} <br>`
}


// ----------- handleNumber -----------

const handleNumber = () => {
    output.innerHTML = ""
    let pi = 3.14
    output.innerHTML = `The original number is --> ${pi} <br>`
    output.innerHTML += `It will remove all digits after decimal point is --> ${pi.toFixed()} <br>`
    output.innerHTML += `It will precise the number number to 2 digits --> ${pi.toPrecision(2)} <br>`
    output.innerHTML += `It will return the value of pi --> ${pi.valueOf()} <br>`
    output.innerHTML += `It will convert it into a number--> ${Number("123456")} <br>`
    output.innerHTML += `It will extract the integer part only--> ${parseInt("3.1 month")} <br>`
    output.innerHTML += `It will extract the Float part only--> ${parseFloat("3.1 month")} <br>`
    output.innerHTML += `It will return the possible maximum js value--> ${Number.MAX_VALUE} <br>`
    output.innerHTML += `It will return the possible minimum js value--> ${Number.MIN_VALUE} <br>`
    output.innerHTML += `It will return the negative infinty--> ${Number.NEGATIVE_INFINITY} <br>`
    output.innerHTML += `It will return the positive infinty--> ${Number.POSITIVE_INFINITY} <br>`
}

// ---------- handleMath ----------

const handleMath = () => {
    output.innerHTML = ""
    let e = 2.718281828
    output.innerHTML = `The original number is --> ${e} <br>`
    output.innerHTML += `It will round of original number  --> ${Math.round(e)} <br>`
    output.innerHTML += `It will calculate the power of  given value--> ${Math.pow(2,2)} <br>`
    output.innerHTML += `It will calculate the Square rootof  given value--> ${Math.sqrt(64)} <br>`
    output.innerHTML += `It will return absolute positive value from given value--> ${Math.abs(-e)} <br>`
    output.innerHTML += `It will return closest upper value from given value--> ${Math.ceil(e)} <br>`
    output.innerHTML += `It will return closest lower value from given value--> ${Math.floor(e)} <br>`
    output.innerHTML += `It will return a random 16 digit value--> ${Math.random()} <br>`
    output.innerHTML += `It will return natural log of 1--> ${Math.log(1)} <br>`
    output.innerHTML += `It will return maximum value in given values--> ${Math.max(2,0,-9,8)} <br>`
    output.innerHTML += `It will return minimum value in given values--> ${Math.min(2,0,-9,8)} <br>`

}


// -------------------------- handleDate --------------------------

const handleDate = () => {
    output.innerHTML = ""
    let date = new Date
    output.innerHTML = `The original date is --> ${date} <br>`
    output.innerHTML += `The new date from 2017 jan 1 is --> ${new Date("2017")} <br>`
    output.innerHTML += `The new date is 2004 Nov 30  is --> ${new Date("2004 Nov 30")} <br>`
    output.innerHTML += `It will get date from current date --> ${date.getDate()} <br>`
    output.innerHTML += `It will get day from current date --> ${date.getDay()} <br>`
    output.innerHTML += `It will get year from current date --> ${date.getFullYear()} <br>`
    output.innerHTML += `It will get month from current date --> ${date.getMonth()} <br>`
    output.innerHTML += `It will get hours from current date --> ${date.getHours()} <br>`
    output.innerHTML += `It will get minutes from current date --> ${date.getMinutes()} <br>`
    output.innerHTML += `It will get seconds from current date --> ${date.getSeconds()} <br>`
    output.innerHTML += `It will get miliseconds from 1970 till current date --> ${date.getTime()} <br>`

}



// -------------------------- handleClear --------------------------

const handleClear = () => {
    output.innerHTML = "" 
}




// ------------------------ Date ------------------------

let date = new Date
date = date.getFullYear()
document.getElementById("date").innerHTML = date