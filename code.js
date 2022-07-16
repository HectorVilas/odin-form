const
  main = document.querySelector(".main"),
  loginSignUp = document.querySelector(".login-signup"),
  backgroundLogin = document.querySelector(".bg-login"),
  backgroundSignUp = document.querySelector(".bg-signup"),
  btnLogin = document.querySelector(".login"),
  btnSignUp = document.querySelector(".signup");


btnLogin.addEventListener("click", () => {
  loginSignUp.style.right = "0";
  btnLogin.style.display = "none"
  btnSignUp.style.display = "none"
  backgroundLogin.classList.remove("hide-side");
  backgroundSignUp.classList.add("hide-side");
  console.log("test");
});

btnSignUp.addEventListener("click", () => {
  loginSignUp.style.left = "0";
  btnLogin.style.display = "none"
  btnSignUp.style.display = "none"
  backgroundLogin.classList.add("hide-side");
  backgroundSignUp.classList.remove("hide-side");
  console.log("test");
});