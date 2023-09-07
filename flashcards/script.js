let contentArray =  JSON.parse(localStorage.getItem('MyArrayData'));
const question = document.getElementById("question");
const answer = document.getElementById("answer");

function showCreateCardBox(){
    let createBox = document.getElementsByClassName("create-box")[0];
        createBox.style.display = '';
}

function hideCreateBox(){
    let createBox = document.getElementsByClassName("create-box")[0];
        createBox.style.display = 'none';
}
document.addEventListener("keydown", (event)=>{
    if(event.key == 'Enter'){
        addFlashcard();
    }
});
document.addEventListener("keydown", (e)=>{
    if(e.key == 'Escape')
        hideCreateBox();
});

function addFlashcard(){

    let flashCard_info = {
        'Q': question.value,
        'A': answer.value
    }

    contentArray.push(flashCard_info);
    localStorage.setItem('MyArrayData', JSON.stringify(contentArray));

    divMaker(contentArray[contentArray.length - 1]);

    question.value = '';
    answer.value = '';

}
// console.log(JSON.parse(localStorage.getItem('MyArrayData')));
function divMaker(text){

    let flashcard = document.createElement("div");
    let CardHeaderDiv = document.createElement('div');
    let CardBodyDiv = document.createElement('div');

    flashcard.classList.add("card", "col-md-2");
    flashcard.setAttribute('style', 'margin-right: 5px; margin-top: 10px; margin-right:5px; padding-right: 0;padding-left: 0');
} 