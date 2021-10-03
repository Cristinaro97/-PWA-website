const style = require("./style.css");

/*Access to screen*/
const viewSignUp = document.querySelector(".signUp");
const viewSignIn = document.querySelector(".signIn");
const vieWebNotes = document.querySelector(".webNotes");

/* Btns input valur*/
const getName = document.getElementById("fname");
const getPassword = document.getElementById("lpassword");

/*Btns form*/
const getUserData = document.getElementById("getUserData");
const submitUserData = document.getElementById("submitUserData");

const btnSignUp = document.querySelectorAll(".btnViewLogin");
const btnSignIn = document.querySelectorAll(".btnViewnSignUp");

viewSignIn.style.display = "none";
vieWebNotes.style.display = "none";

for (let i = 0; i < btnSignUp.length; i++) {
  let element = btnSignUp[i];
  element.addEventListener("click", function (e) {
    e.preventDefault();
    viewSignIn.style.display = "block";
    viewSignUp.style.display = "none";
    vieWebNotes.style.display = "none";
  });
}

for (let i = 0; i < btnSignIn.length; i++) {
  let element = btnSignIn[i];
  element.addEventListener("click", function (e) {
    e.preventDefault();
    viewSignIn.style.display = "none";
    viewSignUp.style.display = "none";
    vieWebNotes.style.display = "block";
  });
}

getUserData.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.setItem("name", getName.value);
});