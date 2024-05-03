

mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // dark basemap
    center: [-73.91076292607373, 40.718914534163154,], // starting position [lng, lat]
    zoom: 10.7, // starting zoom,
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navigation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');


// loop over the pizzaData array to make a marker for each record
pizzaData.forEach(function (pizzaRecord) {

    var color

    // use if statements to assign colors based on pizzaData.program
    // This is the new addition from last week: last week I wasn't actually using if statements, but I figured out how
    if (pizzaRecord.program === 'Asylum Seeker Shelter') {
        color = '#8dd6a1'
    }
    if (pizzaRecord.program === 'Rethink Food HQ') {
        color = '#d67ea6'
    }
    if (pizzaRecord.program === 'Restaurant Partner') {
        color = '#0077b6'
    }
    
    function getPopupText(pizzaRecord) {
        let popupText = "";
        switch (pizzaRecord.program) {
            case "Asylum Seeker Shelter":
                popupText = `${pizzaRecord.name} is housing ${pizzaRecord.number} asylum seekers.`;
                break;
            case "Restaurant Partner":
                popupText = `${pizzaRecord.name} has provided ${pizzaRecord.number} meals so far.`;
                break;
            case "Rethink Food HQ":
                popupText = `${pizzaRecord.name} is where the nonprofit staff is located.`;
                break;
            default:
                popupText = "Program information not available.";
                break;
        }
        return popupText;
    }


    const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }
    ).setText(
        getPopupText(pizzaRecord)
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


// I was trying to get this directions pop up incorporated, so that you could click and see the distance between the various points
// But I couldn't get it to work. Then towards the end of class you said not to use it, haha. 
// So for next week I have to come up with a way to get these directions to pop up 
// map.addControl(
//     new MapboxDirections({
//         accessToken: mapboxgl.accessToken
//     }),
//     'top-right'
// );
