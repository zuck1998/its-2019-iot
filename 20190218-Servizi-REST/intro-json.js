
var user = {
    name: "Andrea",
    surname: "Dottor",
    today: new Date()
};

var list = ['a', 'b', 'c'];

// serializzare in json
console.log(JSON.stringify(user));
console.log(JSON.stringify(list));

// deserializzare da json
var obj = JSON.parse('{"id":123,"code":"codiceABC","price":12.3}');
console.log(obj.code);