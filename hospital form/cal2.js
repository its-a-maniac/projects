function add(a, b) {
    var sum = a + b;
    return sum;
}

function subtract(a, b) {
    var diff = a - b;
    return diff;
}

function divide(a, b) {
    var div = a / b;
    return div;
}

function multiply(a, b) {
    var pro = a * b;
    return pro;
}

function expo(a,b){
    
}







function findResult(that, event) {
    event.preventDefault();
    var result = calculate(Number(that.a.value),
        Number(that.b.value), that.operator.value);
    //  document.getElementsByClassName('result-div')[0].style.visibility = "visible";
    document.getElementById('result').innerHTML = "Calculated result: "+result;
    document.getElementById('result').style.fontSize = "large";
}