// Programming with Mosh ---- Typescirpt in One Hour ----

/*
console.log("Hello World!");

let age:number = 23;

if (age > 20) {
    age += 10;
}
console.log(age);

*/

// Debugging ----

// Data Type in TS

// any, unknown, never, enum, tuple and with all in JS too

/*
let sales: number = 237_303_003;
let course: string = "Typescript";
let is_published: boolean = true;

*/

// We don't have to specifically write the type, TS complier will do that for us.

// Data type - any ----

/*
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

*/

// Data type - Tuples  ----
// Fixed length array in which each element have particular type.

/*
let users: [number, string] = [1, "Jehangeer"];

*/

// Data type - Enums ---

// List of related constants

const Small = 1;
const Medium = 2;
const Large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
} // If we used const enum then complier will generate more optimized code

let mySize: Size = Size.Medium;
console.log(mySize);

// Function in TS ----

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.5;
  }
}

calculateTax(10_000, 2023);

// Aliases ----
type Employee = {
  readonly id: number; // Nobody can change the id
  name: string;
  retire: (date: Date) => void;
};
// Objects in TS ----

let employee: Employee = {
  id: 1,
  name: "Jehangeer",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Types ----

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// Intersection Types ----
type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types (exact, specific) ----

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable Types ----

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

// Optional Chaining ----

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional Property access operator
console.log(customer?.birthday?.getFullYear());
