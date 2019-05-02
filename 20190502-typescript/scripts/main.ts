var a = 12;
var b: string = "pippo";
var c: number;

var list: number[] = [1, 2, 3];

function dummy(): any{
    return 123;
}

//var r = dummy() as number;
var r = <number>dummy();

// classi

class User{

    constructor(
        private name: string, 
        private surname: string){
    }

    getFullName(): string{
        return this.name + " " + this.surname;
    }
}
var u1 = new User("Andrea", "Dottor");


class Student extends User{
    constructor(
            name: string,
            surname: string,
            public school: string){
                super(name, surname);
            }
}

var s1 = new Student("Andrea", "Dottor", "ITS");
var s1name = s1.getFullName();
var s2: User = new Student("Pippo", "pluto", "ITS");

class ITSSTudent extends Student{
    constructor(
        name: string,
        surname: string
    ){
        super(name, surname, "ITS");
    }
}
var its1 = new ITSSTudent("Andrea", "Dottor");
var studentList: User[] = [u1, s1, s2, its1];

// interface

interface ICartItem{
    price: number;
    qta: number;
}

class GenericProduct implements ICartItem{
    constructor(
        public name: string,
        public price: number,
        public qta: number
    ){
    }
}

var cartItems: ICartItem[] = [];
function addToCart(item: ICartItem){
    cartItems.push(item);
}

addToCart(new GenericProduct("Bici", 1000, 1));

