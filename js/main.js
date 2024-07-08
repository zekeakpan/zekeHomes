const menu = document.querySelector('.menu__side');
const closeButton = document.querySelector('.close__btn');
const menuButton = document.querySelector('.menu__btn');
const showOverlay = document.querySelector('.show-overlay');
const dimOverlay = document.querySelector('.dim-overlay');

menuButton.addEventListener('click', () => {
    menu.classList.remove('menu__close');
    menu.classList.add('menu__open');
    dimOverlay.classList.add('show-overlay');
});

function closeMenu (event) {
        menu.classList.remove('menu__open');
        menu.classList.add('menu__close');

        setTimeout(() => {
            dimOverlay.classList.remove('show-overlay');
        }, 300);
}

closeButton.addEventListener('click', closeMenu);
dimOverlay.addEventListener('click', closeMenu);



function initAutocomplete () {
    let input = document.getElementById('address');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener ('place_changed', function () {
        let place = autocomplete.getPlace();
        if (!place.geometry){
            window.alert(`There are no details for: '${place.name}'`);
            return;
        }

    });
}


google.maps.event.addDomListener(window, 'load', initAutocomplete);

document.addEventListener ('DOMContentLoaded', (event) => {
    const collapsibles = document.getElementById('collapsible-container');
    const button = document.getElementById('show-more');

    button.addEventListener('click', () =>{
        collapsibles.classList.toggle('open');

        if (collapsibles.classList.contains('opens'))
            button.innerHTML = 'Show Less'
        else button.innerHTML = 'Show More'

    });

});

const imageContainer = document.querySelector('.card__image-container');
const image = imageContainer.querySelectorAll('.card__image');

imageContainer.addEventListener('mouseover', () => {
    image[0].classList.remove('active');
    image[0].classList.add('previous');
    image[1].classList.remove('diminish');
    image[1].classList.add('active');
});

imageContainer.addEventListener('mouseout', () => {
    image[1].classList.remove('active');
    image[1].classList.add('diminish');
    image[0].classList.remove('previous');
    image[0].classList.add('active');

});
