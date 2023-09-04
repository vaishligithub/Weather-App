const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// &appid=3b8ee6a957fd4b2c699b53d3259bec50
const apiKey = "3b8ee6a957fd4b2c699b53d3259bec50";
const searchBox = document.querySelector(".search-bar input");

const searchBtn = document.querySelector(".search-icon button");
var weatherIcon = document.querySelector(".image ");
console.log(weatherIcon, "ghgggg");
// console.log(weatherIcon.src);

async function callWeather(city) {
  console.log(city);
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  if ((response.status == 404)) {
    document.querySelector(".error").style.display = "block";
  }
  console.log(data);

  document.querySelector(".temperature").innerHTML = data.main.temp;
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;

  //    console.log(data.weather[0].main);
  if (data.weather[0].main == "Clouds") {
    console.log(data.weather[0].main, "hghhjghj");

    weatherIcon.src = "/images/clouds.png";
  } else if (data.weather[0].main == "rain") {
    console.log("rain");
    weatherIcon.src = "/images/rain.png";
  } else if (data.weather[0].main == "wind") {
    console.log("wind");
    weatherIcon.src = "/images/wind.png";
  } else if (data.weather[0].main == "Clear") {
    // console.log(data.weather[0].main);
    console.log("clear");
    weatherIcon.src = "/images/clear.png";
  } else if (data.weather[0].main == "drizzle") {
    weatherIcon.src = "/images/drizzle.png";
  } else if (data.weather[0].main == "humidity") {
    weatherIcon.src = "/images/humidity.png";
  } else if (data.weather[0].main == "mist") {
    weatherIcon.src = "/images/mist.png";
  } else if (data.weather[0].main == "snow") {
    weatherIcon.src = "/images/snow.png";
  }
  document.querySelector(".weather").style.display = "block";
}

// }
searchBtn.addEventListener("click", () => callWeather(searchBox.value));
