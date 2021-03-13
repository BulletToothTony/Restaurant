const home = (() => {
    console.log('home')

    const contentContainer = document.getElementById('content')

    const homeDiv = document.createElement('div')
    homeDiv.setAttribute('id', 'homeDiv')
    homeDiv.classList.add('home-active')
    // homeDiv.style.add('flex')
    homeDiv.innerHTML = `<div class="home-outer"><div class="hero"><h1>Come on down to our 5 star restaurant</h1></div>
    
    
    <div class="home-container">
    
    <p>The new restaurent in LES</p>
    </div>


    <button class="home-button">Order Now</button>
    
    <div class="home-div-address"><h2>Opening Times:</h2><br>
                                <p>Mon-Fri: 11:00-20:00<br>
                                    Sat: 11:00-22:00<br>
                                    Sun: Closed
                                </p>

    </div>
    </div>
    </div>
    
    
    `
    
    contentContainer.appendChild(homeDiv);


})();