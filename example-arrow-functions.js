var add = (a, b) => a+b;
var square = (a) => a*a;

console.log('add(2,3) = ', add(2,3));

var hypertenuse = (a,b) => {
  return add(square(a), square(b));
};

console.log('hypertenuse(3,4) = ', hypertenuse(3,4));

var Fadd = function (a, b) {
  return a+b;
};
var Fsquare = function (a) {
  return a*a;
};

console.log('Fadd(2,3) = ', Fadd(2,3));

var Fhypertenuse = function (a, b) {
  return Fadd(Fsquare(a), Fsquare(b));
};

console.log('Fhypertenuse(3,4) = ', Fhypertenuse(3,4));




// // var names = ['Pk', 'Kathi', 'Till'];
// //
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Paul'));
//
// // var person = {
// //   name: 'Paul',
// //   greet: function () {
// //     names.forEach((name) => {
// //       console.log(this.name + ' says hi to ' + name);
// //     });
// //   }
// // }
// //
// // person.greet();
//
// // Challenge Area
// function add (a, b) {
//   return a + b;
// }
//
// //addStatement
// var addStatement = (a, b) => {
//   return a+b;
// };
//
// //addExpression
// var addExpression = (a, b) => a+b;
//
// console.log(add(1,3));
// console.log(add(9,0));
//
// console.log(addStatement(1,3));
// console.log(addStatement(9,0));
//
// console.log(addExpression(1,3));
// console.log(addExpression(9,0));
