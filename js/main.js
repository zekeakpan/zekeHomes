function initAutocorrect () {
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

google.maps.event.addDomListener(window, 'load', initAutocorrect);