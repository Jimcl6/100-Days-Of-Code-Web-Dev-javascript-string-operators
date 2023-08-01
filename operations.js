// Math operations / operators

console.log(10 + 4); //addition
console.log(10 - 4); //subtraction
console.log(10 * 4); //multiplication
console.log(10 / 4); //division

console.log(10 % 4); //modulus / modulo operator : - this will always give us the remainder of the divided units. e.g.: 10 / 4 => 2 why? 4 + 4 = 8
//and hence to get the total number of "10" we have to add up 2 more. 8 + 2 = 10.


// Math Rules.

// Javascript follow the standard math rules (P.E.M.D.A.S)
// P :- Parenthesis
// E :- Exponent
// M :- Multiplication
// D :- Division
// A :- Addition
// S :- Subtraction
// above math rule is organized according to it's top priority.

// Incrementation
// let result = (10 + 3 - 5) * 10;
// result++; //result = result + 1;

// Decrementation
// result--; //result = result - 1;


// result += 5; // result = result + 5
// result -= 5; // result = result - 5
// result *= 5; // result = result * 5
// result /= 5; // result = result / 5


// String operators
console.log('Jed' + 'Llorente'); // this concatenantes(combines the strings)
console.log('Jed' - 'Llorente'); // this will return NaN(Not-a-Number) because normally operators work only on numbers / integers / floats, the exception to this rule only works on string concatenation.

let userName = 'Jed';

console.log(userName.length); //the .length property allows us to count the number of elements inside a string or array.
console.log(userName.toUpperCase()); //the .toUpperCase() is a method that allows us to convert the entirety of the string all to Upper Case letters.