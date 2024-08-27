//  --------------------------------------  Assugnment 12 -------------------------------------- 


// ================================= Practice exercise 13.1 ================================= 

// This exercise will demonstrate how to use a callback function, creating a
// way to pass a value from one function to another by invoking a callback
// function. We will create a greeting callback using a full name in a string.


// 1. Create a function named greet() that takes one argument, fullName . That argument should be an array. Output the items of the array into  the console interpolated into a greeting message string.

// 2. Create a second function that has two arguments: the first one is a string for the user's full name, and the second is the callback function.

// 3. Split the string into an array using the split() method.

// 4. Send the full-name array to the greet() function created in the first step.

// 5. Invoke the process of the callback function.


// SOLUTION :-

console.log(" ")
console.log("====================== Practice exercise 13.1 ======================")
console.log(" ")


// const greet = (fullName) => {
//     console.log(`Hello , My First name is "${fullName[0]}" and my Second name is "${fullName[1]}"`)
// }

// const func2 = (fullName , callback) => {
//     const splitName = fullName.split(' ');
//     callback(splitName);
// }

// func2("Ch Ammar" ,greet )


// ================================= End ================================= 


// ================================= Practice exercise 13.2 ================================= 

// In this exercise, you will create a counter that will output the values in
// sequence using Promises.

// 1. Set up a Promise that resolves with a value of Start Counting .

// 2. Create a function named counter() that has one argument that gets the value and outputs it into the console.

// 3. Set up the next function in the Promise with four then() instances, which should output a value into the counter function, and return a  value which will provide input for the subsequent then() instance.The returned values should be one , then two , then three . 


// SOLUTION :-

console.log(" ")
console.log("====================== Practice exercise 13.2 ======================")
console.log(" ")


// let promise = new Promise((resolve , reject) => {
//     resolve("Start Counting")
// })

// const counter = (value) => {
//     console.log("The Value is :-" , value)
// } 

// promise
// .then((value) => {
//     counter(value)
//     return("one")
// })
// .then((value) => {
//     counter(value)
//     return("two")
// })
// .then((value) => {
//     counter(value)
//     return("three")
// })
// .then((value) => {
//     counter(value)
// })
// .catch((error)=>{
//     console.log("Error :-" ,  error)
// })



// ================================= End ================================= 


// ================================= Practice exercise 13.3 ================================= 


// This exercise will demonstrate how to use await to wait on a Promise inside an async function. Using await and async , create a counter with timeout() , and increment a global counter value.

// 1. Create a global value for a counter.

// 2. Create a function that takes one argument. Return the result of a new Promise, setting a setTimeout() function that will contain the resolve instance.

// 3. Increment the counter within setTimeout() , adding one every second.Resolve the Promise with the value of the counter and the value of the variable that was in the function argument.

// 4. Create an asynchronous function that outputs into the console the value of the global counter and the value of the argument of the function.

// 5. Create a variable to capture the returned resolve value from the await function. Output that result into the console.

// 6. Create a loop to iterate 10 times, incrementing the value and invoking the async function, passing the value of the increment variable as the parameter in the function.



// SOLUTION :-

console.log(" ")
console.log("====================== Practice exercise 13.3 ======================")
console.log(" ")

// let globalCounter =  0

// const fun1 = (n1) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             globalCounter++
//             resolve([globalCounter , n1])
//         },1000)
//     })
// }
// const display = async(n1) => {
//     console.log("The value of Global Counter :-",globalCounter)
//     console.log("The value of Argument :-",n1)
//     let arr = await fun1(n1)
//     console.log(arr)
// }


// for(let i = 1 ; i <= 10 ; i++){
//     display(i)
// }


// ================================= End ================================= 


// ================================= Chapter project ================================= 


// ================================= Password checker =================================

// Using an array of allowed passwords, this exercise will create an application to check if one of these password string values exists in an array that lists all the accepted passwords. Set a Promise to check if the password is valid, and upon the result either resolve with the status of true or reject with the status of false. Return the check results.

// 1. Create an array of allowed passwords.

// 2. Create a login function that will check if the argument is a value that is included in the passwords array. You can use indexof() or the includes() method to check the array for a value and return a Boolean value of the result. 

// -------------- The includes() method is an array method that can check whether a certain value is included among the items in the array. It will return a Boolean value depending on the result.--------------

// 3. Add a function that returns a Promise. Using resolve and reject , return a JavaScript object with the Boolean of true or false to indicate the password validity status.

// 4. Create a function that checks the password, sending it to the login function, and using then() and catch() , outputs the result of either the rejected password or the resolved password.

// 5. Send several passwords, some within the array, others not, to the checker function.





// SOLUTION :-

console.log(" ")
console.log("====================== Password checker ======================")
console.log(" ")

// let allowedPasswords = ["12345678", "abcdefgh", "password", "helloWorld", "1234abcd"]
// let passwords = ["12345678", "myPassword", "abcdefgh", "password", "newPassword"]


// const login = (password) => {
//     return new Promise((resolve, reject) => {
//         if (allowedPasswords.includes(password)) {
//             resolve([true , password])
//         }
//         else {
//             reject([false , password])
//         }
//     })
// }
// const checker =  (passwords) => {
//     for (let i = 0; i < passwords.length; i++) {
//          login(passwords[i])
//             .then((result) => {
//                 console.log(result[1] , "==>" , result[0]  , ":- Password Accepted")
//             })
//             .catch((error) => {
//                 console.log(error[1] , "==>" , error[0] , ":- Password Rejected")
//             })
//     }
// }

// checker(passwords)




// ================================= End ================================= 


// ================================= Self-check quiz ================================= 



console.log(" ")
console.log("====================== Self-check quiz ======================")
console.log(" ")



console.log(" ")
console.log("============ Quiz 1  ============")
console.log(" ")

// 1. Fix the error in the following code to use the callback function:

// Error Code 


// function addOne(val){
//  return val + 1;
// }
// function total(a, b, callback){
//  const sum = a + b;
//  return callback(sum);
// }
// console.log(total(4, 5, addOne()));



console.log("Error :- addOne() parameters aren't alowed when use callback")


// Corrected Code 


// function addOne(val) {
//     return val + 1;
// }
// function total(a, b, callback) {
//     const sum = a + b;
//     return callback(sum);
// }
// console.log(total(4, 5, addOne));






console.log(" ")
console.log("============ Quiz 2  ============")
console.log(" ")


// 2. Write down the result of the following code:

// Error Code


// function checker(val) {
//  return new Promise((resolve, reject) => {
//  if (val > 5) {
//  resolve("Ready");
//  } else {
//  reject(new Error("Oh no"));
//  }
//  });
// }
// checker(5)
//  .then((data) => {console.log(data); })
//  .catch((err) => {console.error(err); });



console.log("Error :- Logical mistake Condition wasn't correct")


// Corrected Code


// function checker(val) {
//  return new Promise((resolve, reject) => {
//  if (val >= 5) {
//  resolve("Ready");
//  } else {
//  reject(new Error("Oh no"));
//  }
//  });
// }
// checker(5)
//  .then((data) => {console.log(data); })
//  .catch((err) => {console.error(err); });






console.log(" ")
console.log("============ Quiz 3  ============")
console.log(" ")


// 2. What line(s) of code need to be added to the preceding function so that there is always a result after the function runs that ensures the word done is output into the console?


// function checker(val) {
//     return new Promise((resolve, reject) => {
//         if (val > 5) {
//             resolve("Ready");
//         } else {
//             reject(new Error("Oh no"));
//         }
//     });
// }
// checker(5)
//     .then((data) => { console.log(data); })
//     .catch((err) => { console.error(err); })
//     .finally(console.log("Done"))




console.log(" ")
console.log("============ Quiz 4  ============")
console.log(" ")


// Update the below code to make the function return a Promise:

// Error Code

// function myFun() {
//     return "Hello";
//    }
//    myFun().then(
//     function(val) { console.log(val); },
//     function(err) { conole.log(err); }
//    );


console.log("Error :- Value was returned without promise")



// Corrected Code


// function myFun() {
//     return new Promise((resolve , reject)=>{
//         resolve("Hello")
//     })

// }
// myFun().then(
//  function(val) { console.log(val); },
//  function(err) { conole.log(err); }
// );


console.log(" ")