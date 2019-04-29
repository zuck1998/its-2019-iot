var urlApi = "http://localhost:3000/api/products";

$("#btnSend").on("click", function(){

    var product = {
        name: "Prodotto nuovo",
        code: "ITS123"
    };

    $.ajax({
        url: urlApi,
        method: "POST",
        data: JSON.stringify(product),
        contentType: "application/json"
    }).then(function(data){
      alert("Prodotto inserito!")
    }, function(){
        alert("error");
    });



  /*
    $.ajax({
        url: urlApi,
        method: "GET"
    }).then(function(data){
        alert(JSON.stringify(data));
    }, function(){
        alert("error");
    });
*/
});
