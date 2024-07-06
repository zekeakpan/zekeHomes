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

