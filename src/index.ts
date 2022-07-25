let id: number = 5;
let company_name: string = "Adedotun";
let bool: boolean = false;
let ids: number[] = [1, 2, 4, 5];
let x: any = "Hello";

let mixed: any[] = [1, 2, "bayo", "dele"];
let letters: string[] = ["dele", "dolapo"];

id = 5;

//Tuple
let person: [number, string, boolean] = [3, "Dotun", true];

//Tuple array
let employee: [number, string][];

employee = [
  [5, "jill"],
  [15, "jonathan"],
];

//union
let stringOrNum: string | number;

stringOrNum = "23";

//Enum

enum Direction {
  up = 1,
  down = "down",
}

//Interface
interface User {
  readonly id: number; //id cannot be mutated after first assignment
  name: string;
  age?: number //optional due to the question mark
}

const user: User = {
  id: 1,
  name: "adedotun",
};

//Type assertion

let cid: any = 1;

// let customerId = <number>cid
let customerId = cid as number;

//function

function addNumber(x: number, y: number): number {
  return x + y;
}

function returnNothing(x: number, y: number): void {
  console.log(x, y);
}

returnNothing(true, false);

console.log(addNumber(1, 2));

//Interface with function

interface MathFunc{
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => {
    return x + y
}
const sub: MathFunc = (x: number, y: number): number => {
    return x - y
}

//Classes
