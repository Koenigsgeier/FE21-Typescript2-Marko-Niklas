"use strict";
///////////////////////////////////BASIC 1
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printName() {
        return `Hello there, My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle}`;
    }
}
////////////////////////////////////BASIC 2
class Info extends Person {
    constructor(name, age, jobTitle, salary, joblocation) {
        super(name, age, jobTitle);
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.joblocation = joblocation;
    }
    printName() {
        return `Hello there, My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle} and i get ${this.salary} every month and i work in ${this.joblocation} <br>`;
    }
}
let John = new Info("John", 30, "developer", 2000, "Vienna");
let John2 = new Info("Alex", 35, "IT", 2500, "New York");
let arr = [John, John2];
for (let val of arr) {
    document.getElementById("demo").innerHTML += val.printName();
    document.getElementById("demo").innerHTML += val.printName();
}
