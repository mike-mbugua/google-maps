let map;
function initMap() {
  let options = {
    center: { lat: 1.0135, lng: 36.9053 },
    zoom: 9,
  };

  map = new google.maps.Map(document.getElementById("map"), options);

  const marker = new google.maps.Marker({
    position: { lat: 1.0135, lng: 36.9053 },
    map: map,
  });
}
