var input = document.getElementById("input");
var form = document.getElementById("form");
var button = document.getElementById("button");
var toDoItems = document.querySelector(".to-do-items");

var AllItems = JSON.parse(localStorage.getItem("ToDo"))|| [];


function addItem(theinput, status){
    AllItems.push({object: theinput, status: status});
    localStorage.setItem("ToDo", JSON.stringify(AllItems),);

    return {theinput}
}


function AllItemsF(){
    AllItems.forEach(item => {
        var parentDiv = document.createElement("div");
        var childDiv = document.createElement("div");
        var checkIcon = document.createElement("i");
        var trashIcon = document.createElement("i");

        parentDiv.className = 'item';
        parentDiv.innerHTML = '<div>'+item.object+'</div>';

        checkIcon.className = 'fas fa-check-square';
        checkIcon.style.color = "lightgray";
        checkIcon.addEventListener('click', function(){
            checkIcon.style.color = "limegreen"; 
        });

        trashIcon.className = 'fas fa-trash';
        trashIcon.style.marginLeft = '10px';
        trashIcon.style.color = "brown";
        trashIcon.addEventListener('click', function(){
            localStorage.removeItem(this);
            parentDiv.remove();
        });

        childDiv.append(checkIcon, trashIcon);
        parentDiv.appendChild(childDiv);
        toDoItems.appendChild(parentDiv);

    });
}

function callOtherF(){
    addItem(input.value, "NYC");
    input.value = '';
    refreshPage();
}
AllItemsF();

function refreshPage() {
    location.reload();
}