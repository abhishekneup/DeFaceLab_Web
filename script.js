const wrapper = document.querySelector('.wrapper');
const login =document.querySelector('.login-link');
const register=document.querySelector('.register-link');
// const Login =document.querySelector('.goLog');
// const Regi =document.querySelector('.goReg');
const logoImage = document.querySelector(".images");

logoImage.addEventListener("click", function() {
    window.location.href = "home.html"; 
});




register.addEventListener('click',()=>{
    wrapper.classList.add('active');

});

login.addEventListener('click',()=>{
    wrapper.classList.remove('active');

});

// Regi.addEventListener('click',()=>{
//     wrapper.classList.add('active');

// });

// Login.addEventListener('click',()=>{
//     wrapper.classList.remove('active');
// });



