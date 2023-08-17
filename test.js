
const Login =document.querySelector('.goLog');
const Regi =document.querySelector('.goReg');
const wrapper = document.querySelector('.wrapper');
const login =document.querySelector('.login-link');
const register=document.querySelector('.register-link');
const logoImage = document.querySelector(".images");


logoImage.addEventListener("click", function() {
    window.location.href = "home.html"; 
});




Regi.addEventListener('click',()=>{
    wrapper.classList.add('active');

});

Login.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


document.getElementById("goLog").addEventListener("click", function() {
    window.location.href = "login.html";
});

document.getElementById("goReg").addEventListener("click", function() {
    window.location.href = "login.html";
});


register.addEventListener('click',()=>{
    wrapper.classList.add('active');

});

login.addEventListener('click',()=>{
    wrapper.classList.remove('active');

});

