// Create script element, point its src attribute to the Google API and append it to body
const scriptEl = document.createElement('script');
scriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
scriptEl.async = true;
scriptEl.defer = true;
document.body.appendChild(scriptEl);

// Cities of Winc Students
const cities = [
  { city: 'Mijnsheerenland', lat: 51.799011, lng: 4.486300 },
  { city: 'Amstelveen', lat: 52.305691, lng: 4.862510 },
  { city: 'Amsterdam', lat: 52.370216, lng: 4.895168 },
  { city: 'Weesp', lat: 52.307331, lng: 5.042610 },
  { city: 'Nijmegen', lat: 51.812565, lng: 5.837226 },
  { city: 'Hoogeveen', lat: 52.728615, lng: 6.490100 },
  { city: 'Lelystad', lat: 52.518536, lng: 5.471422 },
  { city: 'Spijkenisse', lat: 51.850460, lng: 4.325670 },
  { city: 'Overveen', lat: 52.391689, lng: 4.611600 },
  { city: 'Winc Academy HQ', lat: 52.378570, lng: 4.854630 }
];

// Render map
function initMap() {
  // Create map, centered to The Netherlands
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.132633, lng: 5.291266 },
    zoom: 7
  });

  // Render markers on map
  cities.forEach(city => {
    if (city.city === 'Winc Academy HQ') {
      new google.maps.Marker({
        position: {
          lat: city.lat,
          lng: city.lng
        },
        map: map,
        icon: {
          url: './winc-round.png',
          scaledSize: new google.maps.Size(40, 40)
        }
      });
    } else {
      new google.maps.Marker({
        position: {
          lat: city.lat,
          lng: city.lng
        },
        map: map
      });
    }
  })
}
