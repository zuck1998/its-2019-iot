
var display = $("#txtDisplay");
var prevNum;
var currentOp;

var pressNum = function (){
    var num = $(this).text();
    display.val(display.val() + num)
}

$(".key-num").on("click", pressNum);

$(".key-op").on("click", function(){
    currentOp = $(this).text();
    prevNum = parseInt(display.val());
    display.val("");
});

$(".key-exec").on("click", function(){
    var currentNum = parseInt(display.val());
    var result;

    switch (currentOp) {
        case "+":
            result = prevNum + currentNum;
            break;
        case "-":
            result = prevNum - currentNum;
            break;
        case "*":
            result = prevNum * currentNum;
            break;
        case "/":
            result = prevNum / currentNum;
            break;
    }
    display.val(result);
});





