let output = document.getElementById("output-container")

// =============================== Task 1 (Object Creation) ===============================

// -------------------------- handlefun1 ==> ( Create an empty object and assign it to a variable ) --------------------------

const handlefun1 = () => {
    let word = {}
    output.innerHTML = `The empty object is ${word}`
}

// -------------------------- handlefun2 ==> (Create an object with properties for name, age, and profession) --------------------------

const handlefun2 = () => {
    output.innerHTML = ""
    let name = prompt("Enter Name", "")
    let age = prompt("Enter Age", "")
    let proff = prompt("Enter Proffesion", "")
    let object = { name, age, proff }
    output.innerHTML = `The object is ${JSON.stringify(object)}`
}

// =============================== Task 2 (Object Properties) ===============================

// ----------- handlefun3 ==> (Access and print the values of properties from an object.) -----------

const handlefun3 = () => {
    output.innerHTML = ""
    let object = { name: "Ammar", age: 20, proff: "developer" }
    output.innerHTML = `The object is ${JSON.stringify(object)}`
}

// ---------- handlefun4 ==> (Modify the value of a property in an object.) ----------

const handlefun4 = () => {
    output.innerHTML = ""
    let object = { name: "Ammar", age: 20, proff: "developer" }
    output.innerHTML = `The old object is ${JSON.stringify(object)}  <br>`
    let name = prompt("Enter new name", "")
    object = { name, age: 20, proff: "developer" }
    output.innerHTML += `The new object is ${JSON.stringify(object)}`
}

// =============================== Task 3 (Object Methods) ===============================


// -------------------------- handlefun5 ==> (Reverse a given string) --------------------------

const handlefun5 = () => {
    output.innerHTML = ""
    let city = prompt("Enter City Name", "")
    let object = { name: "Ammar", age: 20, proff: "developer", city }
    output.innerHTML = `The object is ${JSON.stringify(object)}`
}

// -------------------------- handlefun6 ==> (Create an object that contains another object as one of its properties.) --------------------------

const handlefun6 = () => {
    output.innerHTML = ""
    let object = {
        msg: function () {
            console.log("Hello World")
        }
    }
    object.msg()
    output.innerHTML = `The code is -> ${object.msg}`
}

// ------------------ handlefun7 ==> (Create a method that calculates and returns a value based on object properties) ------------------

const handlefun7 = () => {
    output.innerHTML = ""
    let oldPrice = prompt("Enter old Price Of pen", "")
    let newPrice = prompt("Enter new Price Of pen", "")
    let object = {
        name: "Dollar",
        oldPrice,
        newPrice,
        differ: function () {
            return this.newPrice - this.oldPrice
        }
    }
    output.innerHTML = `The object is ${JSON.stringify(object)}  <br>`
    output.innerHTML += `The object method --> Difference : ${object.differ()}`
}

// =============================== Task 4 (Object Iteration) ===============================


// -------------- handlefun8 ==> ( Iterate over the properties of an object and print their values. ) ---------------- 

const handlefun8 = () => {
    output.innerHTML = ""
    let object = {
        name: "Ammar",
        age: 20,
        city: "Fasiaslabad"
    }
    for (let key in object) {
        output.innerHTML += `The property is => ${key + " : " + object[key]} <br>`
    }
}

// --------handlefun9 ==> (Iterate over the properties of an object and perform a specific action for each property) --------

const handlefun9 = () => {
    output.innerHTML = ""

    Toastify({
        text: "This function will filter all empty properties",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, red, brown)",
        },
        onClick: function () { } // Callback after click
    }).showToast();

    setTimeout(() => {
        let name = prompt("Enter Your name", "")
        let age = prompt("Enter Your age", "")
        let city = prompt("Enter Your City", "")

        let object = {
            name,
            age,
            city
        }

        for (let key in object) {
            if (object[key] == "") {
                delete object[key]
            }
        }
        output.innerHTML = `The object after filter is => "${JSON.stringify(object)}"`
    }, 1500)
}

// =============================== Task 5 (Object Comparison) ===============================

// ---------------- handlefun10 ==> (Compare two objects to check if they have the same properties and values) ----------------

const handlefun10 = () => {
    let obj1 = { name: "Ammar", age: "20", city: "FSD" }
    output.innerHTML = `Existing object is --> ${JSON.stringify(obj1)} <br>`

    let name = prompt("Enter Your name", "")
    let age = prompt("Enter Your age", "")
    let city = prompt("Enter Your city", "")

    let obj2 = {
        name,
        age,
        city
    }

    if (obj1 == obj2) {
        output.innerHTML += `Both object are same `
        output.innerHTML += `<br> New object is --> ${JSON.stringify(obj2)}`
    }
    else {
        output.innerHTML += `Both object are not same `
        output.innerHTML += ` <br> New object is --> ${JSON.stringify(obj2)}`
    }
}

// --------------- handlefun11 ==> (Compare two objects to check if they refer to the same object in memory.)----------------

const handlefun11 = () => {
    let obj1 = { name: "Ammar", age: "20", city: "FSD" }
    output.innerHTML = `Existing object is --> ${JSON.stringify(obj1)} <br>`

    let name = prompt("Enter Your name", "")
    let age = prompt("Enter Your age", "")
    let city = prompt("Enter Your city", "")

    let obj2 = {
        name,
        age,
        city
    }

    if (obj1 === obj2) {
        output.innerHTML += `Both object refer to the same object in memory `
        output.innerHTML += `<br> New object is --> ${JSON.stringify(obj2)}`
    }
    else {
        output.innerHTML += `Both object does not refer to the same object in memory `
        output.innerHTML += ` <br> New object is --> ${JSON.stringify(obj2)}`
    }
}

// =============================== Task 6 (Object Nesting) ===============================

// ------------ handlefun12 ==> (Create an object that contains another object as one of its properties) ------------ 

const handlefun12 = () => {
    output.innerHTML = ""
    let object = {
        name: "Ammar",
        age: 20,
        education: {
            degree: "BSIT",
            university: "UAF",
            year: 2024
        }
    }
    output.innerHTML = `The Object is -> ${JSON.stringify(object)}`
}

// ------------- handlefun13 ==> (Access and modify properties of a nested object.) ------------- 

const handlefun13 = () => {
    output.innerHTML = ""
    let object = {
        name: "Ammar",
        age: 20,
        education: {
            degree: "BSIT",
            university: "UAF",
            year: 2024
        }
    }
    output.innerHTML = `The Object is -> ${JSON.stringify(object)} <br>`

    let degree = prompt("Enter degree", "")
    let university = prompt("Enter university", "")
    let year = prompt("Enter year", "")

    object.education = {
        degree,
        university,
        year
    }
    output.innerHTML += `The new Object is -> ${JSON.stringify(object)}`
}

// =============================== Task 7 (Object Prototypes) ===============================

// -------------------------- handlefun14 ==> (Create a prototype object and use it to create multiple instances of objects) -------------------------- 

const handlefun14 = () => {
    output.innerHTML = ""
    let Person = {
        name: '',
        age: 0,
        greet: function () {
            output.innerHTML = `Hello, my name is ${this.name} and I am ${this.age} years old.`
        }
    }
    let person1 = Object.create(Person);
    person1.name = prompt("Enter Your Name", "");
    person1.age = prompt("Enter Your Age", "");
    person1.greet()
}


// -------- handlefun15 ==> (Add a method to the prototype object and observe its effect on the instances) -------- 

const handlefun15 = () => {
    output.innerHTML = ""
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    output.innerHTML = `Hello, my name is  ${this.name}`
  };

  let name = prompt("Enter Your Name","")
  let age = prompt("Enter Your Age","")
  
  let Person1 = new Person(name, age);
  
  Person1.sayHello();  
  
}

// =============================== Task 8 ( Object Serialization) ===============================


// ----------- handlefun16 ==> (Convert an object to a JSON string using JSON.stringify()) ----------- 

const handlefun16 = () => {
    output.innerHTML = ""
    let obj = {
        name: 'Ammar',
        age: 30,
    }
    output.innerHTML = `The object before using JSON.stringify() is  -->  ${obj} <br>`
    output.innerHTML += `The object before using JSON.stringify() is  -->  ${JSON.stringify(obj)}`
}


// ------ handlefun17 ==> (Parse a JSON string and convert it back to an object using JSON.parse().) ------ 

const handlefun17 = () => {
    output.innerHTML = ""
    let obj = {
        name: 'Ammar',
        age: 30,
    }
    obj = JSON.stringify(obj)
    output.innerHTML = `The object before using JSON.parse() is  -->  ${obj} <br>`
    obj = JSON.parse(obj)
    output.innerHTML += `The object after using JSON.parse() is  -->  ${obj}`

}

// =============================== Task 9 (Destructuring) ===============================

// ------------- handlefun18 ==> (Use object destructuring to extract specific properties from an object.) ------------- 

const handlefun18 = () => {
    output.innerHTML = ""
    let obj = {
        name: "Ammar",
        age: 20
    }
    let { name, age} = obj
    output.innerHTML = `The object after destruction is --> ${name + " , " + age}`
}

// =============================== Task 10 (Object Property Enumeration) ===============================

// -------------- handlefun19 ==> (Use Object.keys() to get an array of all the property names of an object) -------------- 

const handlefun19 = () => {
    output.innerHTML = ""
    let obj = {
        name: "Ammar",
        age: 20
        }
        for(let name in obj){
            output.innerHTML += ` ${obj[name]}  <br>`
        }
}

// =============================== Task 11 (Object Inheritance) ===============================


/* --------  
                                                    handlefun20  
        (Create a parent object and a child object that inherits properties and methods from the parent) 
--------  */

const handlefun20 = () => {
    output.innerHTML = ""
    let ParentObject = {
        name: "Parent",
        age: 20,
        getDetails: function(){
            return this.name + " , " + this.age
            }
        }
        let Child = Object.create(ParentObject)
        Child.name = "Child"
        Child.age = 10
        Child.getDetails = function(){
            return this.name + " , " + this.age
        } 

        output.innerHTML = `The Parent is --> ${ParentObject.getDetails()} <br>`
        output.innerHTML += `The Child is --> ${Child.getDetails()}`
}


// =============================== Task 12 (Object Privacy) ===============================


/* --------  handlefun21 => (Create private properties in an object using closures or symbols)  --------  */

const handlefun21 = () => {
    output.innerHTML = ""
    class ClassWithPrivateField {
        #privateField;
      
        constructor() {
          this.#privateField = 42;
        }
      }
      
      class Subclass extends ClassWithPrivateField {
        #subPrivateField;
      
        constructor() {
          super();
          this.#subPrivateField = 23;
        }
      }
      
      new Subclass(); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}
output.innerHTML = `The Private object is --> ${ClassWithPrivateField.privateField}`      
}




// -------------------------- handleClear --------------------------

const handleClear = () => {
    output.innerHTML = "" 
}




// ------------------------ Date ------------------------

let date = new Date
date = date.getFullYear()
document.getElementById("date").innerHTML = date