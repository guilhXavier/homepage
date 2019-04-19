function getTime() {
  let date = new Date(),
    sec = date.getSeconds(),
    min = date.getMinutes(),
    hours = date.getHours();

  return (
    "" +
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec)
  );
}

const apiKey = "80771678e5b78ecacbb79ab8151ac360";

let latitude, longitude;
navigator.geolocation.getCurrentPosition(function(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
});

window.onload = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric" +
    "&appid=" +
    apiKey;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temp").innerHTML =
        data.main.temp.toFixed(0) + " °C";
      document.getElementById("desc").innerHTML =
        " - " + data.weather[0].description;
    });

  //   let xhr = new XMLHttpRequest();
  //   xhr.open(
  //     "GET",
  //     "http://api.openweathermap.org/data/2.5/weather?lat=" +
  //       latitude +
  //       "&lon=" +
  //       longitude +
  //       "&units=metric" +
  //       "&appid=" +
  //       apiKey
  //   );
  //   xhr.onload = () => {
  //     if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //         let json = JSON.parse(xhr.responseText);
  //         console.log(json);
  //         document.getElementById("temp").innerHTML =
  //           json.main.temp.toFixed(0) + " °C";
  //         document.getElementById("desc").innerHTML =
  //           " - " + json.weather[0].description;
  //       } else {
  //         console.log("error msg: " + xhr.status);
  //       }
  //     }
  //   };
  //   xhr.send();

  let clock = document.getElementById("clockSpan");
  setInterval(() => {
    clock.textContent = getTime();
  }, 100);
};
