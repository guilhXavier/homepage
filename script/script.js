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

let phrases = [
  "Good morning, Guilherme!",
  "Have a good day at IF!",
  "Don't forget lunch time!",
  "What's the challenge for today?",
  "You should probably eat something",
  "Don't stay up too late!",
  "Any French homework?",
  "Do it for her"
];

const apiKey = "80771678e5b78ecacbb79ab8151ac360";

async function openWeatherCall(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

window.onload = () => {
  let r = Math.floor(Math.random() * 5) + 0;
  document.querySelector("h1").innerHTML = phrases[r];

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=Esteio, Região Geográfica Imediata de Porto Alegre, Região Metropolitana de Porto Alegre, Região Geográfica Intermediária de Porto Alegre, RS, Região Sul, Brasil" +
    "&units=metric" +
    "&appid=" +
    apiKey;
  openWeatherCall(url).then(data => {
    document.getElementById("temp").innerHTML =
      data.main.temp.toFixed(0) + " °C";
    document.getElementById("desc").innerHTML =
      " - " + data.weather[0].description;
  });

  let clock = document.getElementById("clockSpan");
  setInterval(() => {
    clock.textContent = getTime();
  }, 100);
};
