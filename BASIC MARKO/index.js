var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printName = function () {
        return "Hello there, My name is " + this.name + " and i am " + this.age + " years old, and i am a " + this.jobTitle;
    };
    return Person;
}());
////////////////////////////////////BASIC 2
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info(name, age, jobTitle, salary, joblocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.name = name;
        _this.age = age;
        _this.jobTitle = jobTitle;
        _this.salary = salary;
        _this.joblocation = joblocation;
        return _this;
    }
    Info.prototype.printName = function () {
        return "Hello there, My name is " + this.name + " and i am " + this.age + " years old, and i am a " + this.jobTitle + " and i get " + this.salary + " every month and i work in " + this.joblocation + " <br>";
    };
    return Info;
}(Person));
var John = new Info("John", 30, "developer", 2000, "Vienna");
var John2 = new Info("Alex", 35, "IT", 2500, "New York");
var arr = [John, John2];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("demo").innerHTML += val.printName();
}
