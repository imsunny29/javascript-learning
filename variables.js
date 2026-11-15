// {VAR}  variable declaration

var userName = "Sunny";
console.log(userName);

//Reassignment

var age = 25;
age = 22;
console.log(age);

//Redeclaration

var x = 10;
var x = 20;
console.log(x);

//Multiple variables

var x=10;
var y=20;
var z=30;
console.log(x);
console.log(y);
console.log(z);

//{LET}  variable declaration

let city = "Delhi";
console.log(city);

//Reassignment

let marks = 70;
marks = 85;
console.log(marks);

//Redeclaration

let r = 10;
let s = 20;
console.log(r); //it show syntax error because we cannot redeclare a variable with the same name using let in the same scope.

//Redeclaration 

let w= 10;
w = 20;
console.log(w);//Reassignment = Allowed.
//Redeclaration = Not allowed in the same scope.

//Block scope

let a = 10; 
{
    let a = 20;
    console.log(a);
}
console.log(a);

//{CONST}  variable declaration

const pi = 3.14;
console.log(pi);

//Reassignment

/*const age = 22;
age = 27;
console.log(age);//typeerror because const not reassign variable*/

//Redeclaration

/*const x = 50;
const x = 60;
console.log(x); //systaxerror beacuse in samescope const varible not declare again*/
//Neither reassignment nor redeclaration allowed.

//Blockscope

const g = 100;

{
    const g = 200;
    console.log(g);
}

console.log(g);