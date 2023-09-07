const allItem = document.getElementsByClassName('allItem')[0];
const pencil = document.getElementById('pencil');
let userInput = document.getElementById("list-input");

pencil.addEventListener("click", function(){
    allItem.innerHTML = "";
});

userInput.addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        if (userInput.value === "") {
            alert("Enter somethin to submit");
        }else{
            addItem();
        }
    }
});

function addItem(){
    var h2 = document.createElement("h2");
    h2.textContent = "- " + userInput.value;
    allItem.appendChild(h2);
    userInput.value = "";
    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    });

}