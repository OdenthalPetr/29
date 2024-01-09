
function appendToDisplay(value){
    document.getElementById('output').value += value;
}
function calculateResult(){
    var input = document.getElementById('output').value;
    document.getElementById('output').value = eval(input)
}
function clearField(){
    document.getElementById('output').value = '';
}