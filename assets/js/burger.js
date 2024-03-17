"use strict"

// ===== BURGER MENU & CATEGORY MENU ===== //
export function burgerBar () {

    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const categoryBtns = document.querySelectorAll('.categorybtn');
    const navMenus = document.querySelectorAll('.nav-menu');
    const navCloses = document.querySelectorAll('.nav-close');
    const sideBar = document.querySelector('.sidebar'); 

    toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', function() {
        navMenus.forEach(navMenu => {
        navMenu.classList.toggle('active');
        });
    });
    });

    categoryBtns.forEach(categoryBtn => { 
    categoryBtn.addEventListener('click', function() { 
        sideBar.classList.toggle('active'); 
    });
    });

    navCloses.forEach(navClose => {
    navClose.addEventListener('click', function() {
        navMenus.forEach(navMenu => {
        navMenu.classList.remove('active');
        });
        sideBar.classList.remove('active');
        });
    });
}