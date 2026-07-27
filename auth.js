const themeBtn=document.getElementById("themeToggle");

themeBtn.onclick=function(){

    document.body.classList.toggle("dark");

    const icon=themeBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.className="bi bi-sun-fill";

    }

    else{

        icon.className="bi bi-moon-stars-fill";

    }

}



//==========================
// LOGIN VALIDATION
//==========================

const loginForm = document.querySelector(".login-form");

if(loginForm){

loginForm.addEventListener("submit",function(e){

let email=document.getElementById("loginEmail").value.trim();

let password=document.getElementById("loginPassword").value.trim();

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email==""){

alert("Email is required");

e.preventDefault();

return;

}

if(!emailPattern.test(email)){

alert("Enter valid email address");

e.preventDefault();

return;

}

if(password==""){

alert("Password is required");

e.preventDefault();

return;

}

if(password.length<8){

alert("Password should contain minimum 8 characters");

e.preventDefault();

return;

}

});

}

//==========================
// SIGNUP VALIDATION
//==========================

const signupForm=document.querySelector(".signup-form");

if(signupForm){

signupForm.addEventListener("submit",function(e){

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let password=document.getElementById("password").value;

let confirmPassword=document.getElementById("confirmPassword").value;

let terms=document.getElementById("terms");

let namePattern=/^[A-Za-z ]+$/;

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let phonePattern=/^[0-9]{10}$/;

let passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(name==""){

alert("Full Name is required");

e.preventDefault();

return;

}

if(!namePattern.test(name)){

alert("Name should contain only letters");

e.preventDefault();

return;

}

if(name.length<3){

alert("Name should contain minimum 3 characters");

e.preventDefault();

return;

}

if(email==""){

alert("Email is required");

e.preventDefault();

return;

}

if(!emailPattern.test(email)){

alert("Enter valid email");

e.preventDefault();

return;

}

if(phone==""){

alert("Phone Number is required");

e.preventDefault();

return;

}

if(!phonePattern.test(phone)){

alert("Phone Number should contain 10 digits");

e.preventDefault();

return;

}

if(password==""){

alert("Password is required");

e.preventDefault();

return;

}

if(!passwordPattern.test(password)){

alert("Password should contain Uppercase, Lowercase, Number and Special Character");

e.preventDefault();

return;

}

if(confirmPassword==""){

alert("Confirm Password is required");

e.preventDefault();

return;

}

if(password!=confirmPassword){

alert("Passwords do not match");

e.preventDefault();

return;

}

if(!terms.checked){

alert("Please accept Terms & Conditions");

e.preventDefault();

return;

}

});

}

//==========================
// SHOW / HIDE PASSWORD
//==========================

const toggleButtons = document.querySelectorAll(".password-toggle");

toggleButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const input = this.previousElementSibling;
        const icon = this.querySelector("i");

        if(input.type === "password"){

            input.type = "text";
            icon.className = "bi bi-eye-slash";

        }else{

            input.type = "password";
            icon.className = "bi bi-eye";

        }

    });

});