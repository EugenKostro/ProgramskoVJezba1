//1. function definition
//primjer 1.

//function keyword
//name squareMe
//params - numb

function squareMe(numb){
    return numb * numb;
}
squareMe();

//anonymous functions
//primjer 2.

//function (numb){
  //  return numb * numb
//}

//function expression
//primjer 3.

const square = function(numb){
    return numb * numb
};

//primjer 4.



//4. Immediatelly invoked function expressions(IIFE)
//primjer 5.

(function () {
    let numb = 3; 
    return number * number;
})()

//Arrow function
//primjer 6.

function squareMe3(numb){ return numb * numb;}

(numb) => {return numb * numb};

numb => {numb * numb};

//intro

const noviString = new String("Ovo je nas string");
const noviPrimitivniString = "Ovo je nas string";

noviString;
noviPrimitivniString;

console.log(typeof typeof noviString);
console.log(typeof noviPrimitivniString);



//kako napraviti string

let prviNacin = "";
let drugiNacin = '';

let world = "world";
let treciNacin = 'Hello ${world}'
console.log(treciNacin);

let hello = "Hello ";
console.log(hello + world);

//kako dodati novi string
lethelloWorld = hello + world;

//String metode

let stringMethods = "string";
console.log(stringMethods.length);

const odredenoSlovo = "odredenoSlovo";
console.log(odredenoSlovo[3]);

const danZena = "Danas je dan zena";
if(danZena.includes("dan")){
    console.log("ukljucuje");
}
//danZena.indexOf;
//danZena.slice;
//danZena.toLowerCase;
//danZena.toUpperCase;
//danZena.replace;







console.log();
console.log();
console.log();
console.log();
console.log();


