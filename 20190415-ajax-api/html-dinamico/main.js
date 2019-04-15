var txt = $("#txtInput");
var btn = $("#btnInsert");
var pnl = $("#pnlOutput");
var counter = $("#lblCounter");

const maxLength = 160;

txt.on("keyup", function () {
    var text = txt.val();

    // verifica lunghezza massimo
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        txt.val(text);
    }

    // aggiornamento del counter
    counter.text(maxLength - text.length);
});

btn.on("click", function () {
    /*
    <div class="card">
        <div class="card-body">
            <p class="card-text">Testo di prova</p>
            <button type="button" class="btn btn-danger">Elimina</button>
        </div>
    </div>
    */

    var card = $("<div class='card'></div>");
    var cardBody = $("<div class='card-body'></div>");
    var cardText = $("<p class='card-text'></p>");
    var btnDel = $("<button type='button' class='btn btn-danger btnDel'>Elimina</button>");

    cardText.text(txt.val());

    card.append(cardBody);
    cardBody.append(cardText);
    cardBody.append(btnDel);

    pnl.append(card);

    txt.val("");
    counter.text(maxLength);

    btnDel.on("click", function(){
        if(confirm("Sicuro di volerlo cancellare?")){
            card.remove();
        }
    });

    /*var buttons = $(".btnDel");
    buttons.off("click");
    buttons.on("click", function(){
        if(confirm("Sicuro di volerlo cancellare?")){
            $(this).closest(".card").remove();
        }
    });*/
});

