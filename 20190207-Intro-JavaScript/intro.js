
// commento la riga
/*
    commento multi linea
    commento un intero blocco
*/
var a = 12;
a = 'pippo';
a = 'aaaa' + 'bbb';
a = "pippo";
a = "l'albero";
a = 'l\'albero';

var b = true;
var c = null;

console.log(a);
console.log(b);
console.log(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// Array
var list1 = ["a", "b", "c"];
var list2 = [1, 2, 3, 4, 5];
var list3 = ["a", 2, true, [1,2, 3], 0];
var count = list3.length;

// aggiunta di elementi all'array
list3.push("ciao");
list3[10]= "item abc";

// recupero valori da un array
var item1 = list3[0];
console.log("Valori dell'array");
for(var i=0; i < list3.length; i++){
    console.log(list3[i]);
}


// operatori binari
console.log("===== operatori =====");
console.log(3 == "3");  // true
console.log(3 === "3"); // false
console.log(3 != "3");  // false
console.log(3 !== "3"); // true

// condizioni che ritornano false
//var obj1 = false;
//var obj1 = 0;
//var obj1 = null;
//var obj1 = undefined;
var obj1 = "";
if(obj1)
    console.log("true");
else 
    console.log("false");


// ===== funzioni ====
function add(num1, num2){
    // arguments permette di accedere a tutti gli argomenti 
    // della funzione, anche a quelli non dichiarati
    console.log(arguments);
    if(num2)
        return num1 + num2;
    
    return num1;
}

var reaultAdd = add(3, 5);
add(3, 5, 2); // il terzo valore viene passato ma non utilizzato
var result3 = add(3);       // num2 = undefined
console.log(result3);


var log = function(message){
    console.log(message);
}

log("ciao");

function execAdd(num1, num2, action){
    action(num1 + num2);
}

execAdd(2, 12, log);
execAdd(2, 12, function(result){
                    console.log(result);
                });


// ====== oggetti ====
var user1 = new Object();
user1.name = "Andrea";
user1.surname = "Dottor";
user1.getFullName = function(){
    return this.name + " " + this.surname;
};

var user2 = {
    name: "Andrea",
    surname: "Dottor"
};

function User(name, surname){
    this.name = name;
    this.surname = surname;
    this.getFullName = function(){
        return this.name + " " + this.surname;
    }
}
var user3 = new User("Andrea", "Dottor");
var user4 = new User("Luca", "Dottor");
console.log(user3.getFullName());
user3.city = "San Vendemiano";
