const home = (() => {
    console.log('home')

    const contentContainer = document.getElementById('content')

    const homeDiv = document.createElement('div')
    homeDiv.setAttribute('id', 'homeDiv')
    homeDiv.innerHTML = `<div class="hero"><h1>Come on down to our 5 star restaurant</h1></div>
    
    
    <div class="home-container">
    <p>The new restaurent in LES</p>
    </div>
    `
    
    contentContainer.appendChild(homeDiv);


})();