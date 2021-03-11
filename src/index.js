import { pageLoad} from "./pageload";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

console.log('I am working');

const homeListen = document.getElementById('home')
const homeDivActive = document.getElementById('homeDiv')
const menuDivActive = document.getElementById('menuDiv');
const contactDivActive = document.getElementById('contactDiv');
const tabs = document.querySelectorAll('.tab')

tabs.forEach((tab => 
    tab.addEventListener('click', (e) => {
        console.log(e)
        e.target.classList.add('red')
    })   
));


homeListen.addEventListener('click', homeTabFunc)

function homeTabFunc() {
    console.log('homeclicked')
    homeDivActive.style.display = "block";
    homeDivActive.classList.toggle('home-active');
    menuDivActive.style.display = "none";
    contactDivActive.style.display = "none"
}

const menuListen = document.getElementById('menu')
menuListen.addEventListener('click', menuTabFunc)

function menuTabFunc() {
    console.log('menu clicked')
    // menuDivActive.innerText='testing'
    menuDivActive.style.display = "block";
    menuDivActive.classList.toggle("menu-active")
    contactDivActive.style.display = "none"
    homeDivActive.style.display = "none"
}

const contactListen = document.getElementById('contact')
contactListen.addEventListener('click', contactTab)

function contactTab() {
    console.log('contact clicked')
    contactDivActive.classList.toggle("contact-active")
    contactDivActive.style.display = "block";
    menuDivActive.style.display = "none";
    homeDivActive.style.display = "none"
}