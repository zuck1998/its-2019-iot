var pnl = $("#pnlOutput");

$("#btnGo").on("click", function(){
    pnl.empty();

    $.ajax({
        url: "https://swapi.co/api/people/",
        method: "GET"
    }).then(function(obj){
        //alert(obj.count);

        for (let i = 0; i < obj.results.length; i++) {
            const person = obj.results[i];
            var div = $("<div class='person'></div>");
            div.text(person.name);
            pnl.append(div);
        }

    }, function(jqXHR, errorStatus, error){
        pnl.append("<p>Errrore nel recupero dati</p>");
    });



});