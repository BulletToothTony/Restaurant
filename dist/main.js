(()=>{var e={637:()=>{(()=>{console.log("contact");const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","contactDiv"),n.innerHTML='<div class="hero"><h1>Contact form</h1></div>\n    \n    <div class="contact-container">\n    <p>Email us below: </p>\n\n    </div>\n    \n    ',e.appendChild(n)})()},666:()=>{(()=>{console.log("home");const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","homeDiv"),n.innerHTML='<div class="hero"><h1>Come on down to our 5 star restaurant</h1></div>\n    \n    \n    <div class="home-container">\n    <p>The new restaurent in LES</p>\n    </div>\n    ',e.appendChild(n)})()},83:()=>{(()=>{console.log("menu");const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","menuDiv"),n.innerHTML='<div class="hero"><h1>Menu Below</h1></div>\n    \n    <div class="menu-container">\n    <p>Chicken Burger </p>\n\n    </div>\n    \n    ',e.appendChild(n)})()}},n={};function t(o){if(n[o])return n[o].exports;var c=n[o]={exports:{}};return e[o](c,c.exports,t),c.exports}(()=>{"use strict";(()=>{const e=document.getElementById("content");document.createElement("div").innerHTML='<h1>Dorsia</h1>\n    <img src="https://www.foodhallonline.com/wp-content/uploads/2016/04/burger-400x400.jpg" alt="Burger" srcset="">\n    <div><p>The new avant-garde restaurant opening in New York\'s Lower East Side</p></div>\n    \n    \n    ';const n=document.createElement("header");n.innerHTML='\n    <nav>\n    <h1 class="logo">Dorisa</h1>\n    <ul class="navli">\n        <li id="home" class="tab">Home</li>\n        <li id="menu" class="tab">Menu</li>\n        <li id="contact" class="tab">Contact</li>\n    </ul>\n    </nav>\n    ',e.appendChild(n)})(),t(666),t(83),t(637),console.log("I am working");const e=document.getElementById("home"),n=document.getElementById("homeDiv"),o=document.getElementById("menuDiv"),c=document.getElementById("contactDiv");document.querySelectorAll(".tab").forEach((e=>e.addEventListener("click",(e=>{console.log(e),e.target.classList.add("red")})))),e.addEventListener("click",(function(){console.log("homeclicked"),n.style.display="block",n.classList.toggle("home-active"),o.style.display="none",c.style.display="none"})),document.getElementById("menu").addEventListener("click",(function(){console.log("menu clicked"),o.style.display="block",o.classList.toggle("menu-active"),c.style.display="none",n.style.display="none"})),document.getElementById("contact").addEventListener("click",(function(){console.log("contact clicked"),c.classList.toggle("contact-active"),c.style.display="block",o.style.display="none",n.style.display="none"}))})()})();