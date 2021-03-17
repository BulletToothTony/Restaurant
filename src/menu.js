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
            <div class="menu-text"><h4>Hamburger</h4>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/cheeseburger.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Cheeseburger</h4>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/steak.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Steak</h4>
                All american steak <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/vepizza.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Pizza (Ve)</h4>
                One for the vegans <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/peppizza.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Pepperoni Pizza </h4>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/wine.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Wine </h4>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>

    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/peppizza.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Pepperoni Pizza </h4>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>
    <div class="menu-item">
        <div><img class="menu-image" src="/FreeCodeCamp/Odin/Projects/Restaurant/dist/imgs/wine.png" alt="Hamburger"> 
        </div> 
            <div class="menu-text"><h4>Wine </h4>
                Buns, Tomato, Onion, Lettuce, you know the drill <br>
                $2.99
            </div>
    </div>


    </div>
    
    `

    contentContainer.appendChild(divMenu);
})();