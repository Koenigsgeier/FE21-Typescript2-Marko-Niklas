

class Vehicles{
    name:string;
    model:string;
    performance:string;
    // kilometers:number;
    // seats:number;
    // fueltype:string;
    // yearofp:number;
    // printCard: Function;
    image:string;
constructor( name:string, model:string,  performance:string,  image:string)//  kilometers:number,  seats:number, fueltype:string, yearofp:number, ) 
{
    this.name = name;
    this.model = model;
    this.performance = performance;
    this.image = image;

}

printCard (){
return`
<div class="container">
<div class="row" style="width: 18rem; ">
<img class="card-img-top" src="${this.image}" alt="Card image cap">
<div class="card-body col">
  <h5 class="card-title ">${this.name}</h5>
  <p class="card-text ">${this.model}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${this.performance}</li>
</ul>
<div class="card-body">
<a href="#" class="btn btn-primary">Show Price</a>
</div>
</div> 
</div>
`
}
}

class Motorbike extends Vehicles {
    kilometers:number;
    constructor( name:string,model:string, performance:string, kilometers:number,image:string ) {
        super(name,model,performance, image)
        this.kilometers = kilometers;

    }
}


class Truck extends Vehicles {
    seats:number;
    fueltype:string;
    constructor( name:string, model:string,  performance:string,  seats:number, fueltype:string,image:string ) {
        super(name,model,performance,image)
        this.seats=4;
        this.fueltype = fueltype;
    }

}

var car1 = new Vehicles("VW","Golf","120PS", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VW_Golf_VI_1.6_TDI_Comfortline_Reflexsilber.JPG/1024px-VW_Golf_VI_1.6_TDI_Comfortline_Reflexsilber.JPG" )
var car2 = new Vehicles("Audi","A6","220PS", "https://www.autozeitung.de/assets/styles/article_image/public/field/image/audi-a6-2018-1.jpg?itok=Mn79gpQE" )
var motor = new Motorbike( "Yamaha","YZF-R1M","blabla", 170,"https://images-eu.ssl-images-amazon.com/images/I/61YZbpff7QL.__AC_SX300_SY300_QL70_ML2_.jpg" )
var truck = new Truck("Volwo"," FL 280","240PS", 5, "Electric" , "https://www.autozeitung.de/assets/styles/article_image/public/field/image/audi-a6-2018-1.jpg?itok=Mn79gpQE" )

var arr:Array<Vehicles>=[car1,car2,motor,truck]

for (let val of arr) {
    (document.getElementById("demo") as HTMLElement).innerHTML += val.printCard();
  }
