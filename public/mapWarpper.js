const MapWrapper = function(container, coords, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  this.markers = [];
}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, 'click', function(event) {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.addMarker(position);
  }.bind(this));
}

MapWrapper.prototype.addMarker = function(coords) {
  const infoWindowLocation = new google.maps.InfoWindow({
    content: "This is great",
  });
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    infoWindow: infoWindowLocation
  });

    google.maps.event.addListener(marker, 'click', function() {
      this.infoWindow.open(this.googleMap, marker);
    });
    this.markers.push(marker);
}

 MapWrapper.prototype.bounceMarkers = function() {
   this.markers.forEach(function(marker) {
     marker.setAnimation(google.maps.Animation.BOUNCE);
   });
 }
