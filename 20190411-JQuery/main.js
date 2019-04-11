
$(document).ready(function () {

});


$(function () {
    var pnl = $("#pnlOutput");

    $("#btn").on("click", function () {
        // v1
        //var html = "<div>ciao<br><button class='btnDel'>delete</button></div>"
        //pnl.append(html);

        //v2
        var div = $("<div class='pnl-border'></div>");
        div.text("ciao");
        div.append("<button class='btnDel'>Elimina</button>");
        pnl.append(div);

        var buttons = $(".btnDel");
        buttons.off("click");
        buttons.on("click", function () {
            if (confirm("Sicuro di cancellare?")) {
                var btn = $(this);
                var div = btn.parent(".pnl-border");
                div.remove();
            }
        });

    });


});