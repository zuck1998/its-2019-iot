var menu1 = $("#menu1");
//menu1.addClass("selected");

// recupero di tutti i tag li
//var list = $("li");

// recupero tutti i tag li contenuti in menu1
//var list = $("#menu1 li")
//var list = $("li", menu1);
//var list = menu1.find("li");

// recupero i figli li di menu1
//var list = $("#menu1 > li");
//var list = menu1.children("li");

// recuero dei fratelli li di item2
//var list = $("#item2").siblings("li");

// recupero dell'elemento successivo ad item2
//var list = $("#item2").next("li");

// recupero elemento precedente
var list = $("#item2").prev("li");

list.addClass("selected");

// modifica stili
//list.css("color", "red");
list.css({ 
        color: "red", 
        backgroundColor: "yellow",
        fontSize: "2em"
     });

//list.attr("data-corso-its", "iot");
//list.data("corso-its", "iot");

//list.text("Ciao da <strong>Pordenone</strong>");
list.html("Ciao da <strong>Pordenone</strong>");

// per leggere
//alert(list.html());
//alert(list.text());

// per leggere il valore da un input
var name = $("#txtContent").val();
//alert(name);

// per scrivere in un input
$("#txtContent").val("testo di esempio");

console.log(list.length);

for (let index = 0; index < 10; index++) {
    var x = $("<li>Pippo</li>");
    x.addClass("selected");
    //menu1.append(x);
    x.appendTo(menu1);
}    


$("#btnExec").on("click", function(){
    var txt = $("#txtContent").val();
    $("li").html(txt);
});

$("li").on("click", function(){
    var obj = $(this);
    //alert(obj.text());
    obj.hide(3000, function(){
        obj.show(1000);
    });
    //obj.slideUp(3000);
    //obj.fadeOut(3000);
    return false;
});


$(".key").on("click", function(){
    var obj = $(this);
    //alert(obj.data("num"));
    alert(obj.text());
})

