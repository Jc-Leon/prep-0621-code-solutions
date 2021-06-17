function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log(sum);


function convertHourstoMinute(hours) {
 return Math.floor(hours * 60);
}
var minutes = convertHourstoMinute(2);
console.log(minutes)


function getGreeting (name) {
  return "Hello" + name;
}
console.log(getGreeting(' World!'))


function addAndMultiplyBy5 (num1, num2) {
  return (num1 + num2) * 5 ;
}
var sum = addAndMultiplyBy5(10, 5);
console.log(sum);


function multiplyAndDivideBy5 (num1, num2) {
  return (num1 * num2) / 5 ;
}
var sum = multiplyAndDivideBy5 (35, 10);
console.log(sum);


function subtractTwoNumbers (num1, num2) {
  return num1 - num2 ;
}
var sum = subtractTwoNumbers (22 , 7);
console.log(sum);


 function getCircleCircumference(radius) {
  return  2 * Math.PI * radius
  }
 console.log(getCircleCircumference(5))

function getFullName (firstName,lastName){
  return firstName + lastName;
}
var name = getFullName("Juan ","Ramirez")
console.log(name);

function cube (number) {
  return  Math.pow(5,3) ;
}
console.log(cube(5));
