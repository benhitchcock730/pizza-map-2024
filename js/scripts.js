

mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // dark basemap
    center: [-73.91076292607373, 40.718914534163154,], // starting position [lng, lat]
    zoom: 10.7, // starting zoom,
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// loop over the pizzaData array to make a marker for each record
pizzaData.forEach(function (pizzaRecord) {

    var color

    // use if statements to assign colors based on pizzaData.program
    if (pizzaRecord.program === 'Asylum Seeker Shelter') {
        color = '#8dd6a1'
    }
    if (pizzaRecord.program === 'Rethink Food HQ') {
        color = '#d67ea6'
    }
    if (pizzaRecord.program === 'Restaurant Partner') {
        color = '#0077b6'
    }
    


    // I will need 3 different types of pop-ups, as the information required for each type of site is different
    //however I could not figure out how to do that (the if statement was not taking for some reason) so I sort of brute forced it.
    const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }
    ).setText(
        `${pizzaRecord.name} ${pizzaRecord.pizza_restaurant_name}`
    );
    
    
    
    




    // create a marker, set the coordinates, add the popup, add it to the map
    new mapboxgl.Marker({
        scale: 0.8,
        color: color
    })
        .setLngLat([pizzaRecord.longitude, pizzaRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})

