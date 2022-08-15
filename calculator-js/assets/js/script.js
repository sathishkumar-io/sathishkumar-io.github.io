let results = document.getElementById('result');
let inputs = "";

function sum(x) {
    inputs += x;
    results.value = inputs;
}

function result() {
    results.value = eval(inputs);
}

function reset() {
    inputs = "";
    results.value = inputs;
}