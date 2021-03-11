const menu = (() => {
    console.log('menu')
    const contentContainer = document.getElementById('content')

    const divMenu = document.createElement('div')
    divMenu.setAttribute('id', 'menuDiv')
    divMenu.innerHTML = `<div class="hero"><h1>Menu Below</h1></div>
    
    <div class="menu-container">
    <p>Chicken Burger </p>

    </div>
    
    `

    contentContainer.appendChild(divMenu);
})();