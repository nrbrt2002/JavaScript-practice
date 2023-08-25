let content = document.getElementById("message");

content.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        passTheMessage();
    }
});
function passTheMessage(){
    document.getElementById("print-message").innerHTML = content.value;
    content.value = "";
}