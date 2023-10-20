// Programming with Mosh ---- Typescirpt in One Hour ----

console.log("Hello World!");

let age:number = 23;

if (age > 20) {
    age += 10;
}
console.log(age);

// Debugging ----


// Data Type in TS

// any, unknown, never, enum, tuple and with all in JS too

let sales: number = 237_303_003;
let course: string = "Typescript";
let is_published: boolean = true;

// We don't have to specifically write the type, TS complier will do that for us.

// Data type - any ----

let level;

// let a = 1;
// let a = "Hello"; Thing this will loose feature of type checking

function render (document:any) {
    console.log(document);
}

// Data type - arrays ----

let numbers: number[] = [];

let number = [1, 2, '3'];

// numbers.forEach(n => n.)  Auto completion ---

// Data type - Tuples  ----