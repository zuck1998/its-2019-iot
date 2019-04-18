const urlMarvel = 'https://gateway.marvel.com:443/v1/public/characters?apikey=7e007f3e95bf794df2bdb4721ff2e296';
const urlMarvelCharacters = 'https://gateway.marvel.com:443/v1/public/characters';
const key = "7e007f3e95bf794df2bdb4721ff2e296";

var txt = $("#txtName");
var pnl = $("#pnlList");
var btn = $("#btnSearch");

// elementi del popup di dettaglio
var modal = $("#modalDetails");
var modalTitle = $("#lblTitle");
var modalPnlDetails = $("#pnlDetails");

btn.on("click", function () {
    var name = txt.val();
    pnl.empty();

    //var params = "&nameStartsWith=" + encodeURIComponent(name);

    var params = {
        apikey : key
    };
    if(name)
        params.nameStartsWith = name;

    $.ajax({
        url: urlMarvelCharacters,
        data: params,
        type: "GET"
    }).then(function (data) {
        var list = data.data.results;

        if (list.length == 0) {
            pnl.text("Nessun personaggio trovato.");
        } else {

            for (let i = 0; i < list.length; i++) {
                const p = list[i];

                var id = p.id;
                var name = p.name;
                var description = p.description;
                var photo = p.thumbnail.path + "." + p.thumbnail.extension;

                /*
    <div class="card">
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div class="col-md-4">
          <img src="..." class="card-img" alt="...">
        </div>
      </div>
    </div>
                */

                var card = $("<div class='card'></div>")
                var row = $("<div class='row no-gutters'></div>");
                var divImg = $("<div class='col-md-4'><img class='card-img' alt='immagine'></div>")
                var divText = $("<div class='col-md-8'></div>")
                var divCardBody = $("<div class='card-body'></div>")
                var divCardBodyTitle = $("<h5 class='card-title'></h5>")
                var divCardBodyText = $("<p class='card-text'></p>")
                var btnDetails = $("<button type='button' class='btn btn-primary'>Dettaglio</button>")

                divCardBodyTitle.text(name);
                divCardBodyText.text(description);
                
                btnDetails.attr("data-key", id);
                btnDetails.on("click", openDetails);

                $("img", divImg).attr("src", photo);
                $("img", divImg).attr("alt", "Immagine di " + name);

                card.append(row);
                if (i % 2 == 0) {
                    row.append(divImg);
                    row.append(divText);
                } else {
                    row.append(divText);
                    row.append(divImg);
                }

                divText.append(divCardBody);
                divCardBody.append(divCardBodyTitle);
                divCardBody.append(divCardBodyText);
                divCardBody.append(btnDetails);
                pnl.append(card);
            }
        }

    }, function (jqXHR, errorTextStatus, error) {
        console.log(errorTextStatus);
        console.log(error);
        pnl.text("Errore nel recupero dei dati.");
    })

});


function openDetails(){
    var btn = $(this);
    //var id = btn.attr("data-key");
    var id = btn.data("key");

    modalTitle.text("");
    modalPnlDetails.empty();

    $.ajax({
        url: urlMarvelCharacters + "/" + id,
        data: {
            apikey: key
        },
        type: "GET"
    }).then(function (data) {
        var list = data.data.results;

        if (list.length == 0) {
            modalPnlDetails.text("Dettaglio non trovato.");
        } else {
            const p = list[0];

            var id = p.id;
            var name = p.name;
            var description = p.description;
            var photo = p.thumbnail.path + "." + p.thumbnail.extension;

            var pText = $("<p></p>")
            pText.text(description);

            modalTitle.text(name);
            modalPnlDetails.append(pText);

            // visualizzo i link
            for (let i = 0; i < p.urls.length; i++) {
                const urlItem = p.urls[i];

                var aLink = $("<a class='btn btn-light' target='_blank'></a>");
                aLink.attr("href", urlItem.url);
                aLink.text(urlItem.type);

                modalPnlDetails.append(aLink);
            }

        }
        // visualizzo il popup modale
        modal.modal('show');
    }, function (jqXHR, errorTextStatus, error) {
        console.log(errorTextStatus);
        console.log(error);
        modalPnlDetails.text("Errore nel recupero dei dati.");
        // visualizzo il popup modale
        modal.modal('show');
    })


}