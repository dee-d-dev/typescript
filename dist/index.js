"use strict";
let id = 5;
let company_name = "Adedotun";
let bool = false;
let ids = [1, 2, 4, 5];
let x = "Hello";
let mixed = [1, 2, "bayo", "dele"];
let letters = ["dele", "dolapo"];
id = 5;
//Tuple
let person = [3, "Dotun", true];
//Tuple array
let employee;
employee = [
    [5, "jill"],
    [15, "jonathan"],
];
//union
let stringOrNum;
stringOrNum = "23";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction["down"] = "down";
})(Direction || (Direction = {}));
const user = {
    id: 1,
    name: "adedotun",
};
//Type assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
