//Ryan Hutchings
//Unit 14.6: Destructuring Exercise

//Object Destructuring 1
//What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

//Answers:
// console.log(numPlanets); //8
console.log(8);
// console.log(yearNeptuneDiscovered); //1846
console.log(1846);

//Object Destructuring 2
//What does the following code return/print?

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

//Answer:
//console.log(discoveryYears); //{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
console.log({ yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 })

//Object Destructuring 3
//What does the following code return/print?

// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

//Answers:
// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) //Your name is Alejandro and you like purple
console.log('Your name is Alejandro and you like purple');
// getUserData({firstName: "Melissa"}) //Your name is Melissa and you like green
console.log('Your name is Melissa and you like green');
// getUserData({}) // Your name is undefined and you like green
console.log('Your name is undefined and you like green');

//Array Destructuring 1
//What does the following code return/print?

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

//Answers:
// console.log(first); // Maya
console.log('Maya');
// console.log(second); // Marisa
console.log('Marisa');
// console.log(third); // Chi
console.log('Chi');

//Array Destructuring 2
//What does the following code return/print?

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]

//Answers:
// console.log(raindrops); // "Raindrops on roses"
console.log("Raindrops on roses");
// console.log(whiskers); // "whiskers on kittens"
console.log("whiskers on kittens");
// console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
console.log(["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]);

//Array Destructuring 3
//What does the following code return/print?

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

//Answer:
//console.log(numbers) // [10,30,20];
console.log([10, 30, 20]);


//ES2015 Refactoring
//ES5 Assigning Variables to Object Properties
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

//ES2015 Object Destructuring
/* Write an ES2015 Version */
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { numbers: { a, b } } = obj;

console.log(a);
console.log(b);

//ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

//ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);


//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));
