'use strict';
function printSymbol(e) {
let result = document.getElementById("result");
let obj = e.target;
let currentText = result.value;
let newText = obj.textContent;
const operators = ['+', '-', '*', '/', '.', ')'];
if ((currentText === '0' || currentText === '') && operators.includes(newText)) {
    return;
} else if (currentText === '0' && !operators.includes(newText)) {
    result.value = newText;
} else {
    result.value += newText;
}
}
    let result = document.getElementById("result");
    let clear = document.getElementById("clear");
    let equal = document.getElementById("equal");
    let symbols = document.getElementsByClassName("symbol") ;
    for(let i=0 ; i<symbols.length ; i++)
        symbols[i].addEventListener("click",printSymbol);
    clear.addEventListener("click", e => document.getElementById("result").value = 0);
    equal.addEventListener("click", e => result.value = eval(result.value ));