let output = document.getElementById("output-container")


// -------------------------- handlefun1 ==> ( Return the length of a given string ) --------------------------

const handlefun1 = () => {
    let word = prompt("Enter any valid String", "")
    output.innerHTML = `The Length of the String entered is ${word.length}`
}

// -------------------------- handlefun2 ==> (Concatenate two strings together) --------------------------

const handlefun2 = () => {
    output.innerHTML = ""
    let str1 = prompt("Enter first valid String", "")
    let str2 = prompt("Enter second valid String", "")
    let result = str1 + str2
    output.innerHTML = `The result after concatenation of both string is ${result}`
}

// ----------- handlefun3 ==> (Determine if a given string is empty) -----------

const handlefun3 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any String", "")
    if (str.length === 0) {
        output.innerHTML = `The String Is Empty`
    }
    else {
        output.innerHTML = `The String Is not Empty`
    }
}

// ---------- handlefun4 ==> (Count the number of vowels in a string) ----------

const handlefun4 = () => {
    let str = prompt("Enter any string ", "")
    let counter = 0
    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'A' || str.charAt(i) == 'e' || str.charAt(i) == 'E' ||
            str.charAt(i) == 'i' || str.charAt(i) == 'I' || str.charAt(i) == 'o' || str.charAt(i) == 'O' ||
            str.charAt(i) == 'u' || str.charAt(i) == 'U') {
            counter++
        }
    }
    output.innerHTML = `The string Contain ${counter} vowel(s)`
}

// -------------------------- handlefun5 ==> (Reverse a given string) --------------------------

const handlefun5 = () => {
    output.innerHTML = ""
    let str = prompt("Enter Any String", "")
    let revStr = str.split("")
    let result = ""
    for (let i = revStr.length - 1; i >= 0; i--) {
        result += revStr[i]
    }
    output.innerHTML = "<br>" + `The Reversed string ${result} without using built in function`
}

// -------------------------- handlefun6 ==> (Check if a string is a palindrome) --------------------------

const handlefun6 = () => {
    output.innerHTML = ""
    let word = prompt("Enter Any String", "")
    word = word.toLowerCase()
    let counter1 = 0
    let result = false
    for (let counter2 = word.length - 1; counter2 >= 0; counter2--) {
        if (word.charAt(counter1) !== word.charAt(counter2)) {
            break
        }
        else {
            result = true
        }
    }
    if (result === true) {
        output.innerHTML = `The Word is Plaindrome`
    }
    else {
        output.innerHTML = `The Word isn't Plaindrome`
    }
}

// ------------------ handlefun7 ==> (Convert a string to uppercase) ------------------

const handlefun7 = () => {
    output.innerHTML = ""
    let str = prompt("Enter Any String", "")
    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str.charAt(i).toUpperCase()
    }
    output.innerHTML = `The UpperCase form of string is ${result}`
}

// -------------- handlefun8 ==> ( Find the first occurrence of a given character in a string ) ---------------- 

const handlefun8 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")
    let chr = prompt("Enter Charachter to find", '')
    str = str.toLowerCase()
    let index = 0
    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) == chr) {
            index = i
            break
        }
    }
    if (index == 0) {
        output.innerHTML = `The Charachter isn't in the string`
    }
    else {
        output.innerHTML = `The index of Charachter in the String is ${index}`
    }
}

// --------handlefun9 ==> (Replace all occurrences of a given character in a string with another character) --------

const handlefun9 = () => {
    output.innerHTML = ""
    let str = prompt("Enter the string", "")
    let chr1 = prompt("Enter the charchter to replace", "")
    let chr2 = prompt("Enter the charachter to repolace with", "")
    let result = ""
    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) == chr1) {
            result += chr2
        }
        else {
            result += str.charAt(i)
        }
    }
    output.innerHTML = `The string after replacing charachters is => ${result}`
}

// ---------------- handlefun10 ==> (Trim leading and trailing whitespace from a string) ----------------

const handlefun10 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any valid string", "")
    str = str.trim()
    output.innerHTML = `The string after trimming is => "${str}"`
}

// --------------- handlefun11 ==> (Count the number of words in a string)----------------

const handlefun11 = () => {
    output.innerHTML = ""
    let str = prompt("Enter the valid string", "")
    let counter = 1
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            if (str.charAt(i + 1) == " ") {
                i++
            }
            counter++
        }
    }
    output.innerHTML = `The given String Consist of ${counter} words`
}

// ------------ handlefun12 ==> (Check if a string contains only numeric characters) ------------ 

const handlefun12 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")
    let result = true
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 0 || str.charAt(i) == 1 || str.charAt(i) == 2 || str.charAt(i) == 3
            || str.charAt(i) == 4 || str.charAt(i) == 5 || str.charAt(i) == 6 || str.charAt(i) == 7
            || str.charAt(i) == 8 || str.charAt(i) == 9) {
            continue
        }
        else {
            result = false
            break
        }
    }
    if (result) {
        output.innerHTML = `The String only consist of numeric charachters`
    }
    else {
        output.innerHTML = `The String does not only consist of numeric charachters`
    }
}

// ------------- handlefun13 ==> (Check if a string is a valid email address) ------------- 

const handlefun13 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any email address", "")
    let result
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            result = false
            break
        }
        if (str.charAt(i) === "@") {
            result = "@"
        }
        if (result === "@" && str.charAt(i) === "." && str.charAt(i + 1) === "c" && str.charAt(i + 2) === "o" && str.charAt(i + 3) === "m") {
            result = true
        }
    }
    if (result === true) {
        output.innerHTML = "The String is a valid Email address"
    }
    else {
        output.innerHTML = "The String isn't a valid Email address"
    }
}

// -------------------------- handlefun14 ==> (Extract the domain name from a URL string) -------------------------- 

const handlefun14 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any URL", "")
    let domain = ""
    if (str.includes(".com")) {
        let i
        if (str.includes("www.")) {
            console.log("first")
            i = 4
        }
        else {
            i = 0
        }
        for (; str.charAt(i) != "." && str.charAt(i + 1) != "c"; i++) {
            domain += str.charAt(i)
        }
    }
    else {
        output.innerHTML = `The URL isn't valid`
    }

    output.innerHTML = `The Domain Name is ${domain}`
}


// -------- handlefun15 ==> (Convert a string into title case (the first letter of each word capitalized)) -------- 

const handlefun15 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")
    output.innerHTML = "<span style='text-transform:capitalize;'>" + str + "</span>"
}


// ----------- handlefun16 ==> (Remove all non-alphabetic characters from a string) ----------- 

const handlefun16 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")

    let result = ""

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i).charCodeAt()
        if (char >= 65 && char <= 90 || char >= 97 && char <= 122) {
            result += str.charAt(i)
            continue
        }
        else {
            continue
        }

    }
    output.innerHTML = `The String after removing non-alphabetic characters is ${result}`

}


// ------ handlefun17 ==> (Check if a string is a valid palindrome permutation (ignoring spaces)) ------ 

const handlefun17 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")
    str = str.toLowerCase()
    let hash = []
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            continue
        }
        else if (hash.includes(str.charAt(i)) !== true) {
            hash.push(str.charAt(i))
        }
        else if (hash.includes(str.charAt(i)) === true) {
            let index = hash.indexOf(str.charAt(i))
            hash.splice(index, 1)
        }
    }
    if (str.length % 2 === 0) {
        output.innerHTML = `Is string a valid palindrome permutation -> ${hash.length === 0}`
    } else {
        output.innerHTML = `Is string a valid palindrome permutation -> ${hash.length === 1}`
    }
}


// ------------- handlefun18 ==> (Check if a string is an anagram of another string) ------------- 

const handlefun18 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")
    let str2 = prompt("Enter The second String", "")

    str = str.toLowerCase()
    str2 = str2.toLowerCase()

    str = str.split("")
    str2 = str2.split("")

    let result = false

    if (str.length !== str2.length) {
        result = false
    }
    else {
        str = str.sort()
        str2 = str2.sort()

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str2[i]) {
                result = true
            }
            else {
                result = false
                break
            }
        }
    }
    if (result === true) {
        output.innerHTML = "First String is anagram of second one"
    }
    else {
        output.innerHTML = "First String is not anagram of second one"
    }
}


// -------------- handlefun19 ==> (Find the longest word in a string) -------------- 

const handlefun19 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")

    let array = str.split(" ")

    let counter = 0
    let word = ""

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > counter) {
            counter = array[i].length
            word = array[i]
        }
    }
    output.innerHTML = `The Largest word is "${word}" consist of "${counter}" letters`
}


/* --------  
                                                    handlefun20  
        (Perform string compression by replacing repeated characters with the character followed by the count) 
--------  */

const handlefun20 = () => {
    output.innerHTML = ""
    let str = prompt("Enter any string", "")
    let compressedString = compressString(str);
    output.innerHTML = `The compressed String is <br> ${compressedString}`

}

function compressString(s) {
    let compressed = "";
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && s[i] === s[i + 1]) {
            count++;
        } else {
            compressed += s[i] + "->" + count + "<br>";
        }
    }
    return compressed.length < s.length ? compressed : s;
}




// -------------------------- handleClear --------------------------

const handleClear = () => {
    output.innerHTML = ""
}




// ------------------------ Date ------------------------

let date = new Date
date = date.getFullYear()
document.getElementById("date").innerHTML = date