const tableData = document.querySelector(".data_table");

var AllData = JSON.parse(localStorage.getItem('object')) || [];

AllData.forEach(allRecords);

function save(){
   var names = document.getElementById('names').value;
   var email = document.getElementById('email').value;
   
   var newData = ({names: names, email: email});
   AllData.push(newData);
   localStorage.setItem("object", JSON.stringify(AllData));
   allRecords({names, email});
   names = '';
   email = '';
   return {names, email};

}

function allRecords({names, email}){
   let i = 0;
   i += 1;
      var tr = document.createElement('tr');
      var forId = document.createElement('td');
      var forname = document.createElement('td');
      var foremail = document.createElement('td');

      forId.innerHTML = i;
      forname.innerHTML = names;
      foremail.innerHTML = email;
      tr.append(forId, forname, foremail);
      tableData.appendChild(tr);
   // setTimeout(allRecords, 2000);

}

//Show Form function hoping to use it on update form also
function showForm(){
   const AddForm = document.getElementById("AddForm");
   const showForm = document.querySelector("#show-form");

   AddForm.style.display= '';
   showForm.style.display = 'none';
}
function refreshPage(){
   location.reload();
}