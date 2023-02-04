"use-strict";

const input = document.querySelector("input");
const button = document.querySelector("button");
const emailSpan = document.querySelector(".email-span");
const iconError = document.querySelector(".icon-error");

const checkEmailValidInput = (e) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.value.match(mailFormat)) {
    input.focus();
    return true;
  } else {
    e.preventDefault();
    emailSpan.classList.add("email-span-error");
    iconError.style.display = "block";
    input.style.border = " 2px solid hsl(0, 93%, 68%) ";
    input.focus();

    return false;
  }
};

button.addEventListener("click", checkEmailValidInput);
