let age = 30;
let userName = "Jed";
let hobbies = ['Music', 'Programming', 'Riding'];
// syntax to create a javascript object:
let job = {
    title: 'Web Developer',
    place: 'Singapore',
    salary: 3000
};
// end of syntax on how to create a javascript object.

// to access the properties of our javascript object we use must first call the variable name, then use the dot(.) notation, then select the property of our javascript object
// that we wish to display.
// eg: alert(`I am currently working as a ${job.title} in ${job.place}, and I make ${job.salary} a month.`);

// javascript operators:-
// + :- this can be used to add up numbers, and can also be used to concatenate strings.
//      eg. 1 + 1 / 'string' + 'sample'
//
// - :- this can be used to substract numbers with each other.
//      eg. 1 - 1
//
// * :- this can be used to multiply numbers with each other.
//      eg. 1 * 1
//
// / :- this can be used to divide numbers with each other.
//      eg. 1 / 1
//

// syntax to declare a javascript function.
// function calculateAdultYears() {
//     return age - 18;
// }

let adultYears;

// function calculateAdultYears() {
//     let adultYears = age - 18;
// }
// above code block will not work because if we were to call the "adultYears" variable outside of the function it would return an error. Therefore, only declare a variable
// inside a function if that variable is to only be used inside that function.

// FUN FACT:- In javascript we can declare variables with the same name that is outside of our javascript function.
// e.g.:-
// let adultYears <----- variable outside of the function.
// function calculateAdultYears() {
//    let adultYears = code-value;
//
// }
// 
// ----------------syntax to declaring a parameter of a function:----------------
// function calculateAdultYears(userAge) {
//     var result;
//     result = userAge - 18;
//     return result;
// }
// ----------------end of syntax to declaring a parameter of a function:----------------

function calculateAdultYears(userAge) {
    var result;
    result = userAge - 18;
    return result;
}

adultYears = calculateAdultYears(age);

let person = {
    name: "Jed",
    greet() {
        alert(`Hello ${person.name}`);
    }
}

person.greet();

// -------------------------------------------------------------------------
// Self code exercise section.
alert(`Hi my name is ${userName}`);
alert(`I am ${age} yrs. old.`);

//exercise to access the elements of our javascript array. 
alert(`My hobbies are : ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`);

// exercise to access the properties of our javascript object
alert(`I am currently working as a ${job.title} in ${job.place}, and I make ${job.salary} a month.`);

alert(`I have lived ${adultYears} adult years.`);
// end of self code exercise section.
// -------------------------------------------------------------------------