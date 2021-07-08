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
var Vehicles = /** @class */ (function () {
    function Vehicles(name, model, performance, image) {
        this.name = name;
        this.model = model;
        this.performance = performance;
        this.image = image;
    }
    Vehicles.prototype.printCard = function () {
        return "\n<div class=\"container\">\n<div class=\"row\" style=\"width: 18rem; \">\n<img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n<div class=\"card-body col\">\n  <h5 class=\"card-title \">" + this.name + "</h5>\n  <p class=\"card-text \">" + this.model + "</p>\n</div>\n<ul class=\"list-group list-group-flush\">\n  <li class=\"list-group-item\">" + this.performance + "</li>\n</ul>\n<div class=\"card-body\">\n<a href=\"#\" class=\"btn btn-primary\">Show Price</a>\n</div>\n</div> \n</div>\n";
    };
    return Vehicles;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(name, model, performance, kilometers, image) {
        var _this = _super.call(this, name, model, performance, image) || this;
        _this.kilometers = kilometers;
        return _this;
    }
    return Motorbike;
}(Vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name, model, performance, seats, fueltype, image) {
        var _this = _super.call(this, name, model, performance, image) || this;
        _this.seats = 4;
        _this.fueltype = fueltype;
        return _this;
    }
    return Truck;
}(Vehicles));
var car1 = new Vehicles("VW", "Golf", "120PS", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VW_Golf_VI_1.6_TDI_Comfortline_Reflexsilber.JPG/1024px-VW_Golf_VI_1.6_TDI_Comfortline_Reflexsilber.JPG");
var car2 = new Vehicles("Audi", "A6", "220PS", "https://www.autozeitung.de/assets/styles/article_image/public/field/image/audi-a6-2018-1.jpg?itok=Mn79gpQE");
var motor = new Motorbike("Yamaha", "YZF-R1M", "blabla", 170, "https://images-eu.ssl-images-amazon.com/images/I/61YZbpff7QL.__AC_SX300_SY300_QL70_ML2_.jpg");
var truck = new Truck("Volwo", " FL 280", "240PS", 5, "Electric", "https://www.autozeitung.de/assets/styles/article_image/public/field/image/audi-a6-2018-1.jpg?itok=Mn79gpQE");
var arr = [car1, car2, motor, truck];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    document.getElementById("demo").innerHTML += val.printCard();
}
