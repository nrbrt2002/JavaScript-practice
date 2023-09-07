const userInput = document.getElementById("userInput");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = '';
}

function erase(){
    userInput.value = '';
    expression = '';

}

document.addEventListener('keydown', function(event){
    if(event.key == 'Enter')
        equal();
});