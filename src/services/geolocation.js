function getLocation(arr) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        arr.push(position.coords.latitude, position.coords.longitude);
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert('GPS를 지원하지 않습니다.');
  }
}
let LatLon = [];
getLocation(arr);
console.log(LatLon[0], LatLon[1]);
