const apiKey = "54d0860a627f9ab3e9b38e0eaf536b7c";

function getBackground(weatherId) {
  const body = document.querySelector("body");
  if (weatherId >= 200 && weatherId < 300) {
    body.style.backgroundImage = "url('./background/lightning.jpg')";
    return;
  }
  if (weatherId < 400) {
    body.style.backgroundImage = "url('./background/drizzle.jpg')";
    return;
  }
  if (weatherId < 600) {
    body.style.backgroundImage = "url('./background/rain.jpg')";
    return;
  }
  if (weatherId < 700) {
    body.style.backgroundImage = "url('./background/snow.jpg')";
    return;
  }
  if (weatherId < 800) {
    body.style.backgroundImage = "url('./background/fog.jpg')";
    return;
  }
  if (weatherId === 800) {
    body.style.backgroundImage = "url('./background/clearsky.jpg')";
    return;
  }
  if (weatherId > 800) {
    body.style.backgroundImage = "url('./background/cloudy.jpg')";
  }
}

function displayInfo(Data) {
  Data.then((weatherData) => {
    const weatherId = weatherData.weather[0].id;
    getBackground(weatherId);
    document.querySelector("#errormsg").textContent = " ";
    document.querySelector("#cityname").textContent = weatherData.name;
    document.querySelector("#temperature").textContent = `${Math.round(
      weatherData.main.temp
    )}°C`;
    document.querySelector("#temp-max").textContent = `H: ${Math.round(
      weatherData.main.temp_max
    )}°C`;
    document.querySelector("#temp-min").textContent = `L: ${Math.round(
      weatherData.main.temp_min
    )}°C`;
    document.querySelector("#description").textContent =
      weatherData.weather[0].description;
    document.querySelector("#humidity").textContent = `Humdity: ${Math.round(
      weatherData.main.humidity
    )}%`;
  }).catch(() => {
    document.querySelector("#errormsg").textContent =
      "Cannot find city, please try again";
  });
}

async function getWeatherInfo(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("City not found");
    }
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    return err;
  }
}

const searchBtn = document.querySelector("#searchcity");

searchBtn.addEventListener("click", () => {
  const input = document.querySelector("input[type=text]");
  console.log(input.value);
  const data = getWeatherInfo(input.value);
  displayInfo(data);
});

displayInfo(getWeatherInfo("Hong Kong"));
