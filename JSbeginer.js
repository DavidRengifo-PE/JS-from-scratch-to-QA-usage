//words to declare variables like "let" have values/data types assigned like number, string or bulean
// values are auto assigned to variables and can be updated writing in new line

let name = 'David'
name = 'Angie'
console.log('Name is: ' + name) 

let age = 27
age = 'twentyseven'
console.log('Age is : ' + age)

let ageValidator = true
console.log('Age is more than 18 : ' + ageValidator)

//to avoid the update of a value, use constants (const)

const middleName = 'Liset'
//middleName = 'Angie'
console.log('Middle name is: ' + middleName) 

// SECOND DAY
// Conditional Operators like "if" and "else"
let ageIs = 27
let ageNow
if (ageIs > 18){
    ageNow = true
} 
else if (age = 20){
    ageNow = false
}
else {
    ageNow = false
}
console.log('Age is more than 18 : ' + ageNow)

//there's no need to make all that, here are some other options
ageNow = (ageIs > 18) ? true : false
console.log('Age is more than 18 : ' + ageNow)

// although now I learned that adding true:false after ? is redundant, and ? is mostly
// used for comparison
// better to use this if we are gonna summarize the usage of true/false values
ageIs = 27
ageNow = ageIs > 18
console.log('Age is more than 18 : ' + ageNow)

//or: which helps to simplify the code and avoid innecesary issues later
ageIs = 27
ageNow = ageIs > 18
console.log(`Age is more than 18 : ${ageNow}`)

//LOOPS
//While: Used while the condition is true
let count = 1
while (count <= 5){
    console.log('The number is:' + count)
    count++ //to avoid infinite loop we use ++
}

let pizzaSlices = 3
while (pizzaSlices > 0) {
  console.log("I ate one slice 🍕")
  pizzaSlices-- //"while" is used to loop while the condition is true, here use -- to reduce 3 until reaching 0, then it stops
}
console.log("There's no more pizza 😢")

//For: Used when we know exactly how many times the loop will repeat
for (count=0; count<5; count++){
    console.log('The number is:' + count)
}
for (let slices=1; slices<=3; slices++){
    console.log(`I gave my friend pizza ${slices} `)
}
console.log('All have pizzas')

//FUNCTIONS
// Like a mini program, reusable code. Takes input and gives back output. You can call it anytime
function product (a, b){
    return a + b
}
let result = product(5, 4)
console.log(result) //this is a function with "return" and data is stored inside a variable

function greet(name) {
    console.log (`Hello, ${name}!`) 
} 
greet("David")
greet("Angie")
// function with parameter (input). "Name" is the parameter and the names are arguments (values).