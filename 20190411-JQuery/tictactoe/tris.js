var lblPlayer = $("#player");

var player1Class = "p1";
var player2Class = "p2";

var turn = true;
var currentPlayer = player1Class;

$(".pnl").on("click", function () {
    var obj = $(this);

    obj.addClass(currentPlayer)

    // verifico se ho vinto
    if (checkWin()) {
        alert("Hai vinto!");
    } else {
        // cambio giocatore
        changePlayer();
    }

});

function checkWin() {
    if (checkConbo(currentPlayer, "a1", "b1", "c1"))
        return true;
    if (checkConbo(currentPlayer, "a2", "b2", "c2"))
        return true;
    if (checkConbo(currentPlayer, "a3", "b3", "c3"))
        return true;
    if (checkConbo(currentPlayer, "a1", "a2", "a3"))
        return true;
    if (checkConbo(currentPlayer, "b1", "b2", "b3"))
        return true;
    if (checkConbo(currentPlayer, "c1", "c2", "c3"))
        return true;
    if (checkConbo(currentPlayer, "a1", "b2", "c3"))
        return true;
    if (checkConbo(currentPlayer, "a3", "b2", "c1"))
        return true;

    return false;
}

function checkConbo(cssName, cell1, cell2, cell3) {
    return $("#" + cell1).hasClass(cssName) &&
            $("#" + cell2).hasClass(cssName) &&
            $("#" + cell3).hasClass(cssName);
}

function changePlayer() {
    turn = !turn;
    if (turn) {
        currentPlayer = player1Class;
        lblPlayer.text("1");
        lblPlayer.removeClass(player2Class);
        lblPlayer.addClass(player1Class);
    }
    else {
        currentPlayer = player2Class;
        lblPlayer.text("2");
        lblPlayer.removeClass(player1Class);
        lblPlayer.addClass(player2Class);
    }
}