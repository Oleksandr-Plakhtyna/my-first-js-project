//Завдання номер 1.

let number = 15

if (number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz")
} else if(number % 3===0){
    console.log("Fizz")
} else if (number % 5 === 0){
    console.log("Buzz")
} else {
    console.log (number)
}



// Завдання номер 2.

let year = 2028

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log (year + " є високосним роком ")
} else {
    console.log(year + " не є високосним роком ")
}


// Завдання номер 3.

let age = 234

if (age % 10 === 1 && age % 100 !== 11){
    console.log("Вам " + age + " рік")
} else if ((age % 10 === 2 || age % 10 === 3 || age % 10 === 4) && (age % 100 !== 12 || age % 100 !== 13 || age % 100 !==14)){
console.log("Вам " + age + " роки")
} else {
    console.log("Вам " + age + " років")
}