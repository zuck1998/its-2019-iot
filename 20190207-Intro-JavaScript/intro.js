
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
