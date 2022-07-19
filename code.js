const
  main = document.querySelector(".main"),
  //side images
  loginSignUp = document.querySelector(".login-signup"),
  bgLogin = document.querySelector(".bg-login"),
  bgSignUp = document.querySelector(".bg-signup"),
  btnsDiv = document.querySelector(".buttons"),
  btnLogin = document.querySelector(".login"),
  btnSignUp = document.querySelector(".signup"),
  //forms
  menuLogin = document.querySelector(".menu-login"),
  menuSignUp = document.querySelector(".menu-signup"),
  inputs = document.querySelectorAll("input");



//listeners
btnLogin.addEventListener("click", moveMenu);
btnSignUp.addEventListener("click", moveMenu);
inputs.forEach(input => {
  input.addEventListener("focusout", () => {
    input.classList.add("visited")
  });
})


//functions
function moveMenu(){
  btnLogin.removeEventListener("click", moveMenu);
  btnSignUp.removeEventListener("click", moveMenu);
  btnsDiv.style.marginBottom = "0";
  btnsDiv.style.opacity = "0";
  setTimeout(() => {
    btnsDiv.style.display = "none";
  }, 1000);
  if(this.className.includes("login")){
    bgSignUp.classList.add("hide-side");
    bgLogin.classList.add("smaller-side");
    menuLogin.classList.remove("hidden");
    loginSignUp.style.right = "0";
    loginSignUp.style.left = "auto";
  } else {
    bgLogin.classList.add("hide-side");
    bgSignUp.classList.add("smaller-side");
    menuSignUp.classList.remove("hidden");
    loginSignUp.style.left = "0";
    loginSignUp.style.right = "auto";
  }
}



//this is for testing
// btnLogin.removeEventListener("click", moveMenu);
// btnSignUp.removeEventListener("click", moveMenu);
// btnsDiv.style.marginBottom = "0";
// btnsDiv.style.opacity = "0";
// setTimeout(() => {
//   btnsDiv.style.display = "none";
// }, 1000);
// bgLogin.classList.add("hide-side");
// bgSignUp.classList.add("smaller-side");
// menuSignUp.classList.remove("hidden");
// loginSignUp.style.left = "0";
// loginSignUp.style.right = "auto";