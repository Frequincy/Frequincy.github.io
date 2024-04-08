// JavaScript file for the main page
'use strict';

//document.querySelector("#div1").style.backgroundColor = "red";
//document.querySelector("#img1").style.width = "200px";

/* 
Defining variables 
const age1 = 20; 
    (const is local and is undefined/flexible)

let age2 = 20; 
    (let is local)

var age3 = 20; 
    (var is global) 
*/
//Object/Dictionary
let stu1 = {
    name: "Tom", age: 20, grade: 96.6,

};

console.log(`Name: ${stu1.name}, Age: ${stu1.age}, Grade: ${stu1.grade}`)

//Array
let arr1 = ["Tom", "Jerry"];
console.log(arr1[0]);

//Functions

//Function Declaration

function func1(p1, p2) {
    
    
    return console.log(p1 + p2);
    
}
func1(2.3, 2.5);

//Arrow Function
let func2 = (p1, p2) => {
    return console.log(p1 * p2);
};

func2(5, 60);