// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(1,3));
//
// var toAdd = [9, 5];
// console.log(...toAdd)
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
//hi name you are age
function printNameAge(name, age) {
  console.log(`Hello ${name}, you are ${age}`);
}

printNameAge(...person);
printNameAge(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Scott', ...names];
//Hi name

final.forEach( function (name) {
  console.log(`Hi ${name}!`);
});
