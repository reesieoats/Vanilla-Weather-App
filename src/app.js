function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}

let apiKey = "595adbf6a3ae27cee86c95730ea72e7a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Cleveland&appid=595adbf6a3ae27cee86c95730ea72e7a&units=metric";

axios.get(apiUrl).then(displayTemperature);
