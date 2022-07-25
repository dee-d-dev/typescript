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

type User = {id: number, name: string}

const user: User = {
  id: 1,
  name: "adedotun",
};

//Type assertion

let cid: any = 1

// let customerId = <number>cid
let customerId = cid as number;

