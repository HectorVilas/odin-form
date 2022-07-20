const
  main = document.querySelector(".main"),
  //side images
  loginSignUp = document.querySelector(".login-signup"),
  bgLogin = document.querySelector(".bg-login"),
  bgSignUp = document.querySelector(".bg-signup"),
  btnsDiv = document.querySelector(".buttons"),
  btnLogin = document.querySelector(".main .buttons .login"),
  btnSignUp = document.querySelector(".main .buttons .signup"),
  //forms
  menuLogin = document.querySelector(".menu-login"),
  menuSignUp = document.querySelector(".menu-signup"),
  inputs = document.querySelectorAll("input"),
  swapSide = document.querySelectorAll(".swap-side");



//listeners
btnLogin.addEventListener("click", moveMenu);
btnSignUp.addEventListener("click", moveMenu);
inputs.forEach(input => {
  input.addEventListener("focusout", () => {
    input.classList.add("visited")
  })
});
swapSide.forEach(a => {
  a.addEventListener("click", swap)
});


//functions

//moves the menu left or right to reveal the proper form, becoming a sidebar
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
};

//swap sides with "already have account?"/"need an account?"
function swap(){
  const hidden = document.querySelector(".hide-side"),
    smaller = document.querySelector(".smaller-side");
  
  hidden.classList.remove("hide-side");
  smaller.classList.remove("smaller-side");
  
  setTimeout(() => {
    if(menuLogin.className.includes("hidden")){
      menuLogin.classList.remove("hidden")
      menuSignUp.classList.add("hidden")
      loginSignUp.style.right = "0";
      loginSignUp.style.left = "auto";
    } else {
      menuSignUp.classList.remove("hidden")
      menuLogin.classList.add("hidden")
      loginSignUp.style.left = "0";
      loginSignUp.style.right = "auto";
    };
    hidden.classList.add("smaller-side")
    smaller.classList.add("hide-side")
  }, 2000);
};


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