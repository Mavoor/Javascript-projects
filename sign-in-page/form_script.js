
const titlebar = document.getElementById("title")
const name_customer = document.getElementById("nameField")
const signinbtn = document.getElementById("sign-in-btn")
const signupbtn = document.getElementById("sign-up-btn")
const chk_bx = document.getElementById("checkbox")
const pswd = document.getElementById("pwd")


signupbtn.onclick = function(){
    titlebar.innerHTML = "Sign Up";
    name_customer.style.display = "block";
}

signinbtn.onclick = function(){
    titlebar.innerHTML = "Login";
    name_customer.style.display = "none";
}


chk_bx.addEventListener('change', () => {
    if (chk_bx.checked) {
        pswd.type = 'text';
    } else {
        pswd.type = 'password';
    }
  });




 




// signupbtn.onclick = changevisibility();

