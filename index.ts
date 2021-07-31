let myName:string ="Tasnim";
let age:number;
age=22;
let isHungry: boolean = false; 
// myName =12;
let studentId: number | string =32323;
studentId = 18701051;
studentId = 'cse-18701051';


// mew type banano custom
type stringNumber = number | string;

let stdId: stringNumber = 435345;
stdId = 'sfdsfdf'

let person:object ={
    name : "Tasnim",
    age: 23,
    hobby: "reading"
}

let person2:{name:string, age:number, hobby:string} ={
    name : "Tasnim",
    age: 23,
    hobby: "reading"
}

type personType = {name:string, age:number, hobby:string};

interface Person {  
                    name:string;
                    age:number;
                    hobby?:string;
                }


let person3:personType ={
    name : "Ria",
    age: 27,
    hobby: "writing"
}


let person4:personType ={
    name : "Tasnim jahan",
    age: 53,
    hobby: "reading"
}

let person5:Person ={
    name : "Tasnim jahan",
    age: 53,
    hobby: "reading"
}

let person6:Person ={
    name : "Tasnim jahan",
    age: 53
}

const persons:Person[]=[
    {
        name : "Tasnim jahan",
        age: 53,
        hobby: "reading"
    }
    
]
const array1:(string|number)[] = ["ads",34,35454,"aswaew"]

const greetings =(name:string):void => {
    console.log(`Hello ${name}`);
}

const add = (a:number, b:number):number =>{
    return a + b;
}



const getArray = <T>(arr: T[]):T[] =>{
    return arr;
}

getArray<string>(['tasnkm','sjfhsdjkf'])
getArray<number>([545,32,4343])

//enum

enum Weekday {
    Sat,
    Sun,
    Mon,
    Tue,
    Wed,
    Thurs= "Thursday",
    Fri= "Friday"
}
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