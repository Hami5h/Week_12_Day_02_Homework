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
    this.addMarker(position, "You selected this location");
  }.bind(this));
}

MapWrapper.prototype.addMarker = function(coords, message) {
  const infoWindowLocation = new google.maps.InfoWindow({
    content: message + ' ' + `${coords.lat}, ${coords.lng}`
  });
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    infoWindow: infoWindowLocation
  });
  google.maps.event.addListener(marker, 'click', function() {
    this.infoWindow.open(this.googleMap, this);
  });
  this.markers.push(marker);
}

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
}

MapWrapper.prototype.stopBounce = function() {
  this.markers.forEach(function(marker){
    marker.setAnimation(null);
  })
}

MapWrapper.prototype.removeMarkers = function() {
  this.markers.forEach(function(marker){
    marker.setMap(null);
  })
  this.markers = [];
}

MapWrapper.prototype.toChicago = function() {
  const chicago = {
    lat: 41.854073,
    lng: -87.619392,
  }
  this.googleMap.setCenter(chicago);
  this.addMarker(chicago, "This is Chicago");
  this.googleMap.setZoom(16);
}

MapWrapper.prototype.whereAmI = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const location = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    this.googleMap.setCenter(location);
    this.addMarker(location, 'This is your current location');
  }.bind(this))
}
