const pageLoad = (() => {
    const contentContainer = document.getElementById('content')

    const divimg = document.createElement("div");
    divimg.innerHTML = `<h1>Dorsia</h1>
    <img src="https://www.foodhallonline.com/wp-content/uploads/2016/04/burger-400x400.jpg" alt="Burger" srcset="">
    <div><p>The new avant-garde restaurant opening in New York's Lower East Side</p></div>
    
    
    `

    // const header = document.createElement("header");
    // header.innerHTML = `
    // <nav>
    // <h1 class="logo">Dorisa</h1>
    // <ul class="navli">
    //     <li>Home</li>
    //     <li>Menu</li>
    //     <li>Contact</li>
    // </ul>
    // </nav>
    // `


    contentContainer.appendChild(divimg)
})();

export { pageLoad };