const form = document.querySelector(".content__form");
const input = document.querySelector(".content__input");
const error = document.querySelector(".content__error");

console.log(input);

const checkInput = function (input) {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  return reg.test(input);
};

const errorMessage = function (e, message) {
  e.preventDefault();
  error.innerHTML = message;
  input.style.outline = "1px solid hsl(354, 100%, 66%)";
};

form.addEventListener("submit", (e) => {
  if (input.value === "") {
    errorMessage(e, "Whoops! It looks like you forgot to add your email");
  } else if (input.value == null || !checkInput(input.value)) {
    errorMessage(e, "Please provide a valid email address");
  }
});
