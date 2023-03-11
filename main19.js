// տնային 1

class flower {
    constructor(name,color) {
        this.name = name;
        this.color = color;


    }

}
class rose extends flower {
    constructor(name,color) {
 super(name,color);
        name = "rose";
    color = "red";


    }
}

class clove extends flower {
    constructor(name,color) {
        super(name,color);
        name = "clove";
        color = "white"



    }
}
class tulip extends flower {
    constructor(name,color) {
        super(name,color);
        name = "tulip";
        color ="yelow"

    }
}





let Flower = new flower("rose","red", "clove","white","yelow", "tulip");
console.log(Flower.name);
console.log(Flower.color)
//
class Bouquetu {
    constructor(bouquetuA, bouquetuB) {
        this.bouquetuA =bouquetuA;
        this.bouquetuB =bouquetuB;
    }

    static sum(bouquetuA, bouquetuB) {
        return this.bouquetuA + this.bouquetuB;
    }
}


let Bouquetus = [new Bouquetu("rose", "clove",10)];
let Bouquetus1 = [new Bouquetu("rose", "clove",10)];
let Bouquetus2 = [new Bouquetu("rose", "clove",10)];



console.log(Bouquetus.bouquetuA);
console.log(Bouquetus.bouquetuB);

// 

// տնային 2
class Vehicle {
    
    constructor(name, color,door,speed) {
        this.name = name;
        this.color = color;
        this.door = door;
        this.speed = speed;



    }


}

class car extends Vehicle {
    constructor(name, color, door,speed) {

        name = "bmw";
        color = "black";
        door = "4";
        speed = "100"


    }
}

class cart extends Vehicle {
    constructor(name, color, door,speed) {

        name = "zil";
        color = "grey";
        door = "2";
        speed= "50"

    }
}
class truck extends Vehicle {
    constructor(name, color,door,speed) {
        
        name = "kamaz";
        color = "blue";
        door = "2 ";
        speed ="60"



    }
}





let vehicle = new Vehicle("bmw", "black","4","120" ,"zil","2","50", "grey", "kamaz","2","60", "blue");
console.log(vehicle.name);
console.log(vehicle.color);
console.log(vehicle.door);
console.log(vehicle.speed);

// 
class Vehicle1 {
    constructor(name, color,door,speed) {
        this._name = name;
        this._color = color;
        this._door = door;
        this._speed = speed;



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
//tnayin4
String.prototype.toUpperCase =function(){
    console.log(this);
};
"Text Nailing (TN) is an information extraction method of semi-automatically extracting structured information from unstructured documents. The method allows a human to interactively review small blobs of text out of a large collection of documents, to identify potentially informative expressions. The identified expressions can be used then to enhance computational methods that rely on text (e.g., Regular expression) as well as advanced natural language processing (NLP) techniques. TN combines two concepts: 1) human-interaction with narrative text to identify highly prevalent non-negated expressions, and 2) conversion of all expressions and notes into non-negated alphabetical-only representations to create homogeneous representations. [1][2]"

"In traditional machine learning approaches for text classification, a human expert is required to label phrases or entire notes, and then a supervised learning algorithm attempts to generalize the associations and apply them to new data. In contrast, using non-negated distinct expressions eliminates the need for an additional computational method to achieve generalizability.[3][4][5]".toUpperCase();



