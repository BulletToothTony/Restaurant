const contact = (() => {
    console.log('contact')

    const contentContainer = document.getElementById('content')

    const contanctDiv = document.createElement('div')
    contanctDiv.setAttribute('id', 'contactDiv')
    contanctDiv.innerHTML = `<div class="hero"><h1>Contact form</h1></div>
    
    <div class="contact-container">
    <p>Email us below: </p>

    </div>
    
    `

    contentContainer.appendChild(contanctDiv);


})();