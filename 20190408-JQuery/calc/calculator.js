
//var display = document.getElementById("txtDisplay");
var display = document.querySelector("#txtDisplay");
var prevNum;
var currentOp;

var keyList = document.querySelector(".key");


function exec(){
    var currentNum = parseInt(display.value);
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
    display.value = result;
}

function pressNum(num){
    display.value += num;
}

function pressOp(op){
    currentOp = op;
    prevNum = parseInt(display.value);
    display.value = "";
}
