///////////////////////////////////BASIC 1

interface Human {
    name: string;
    age: number;
    jobTitle: string;
    printName: Function;
}
  

class Person implements Human {

    constructor(public name: string, public age: number, public jobTitle: string){}
    printName() {
        return `Hello there, My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle}`
    }
}

////////////////////////////////////BASIC 2
class Info extends Person {
    constructor(public name: string, public age: number, public jobTitle: string, public salary: number, public joblocation: string) {
        super(name, age, jobTitle);
    }
    printName() {
        return `Hello there, My name is ${this.name} and i am ${this.age} years old, and i am a ${this.jobTitle} and i get ${this.salary} every month and i work in ${this.joblocation} <br>`
    }
}

let John = new Info("John",30,"developer",2000,"Vienna" );
let John2 = new Info("Alex",35,"IT",2500,"New York");
let arr:Array<Human>=[John,John2]

for (let val of arr) {
    (document.getElementById("demo") as HTMLElement).innerHTML += val.printName();
   
  }