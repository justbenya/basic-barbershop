var link = document.querySelector(".main-navigation__login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal__close");
var form =  document.querySelector(".modal__login-form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal--show");
  login.focus();
  if (storage) {
    login.value = storage;
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal--show");
  popup.classList.remove("modal--error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal--error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      popup.classList.remove("modal--error");
    }
  }
});
