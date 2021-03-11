const pageLoad = (() => {
    const contentContainer = document.getElementById('content')

    const divimg = document.createElement("div");
    divimg.innerHTML = `<h1>Dorsia</h1>
    <img src="https://www.foodhallonline.com/wp-content/uploads/2016/04/burger-400x400.jpg" alt="Burger" srcset="">
    <div><p>The new avant-garde restaurant opening in New York's Lower East Side</p></div>
    
    
    `

    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <h1 class="logo">Dorisa</h1>
    <ul class="navli">
        <li id="home" class="tab">Home</li>
        <li id="menu" class="tab">Menu</li>
        <li id="contact" class="tab">Contact</li>
    </ul>
    </nav>
    `


    // contentContainer.appendChild(divimg)
    contentContainer.appendChild(header)
})();

export { pageLoad };