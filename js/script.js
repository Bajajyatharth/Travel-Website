let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
const USERS = ["Yatharth@gmail.com", "Bajaj@gmail.com", "newuser@gmail.com", "prevuser@gmail.com"];
const PASSWORDS = ["1327", "1234", "2904", "1306"];

const login_page = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  // Authenticate the user
  const isValidUser = authenticateUser(userId, password);

  // Display the appropriate message
  // const messageElement = document.getElementById("message");
  if (isValidUser) {
    // messageElement.innerText = "Welcome!";
    // messageElement.style.color = "green";
    alert("Logged in successfully")
  } else {
    // messageElement.innerText = "You are not an authenticated user.";
    // messageElement.style.color = "red";
    alert("Invalid user")
  }
});

function authenticateUser(userId, password) {
    // Check if the user ID and password match the valid credentials
    for (let i = 0; i < USERS.length; i++) {
      if (USERS[i] === userId && PASSWORDS[i] === password) {
        return true;
      }
    }
    return false;
  }