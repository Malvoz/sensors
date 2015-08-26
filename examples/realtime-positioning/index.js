function onsuccess(position) {
    var coords = [position.coords.latitude, position.coords.longitude];
    updateMap(null, coords);
}

function onerror(e) {
    updateMap(e);
}

navigator.geolocation.watchPosition(onsuccess, onerror, {
    enableHighAccuracy: true, 
    maximumAge: 0, 
    timeout: Infinity
});