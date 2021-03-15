const menu = (() => {
    console.log('menu')
    const contentContainer = document.getElementById('content')

    const divMenu = document.createElement('div')
    divMenu.setAttribute('id', 'menuDiv')
    divMenu.innerHTML = `<div class="hero"><h1>Menu Below</h1></div>
    
    <div class="menu-container">
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/hamburger.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text">Hamburger <br>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/cheeseburger.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text">Cheeseburger <br>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/steak.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text">Steak <br>
                All american steak <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/vepizza.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text">Pizza (Ve) <br>
                One for the vegans <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/peppizza.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text">Pepperoni Pizza <br>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/wine.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text">Wine <br>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>


    </div>
    
    `

    contentContainer.appendChild(divMenu);
})();