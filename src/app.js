function formatDate(timestamp) {
  return "Friday 05:00";
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "595adbf6a3ae27cee86c95730ea72e7a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Cleveland&appid=595adbf6a3ae27cee86c95730ea72e7a&units=metric";

axios.get(apiUrl).then(displayTemperature);
