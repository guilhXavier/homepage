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

function search(e) {
  if (e.keyCode == 13) {
    var val = document.getElementById("searchField").value;
    window.location.replace("https://google.com/search?q=" + val);
  }
}

let phrases = [
  "Good morning, Guilherme!",
  "Have a good day at IF!",
  "Don't forget lunch time!",
  "What's the challenge for today?",
  "You should probably eat something",
  "Don't stay up too late!",
  "Any French homework?",
  "Do it for her",
  "Which book do you want to finish?",
  "She likes you for who you are",
  "Which language is next?",
  "Winter is coming.",
  "Late game é agora.",
  "The French language has 12 vowel sounds"
];

const apiKey = "80771678e5b78ecacbb79ab8151ac360";

async function openWeatherCall(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

document.querySelector("h1").addEventListener("click", () => {
  let r = Math.floor(Math.random() * phrases.length) + 0;
  document.querySelector("h1").innerHTML = phrases[r];
});

window.onload = () => {
  let r = Math.floor(Math.random() * 13) + 0;
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

  document.addEventListener("keydown", event => {
    if (event.keyCode == 32) {
      document.getElementById("search").style.display = "flex";
      if (document.getElementById("searchField").style.display === "none") {
        document.getElementById("searchField").style.display = "flex";
      }
      document.getElementById("searchField").focus();
    } else if (event.keyCode == 27) {
      document.getElementById("searchField").value = "";
      document.getElementById("searchField").blur();
      document.getElementById("searchField").style.display = "none";
      document.getElementById("search").style.display = "none";
    }
  });
};
