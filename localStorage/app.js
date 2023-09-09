var form = document.getElementById('studentForm');
var thename = document.getElementById('thename');
var age = document.getElementById('age');
var roll = document.getElementById('roll');
var Allstudents = document.getElementsByClassName('students')[0];

var students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(thename, age, roll){

    students.push({thename, age, roll});
    localStorage.setItem("students", JSON.stringify(students));

    return {thename, age, roll}
    // Missing return name, age, roll
}

function createStudentElement({thename, age, roll}){
   var allStudent = document.querySelector(".all-students");
   var tr = document.createElement('tr');
   var id = document.createElement('td')
   var nametd = document.createElement('td');
   var agetd = document.createElement('td');
   var rolltd = document.createElement('td');

   id.innerHTML = 0;
   nametd.innerHTML = thename;
   agetd.innerHTML = age;
   rolltd.innerHTML = roll;

   tr.append(id, nametd, agetd, rolltd);
   allStudent.appendChild(tr);
};

students.forEach(createStudentElement);


form.onsubmit = e =>{
    e.preventDefault();

    var newStudent = addStudent(thename.value, age.value, roll.value);
    createStudentElement(newStudent);
};