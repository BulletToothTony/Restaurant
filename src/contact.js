const contact = (() => {
    console.log('contact')

    const contentContainer = document.getElementById('content')

    const contanctDiv = document.createElement('div')
    contanctDiv.setAttribute('id', 'contactDiv')
    contanctDiv.innerHTML = `<div class="hero"><h1>Contact form</h1></div>
    
    <div class="contact-container">
    <div class="form">
    Phone: 0800 900321 <br>
    E-mail us below:
    <form>
    <input type="text" id="email" name="email" placeholder="email..."><br>
    <input type="text" id="name" name="name" placeholder="name..."><br>
    <div class=text-area><textarea placeholder="message..."></textarea></div>

    <input type="submit" value="Send">

    
    </form>
    </div>

    
    
    <div class="map-responsive"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17100.843237742403!2d-73.99138496053736!3d40.73935319439031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2suk!4v1615595399676!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>

    </div>
    `

    contentContainer.appendChild(contanctDiv);


})();