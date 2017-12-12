const initialize = function() {
  const center = {
      lat: 55.946962,
      lng: -3.20195
  };
  const container = document.querySelector('#main-map');
  const mainMap = new MapWrapper(container, center, 18);
  mainMap.addClickEvent();
  mainMap.addMarker(center);

  const buttonBounce = document.querySelector('#bounce');
  buttonBounce.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  const buttonChicago = document.querySelector('#chicago');
  buttonChicago.addEventListener('click', mainMap.toChicago.bind(mainMap));
}

document.addEventListener('DOMContentLoaded', initialize);
