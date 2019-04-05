
function add(num1, num2){
    return num1 + num2;
}

//document.write("<p>pippo</p>");


// modifica DOM pagina

var p = document.getElementById("panel1");
p.innerHTML = "Andrea";

function edit(){
    var p2 = document.getElementById("panel2");
    var txt = document.getElementById("txt");

    p2.innerHTML = txt.value;
}

function show(prefix){
    var p2 = document.getElementById("panel2");
    alert(prefix + " " + p2.innerHTML);
}


