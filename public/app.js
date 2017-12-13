const initialize = function() {
  const center = {
      lat: 55.946962,
      lng: -3.20195
  };
  const container = document.querySelector('#main-map');
  const mainMap = new MapWrapper(container, center, 18);
  mainMap.addClickEvent();
  mainMap.addMarker(center, "This is CodeClan");

  const buttonBounce = document.querySelector('#bounce');
  buttonBounce.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  const buttonStopBounce = document.querySelector('#stop-bounce');
  buttonStopBounce.addEventListener('click', mainMap.stopBounce.bind(mainMap));

  const buttonRemoveMarkers = document.querySelector('#remove-markers');
  buttonRemoveMarkers.addEventListener('click', mainMap.removeMarkers.bind(mainMap));

  const buttonChicago = document.querySelector('#chicago');
  buttonChicago.addEventListener('click', mainMap.toChicago.bind(mainMap));

  const buttonLocation = document.querySelector('#current-location');
  buttonLocation.addEventListener('click', mainMap.whereAmI.bind(mainMap));
}

document.addEventListener('DOMContentLoaded', initialize);
