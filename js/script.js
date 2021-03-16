const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
    console.log('its ok, works!');
});