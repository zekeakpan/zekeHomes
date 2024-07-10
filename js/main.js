const buyButton = document.querySelector('.btn__buy');
const rentButton = document.querySelector('.btn__rent');
const sellButton = document.querySelector('.btn__sell');
const buyingSection = document.querySelector('.buying');
const rentingSection = document.querySelector('.renting');
const sellingSection = document.querySelector('.selling');

function activateSection (section) {
    buyingSection.classList.remove('active');
    rentingSection.classList.remove('active');
    sellingSection.classList.remove('active');
    section.classList.add('active');
}

buyButton.addEventListener('click', () => {
    activateSection(buyingSection);
});

rentButton.addEventListener('click', () => {
    activateSection(rentingSection);
});

sellButton.addEventListener('click', () => {
    activateSection(sellingSection);
});












const imageContainer = document.querySelectorAll('.card__image-container');

imageContainer.forEach(container => {
    const image = container.querySelectorAll('.card__image');
    
    container.addEventListener('mouseover', () => {
        image[0].classList.remove('active');
        image[0].classList.add('previous');
        image[1].classList.remove('diminish');
        image[1].classList.add('active');
    });
    
    container.addEventListener('mouseout', () => {
        image[1].classList.remove('active');
        image[1].classList.add('diminish');
        image[0].classList.remove('previous');
        image[0].classList.add('active');
    
    });
});



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


