const urlMarvel = 'https://gateway.marvel.com:443/v1/public/characters?apikey=7e007f3e95bf794df2bdb4721ff2e296';
const urlMarvelCharacters = 'https://gateway.marvel.com:443/v1/public/characters';
const key = "7e007f3e95bf794df2bdb4721ff2e296";

var txt = $("#txtName");
var pnl = $("#pnlList");
var btn = $("#btnSearch");

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

                divCardBodyTitle.text(name);
                divCardBodyText.text(description);
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
                pnl.append(card);
            }
        }

    }, function (jqXHR, errorTextStatus, error) {
        console.log(errorTextStatus);
        console.log(error);
        pnl.text("Errore nel recupero dei dati.");
    })

});