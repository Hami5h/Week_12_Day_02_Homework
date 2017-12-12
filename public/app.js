const initialize = function() {
  const center = {
      lat: 55.946962,
      lng: -3.20195
  };
  const container = document.querySelector('#main-map');
  const mainMap = new MapWrapper(container, center, 18);
  mainMap.addClickEvent();
  mainMap.addMarker(center);

  const button = document.querySelector('#bounce');
  button.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
}

document.addEventListener('DOMContentLoaded', initialize);
