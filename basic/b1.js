
//******  1  ******** */
// word vs  keyword 
//  it a specific sequence of characters which is known by the compiler/ interpreter 
//  tatya is not have meaning in programming language bu
// for  has a meaning  and it is a loop  hence keywords are those words  which are used to give instructiins ti the ide 
  
// 2     ***********

// var const let 

// variables and constants 
  // variable is a container which is used to store any type of data in programming 
  // variable values can be changeable
//   a=29 b=3.3 c="horjaoe" d='3'
const dulha="tatya";// to make cosntants 
var dulhan ="hhheee";
// comsole.log()
// let also make the variables but there is  some difference 


// 3 *****  
// hoisting 
// we can use variables and functions  before creating  that is hoisting 
// in hoisted declaration is automatically moved to top of the code 
console.log(a);// it will print undefined 
var a; // declaration  // default value is undefined 
a=23;// definition  
// undefined and not defined they bith are different 
// if you have particuar thing but not known the value for it  declared but not defined 
// and  not defined means you dont have this soecific thing or this thing does'nt exist  not declared 

 console.log(b);// not defined  


// 4 *****
// types in js
// primitive and reference 
// primitives== number ,string ,null ,undefined ,boolean,
// reference =[],{},()
// reference are those if we copy it then it will not create real copy but creates reference holds actual variable reference this called reference  and  those whi are create copy those are primitive 


// if we make change  in reference varible it will also change for main
// for eg 
// var a=[923]
// var b=a
// console.log(a, "and ",b)
// b.push(0244)
// console.log(a)

// :--  reference are those whose use any type of brackets 


// funciton   
// function mynumber(a,b)
// {
//     return a*b;
// }

// mynumber(12,66)



// conditionals 
if(3>4)
    console.log("great");
else if(3>2)
   console.log("mid");
else
  console.log("short")