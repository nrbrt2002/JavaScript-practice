const empty = "";
const Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lcase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+?></.,";


const password = document.getElementById("password");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

generate.addEventListener("click", ()=>{
    let initialPassword = empty;
    (uppercase.checked) ? initialPassword += Ucase : "";
    (lowercase.checked) ? initialPassword += Lcase: "";
    (number.checked) ? initialPassword += numbers: "";
    (symbol.checked) ? initialPassword += symbols: "";

    password.value = generetePassword(initialPassword, length.value);
    copy.disabled = false;

    copy.addEventListener("click", () => {
        password.select();
        document.execCommand("copy");
        alert("Copied to clipboard");
    });
});


function generetePassword(initialPassword, Leng){
    let pass = "";
    for (let index = 0; index < Leng; index++) {
        pass += initialPassword.charAt(Math.floor(Math.random()*initialPassword.length)); 
    }
    return pass;
}
