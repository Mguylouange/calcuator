
const display = document.getElementById("display");


function appendToDisplay(input){
    return display.value += input;
}
function clearKey(){
    return display.value = "";
}
function calculate(){
    try{
        return display.value = eval(display.value);
    }
    catch(error){
        return display.value = "error, please do valid things";
    }
}
