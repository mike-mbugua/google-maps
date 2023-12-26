let map;
function initMap() {
  let options = {
    center: { lat: 38.346, lng: -0.4907 },
    zoom: 9,
  };

  map = new google.maps.Map(document.getElementById("map"), options);
}
