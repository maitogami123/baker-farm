
const foodCards = document.querySelectorAll('.food-card');

foodCards[0].style.backgroundImage = 'url("./assets/img/dish\ 3.jpeg")'
foodCards[1].style.backgroundImage = 'url("./assets/img/dish\ 2.jpeg")'
foodCards[2].style.backgroundImage = 'url("./assets/img/dish\ 1.jpeg")'

foodCards[0].children[0].style.backgroundImage = 'linear-gradient("to top, rgba(231,157,60,0.95) 0%, rgba(231,157,60,0.95) 37.5%, transparent 37.5%")'
foodCards[1].children[0].style.backgroundImage = 'linear-gradient(to top, rgba(233,48,79,0.95) 0%, rgba(233,48,79,0.95) 37.5%, transparent 37.5%)';
foodCards[2].children[0].style.backgroundImage = 'linear-gradient(to top, rgba(20,218,96,0.95) 0%, rgba(20,218,96,0.95) 37.5%, transparent 37.5%)';

document.querySelector('.nav__hamburger').addEventListener('click', (e) => {
    document.querySelector('.nav__items').classList.toggle('mobile-active')
})

