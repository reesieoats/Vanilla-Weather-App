function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

let apiKey = "595adbf6a3ae27cee86c95730ea72e7a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Cleveland&appid=595adbf6a3ae27cee86c95730ea72e7a&units=metric";

axios.get(apiUrl).then(displayTemperature);
