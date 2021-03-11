import { pageLoad} from "./pageload";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

console.log('I am working');

const homeListen = document.getElementById('home')

homeListen.addEventListener('click', homeTabFunc)

function homeTabFunc() {
    console.log('homeclicked')
}


const menuListen = document.getElementById('menu')
menuListen.addEventListener('click', menuTabFunc)

function menuTabFunc() {
    console.log('menu clicked')
    const menuDivActive = document.getElementById("menuDiv");
    // menuDivActive.innerText='testing'
    menuDivActive.classList.toggle("menu-active")
}