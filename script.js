"use strict";
const input = document.querySelector("input");
const button = document.querySelector(".form-button");
const label = document.querySelector("label");

function ValidateEmail() {
    console.log(input.value);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat)) {
        label.textContent = "Valid email address!";
        label.style.color = "green";
        // document.form1.text1.focus();
        return true;
    } else {
        label.textContent = "You have entered an invalid email address!";
        // document.form1.text1.focus();
        return false;
    }
}

button.addEventListener("click", ValidateEmail);
