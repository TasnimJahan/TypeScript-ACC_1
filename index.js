"use strict";
var myName = "Tasnim";
var age;
age = 22;
var isHungry = false;
// myName =12;
var studentId = 32323;
studentId = 18701051;
studentId = 'cse-18701051';
var stdId = 435345;
stdId = 'sfdsfdf';
var person = {
    name: "Tasnim",
    age: 23,
    hobby: "reading"
};
var person2 = {
    name: "Tasnim",
    age: 23,
    hobby: "reading"
};
var person3 = {
    name: "Ria",
    age: 27,
    hobby: "writing"
};
var person4 = {
    name: "Tasnim jahan",
    age: 53,
    hobby: "reading"
};
var person5 = {
    name: "Tasnim jahan",
    age: 53,
    hobby: "reading"
};
var person6 = {
    name: "Tasnim jahan",
    age: 53
};
var persons = [
    {
        name: "Tasnim jahan",
        age: 53,
        hobby: "reading"
    }
];
var array1 = ["ads", 34, 35454, "aswaew"];
var greetings = function (name) {
    console.log("Hello " + name);
};
var add = function (a, b) {
    return a + b;
};
var getArray = function (arr) {
    return arr;
};
getArray(['tasnkm', 'sjfhsdjkf']);
getArray([545, 32, 4343]);
//enum
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sat"] = 0] = "Sat";
    Weekday[Weekday["Sun"] = 1] = "Sun";
    Weekday[Weekday["Mon"] = 2] = "Mon";
    Weekday[Weekday["Tue"] = 3] = "Tue";
    Weekday[Weekday["Wed"] = 4] = "Wed";
    Weekday["Thurs"] = "Thursday";
    Weekday["Fri"] = "Friday";
})(Weekday || (Weekday = {}));
console.log(Weekday);
console.log(Weekday.Thurs);
// Output:
// {
//     '0': 'Sat',
//     '1': 'Sun',
//     '2': 'Mon',
//     '3': 'Tue',
//     '4': 'Wed',
//     '5': 'Thurs',
//     '6': 'Fri',
//     Sat: 0,
//     Sun: 1,
//     Mon: 2,
//     Tue: 3,
//     Wed: 4,
//     Thurs: 5,
//     Fri: 6
//   }
