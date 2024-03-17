"use strict"


// ===== BURGER MENU & CATEGORY MENU ===== //
import { burgerBar } from "./burger.js";
burgerBar();


// ===== ACCORDION ===== //


const accordionBtn = document.querySelectorAll('.accordion-menu');
const accordion = document.querySelectorAll('.accordion-list');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });
};


// ===== FETCH ===== //


const apiUsers = document.getElementById('owners');
const ulElement = document.getElementById('ul-list');
let currentPage = 1;

function getUsersInfo () {
  fetch('https://reqres.in/api/users?page=', {
    method: 'GET',
  })
    .then( function(response) {
      if(!response.ok) {
        throw response.status;
      }
        return response.json();
    })
    
    .then(function(responseData) {

      const fragment = document.createDocumentFragment();

      responseData.data.forEach((element) => {
        // console.log(element)
        const li = document.createElement('li');
        li.textContent = `${element.first_name} ${element.last_name}`;
        li.className = 'list-item';

        const userPic = document.createElement('img');
        userPic.setAttribute('src', element.avatar);
        userPic.setAttribute('alt', 'User Picture');
        userPic.className = 'owner-img';
        li.appendChild(userPic);
        fragment.appendChild(li);
    });
    ulElement.innerHTML = " ";
    ulElement.appendChild(fragment);
    })

    .catch( function(error) {
      if (error == 404) {
        const pDesc = document.createElement('p');
        pDesc.textContent = 'Page Not Found';
        apiUsers.appendChild(pDesc);
      }
    })
}
getUsersInfo(currentPage);


// ===== FORM VALIDATION ===== //


const container = document.querySelector(".form-container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        // container.classList.remove("act")
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


function logIn() {
  const loginButton = document.getElementById('login');
  const loginButtons = document.getElementById('loginb');
  const loginMenus = document.querySelectorAll('.form-container');

  loginButton.addEventListener('click', () => {
    loginMenus.forEach(menu => {
      menu.classList.add('act');
    });
  });

  loginButtons.addEventListener('click', () => {
    loginMenus.forEach(menu => {
      menu.classList.add('act');
    });
  });
}
logIn();


// ===== COOKIES ===== //

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
      }
  }
  return null;
}

function hideCookieNotification() {
  const cookieNotification = document.getElementById('cookie-notification');
  if (cookieNotification) {
      cookieNotification.style.display = 'none';
  }
}

window.addEventListener('load', function() {
  const cookieAccepted = getCookie('cookieAccepted');
  if (cookieAccepted) {
      hideCookieNotification();
  }
});

document.getElementById('accept-cookies').addEventListener('click', function() {
  setCookie('cookieAccepted', 'true', 30); // Set the cookie for 30 days
  hideCookieNotification();
});