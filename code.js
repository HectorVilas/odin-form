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
  swapSide = document.querySelectorAll(".swap-side"),
  //password related
  inputPass = document.querySelectorAll(`.menu-signup input[type="password"]`)[0],
  inputPassConfirm = document.querySelectorAll(`.menu-signup input[type="password"]`)[1],
  passChars = document.querySelector("#pass-chars"),
  passUc = document.querySelector("#pass-uc"),
  passLc = document.querySelector("#pass-lc"),
  passNum = document.querySelector("#pass-num"),
  passSymbol = document.querySelector("#pass-symbol");




//listeners
btnLogin.addEventListener("click", moveMenu);
btnSignUp.addEventListener("click", moveMenu);

inputs.forEach(input => {
  input.addEventListener("focusout", () => {
    input.classList.add("visited")
  });
  if(input.type === "text" || input.type === "tel"){
    input.onkeydown = inputType;
  };
});

swapSide.forEach(a => {
  a.addEventListener("click", swap)
});

inputPass.addEventListener("input", validatePass);

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

//prevent writing numbers or chars when necessary
function inputType(e) {
  const nums = "0123456789";
  const chars = "abcdefghijklmnopqrstuvwxyz";
  
  if(this.type === "text"){ //first and last name
    if(nums.includes(e.key)){
      return false;
    }
  } else { //phone number
    if(chars.includes((e.key).toLowerCase())){
      return false;
    }
  }
};

//check for requirements for password
function validatePass(){
  const value = this.value.split("");
  //for validation
  const nums = "0123456789";
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "@!°#$%&\"/\\=?¡'(){}[]~`";
  //removes all valid status
  [passChars, passUc, passLc, passNum, passSymbol].forEach(req => {
    req.classList.remove("valid");
  });
  //validate length
  if(value.length >= 8) passChars.classList.add("valid")
  //validate chars  
  for(const char of value){
    if(chars.toUpperCase().includes(char)) passUc.classList.add("valid");
    if(chars.includes(char)) passLc.classList.add("valid");
    if(nums.includes(char)) passNum.classList.add("valid");
    if(symbols.includes(char)) passSymbol.classList.add("valid");
  };
};


//on page load

//check input status if there's content after refresh
inputs.forEach(input => {
  if(input.value.length > 0){
    input.classList.add("visited")
  }
});



////////////////////autoreveal sign up for testing
bgLogin.style.transition = "1ms"
bgSignUp.style.transition = "1ms"
btnsDiv.style.display = "none";
bgLogin.classList.add("hide-side");
bgSignUp.classList.add("smaller-side");
menuSignUp.classList.remove("hidden");