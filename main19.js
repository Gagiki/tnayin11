// տնային 1

class flower {
    constructor(name) {
        this.name = name;


    }

}
class rose extends flower {
    constructor(name) {

        name = "rose";


    }
}

class clove extends flower {
    constructor(name) {

        name = "clove";


    }
}
class tulip extends flower {
    constructor(name) {
        super(flower);
        name = "tulip"

    }
}





let Flower = new flower("rose", "clove", "tulip");
console.log(Flower);
//
class Bouquetu {
    constructor(name) {
        this.name = name;

    }

    static compare(bouquetuA, bouquetuB) {
        return bouquetuA.name - bouquetuB.name;
    }
}


let Bouquetus = [
    new Bouquetu("rose", "clove"),
    new Bouquetu("tulip", "snowball"),
    new Bouquetu("violet", "tin"),
];

Bouquetus.sort(Bouquetu.compare);

alert(Bouquetus[0].name);
// 
class Bouquetu1 {
    constructor(name) {
        this.name = name;

    }

    static fill(bouquetuA, bouquetuB) {
        return bouquetuA.name - bouquetuB.name;
    }
}


let Bouquetus1 = [
    new Bouquetu1("rose", "clove"),
    new Bouquetu1("tulip", "snowball"),
    new Bouquetu1("violet", "tin"),
];

Bouquetus1.fill(Bouquetu1);

alert(Bouquetus1[1].name);
// տնային 2
class Vehicle {
    constructor(name, color) {
        this.name = name;
        this.color = color;



    }


}
class car extends Vehicle {
    constructor(name, color, type) {

        name = "bmw";
        color = "black";
        type = "car";


    }
}

class cart extends Vehicle {
    constructor(name, color, type) {

        name = "zil";
        color = "grey";
        type = "cart";


    }
}
class truck extends Vehicle {
    constructor(name, color) {
        super(Vehicle);
        name = "kamaz";
        color = "blue";
        type = "truck ";



    }
}





let vehicle = new Vehicle("bmw", "black", "zil", "grey", "kamaz", "blue");
console.log(vehicle.name);
console.log(vehicle.color);
console.log(vehicle.type);
// 
class Vehicle1 {
    constructor(name, color) {
        this._name = name;
        this._color = color;



    }
    get name() {
        return this._name;

    }
    get color() {
        return this._color;
    }
    set name(value) {
        return this._name = value;
    }
    set color(value) {
        return this._color = value;
    }


}
class car1 extends Vehicle1 {
    constructor(name, color) {

        name = "bmw";
        color = "black";


    }
    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }

}

class cart1 extends Vehicle1 {
    constructor(name, color) {

        name = "zil";
        color = "grey";


    }
    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }

}
class truck1 extends Vehicle1 {
    constructor(name, color) {
        super(Vehicle1);
        name = "kamaz"
        color = "blue"



    }
    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }

}





let vehicle1 = new Vehicle1("bmw", "black", "zil", "grey", "kamaz", "blue");
console.log(vehicle1.name);
console.log(vehicle1.color);
//
/*class Vehicle2 {
   constructor(){
        this.#name =car2; 
        this.#color = black;



   }

}
class car2 extends Vehicle2 {
  
constructor(){
    super();
        this.#name = "bmw";
        this.#color = "black";
        
}
 
    }



class cart2 extends Vehicle2 {

   constructor(){
        super()
        this.#name = "zil";
        this.#color = "grey";


   }  
}
class truck2 extends Vehicle2 {
    
 constructor(){
       this. #name = "kamaz"
       this. #color = "blue"
}
}




let vehicle2 = new Vehicle2("bmw", "black", "zil", "grey", "kamaz", "blue");
vehicle2.#name;
vehicle2.#color;*/








