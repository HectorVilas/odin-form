const
  main = document.querySelector(".main"),
  loginSignUp = document.querySelector(".login-signup"),
  backgroundLogin = document.querySelector(".bg-login"),
  backgroundSignUp = document.querySelector(".bg-signup"),
  btnsDiv = document.querySelector(".buttons"),
  btnLogin = document.querySelector(".login"),
  btnSignUp = document.querySelector(".signup");

btnLogin.addEventListener("click", moveMenu);
btnSignUp.addEventListener("click", moveMenu);

function moveMenu(){
  btnLogin.removeEventListener("click", moveMenu);
  btnSignUp.removeEventListener("click", moveMenu);
  btnsDiv.style.marginBottom = "0";
  btnsDiv.style.opacity = "0";
  setTimeout(() => {
    btnsDiv.style.display = "none";
  }, 1000);
  if(this.className.includes("login")){
    backgroundSignUp.classList.add("hide-side");
    loginSignUp.style.right = "0";
    loginSignUp.style.left = "auto";
  } else {
    backgroundLogin.classList.add("hide-side");
    loginSignUp.style.left = "0";
    loginSignUp.style.right = "auto";
  }
}