// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");

// increase.addEventListener("click", ()=>{
//     value = document.getElementById("count").value += 1;
//     document.getElementById("count").innerHTML = value; 
// });
let count = 0;
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;
}
function reset(){
    document.getElementById("count").innerHTML = 0;   
}