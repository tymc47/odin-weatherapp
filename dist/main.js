/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = \"54d0860a627f9ab3e9b38e0eaf536b7c\";\n\nfunction displayInfo(Data) {\n  Data.then((weatherData) => {\n    const weatherId = weatherData.weather[0].id;\n    document.querySelector(\"#cityname\").textContent = weatherData.name;\n    document.querySelector(\"#temperature\").textContent = `${Math.round(\n      weatherData.main.temp\n    )}°C`;\n    console.log(typeof weatherData.main.temp);\n    document.querySelector(\"#temp-max\").textContent = `H: ${Math.round(\n      weatherData.main.temp_max\n    )}°C`;\n    document.querySelector(\"#temp-min\").textContent = `L: ${Math.round(\n      weatherData.main.temp_min\n    )}°C`;\n    document.querySelector(\"#description\").textContent =\n      weatherData.weather[0].description;\n    document.querySelector(\"#humidity\").textContent = `Humdity: ${Math.round(\n      weatherData.main.humidity\n    )}%`;\n  }).catch((err) => {\n    console.log(err);\n  });\n}\n\nasync function getWeatherInfo(location) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;\n\n  try {\n    const response = await fetch(url, { mode: \"cors\" });\n    if (!response.ok) {\n      throw new Error(\"City not found\");\n    }\n    const weatherData = await response.json();\n    console.log(weatherData);\n    return weatherData;\n  } catch (err) {\n    return err;\n  }\n}\n\nconst searchBtn = document.querySelector(\"#searchcity\");\n\nsearchBtn.addEventListener(\"click\", () => {\n  const input = document.querySelector(\"input[type=text]\");\n  console.log(input.value);\n  const data = getWeatherInfo(input.value);\n  displayInfo(data);\n});\n\ndisplayInfo(getWeatherInfo(\"Hong Kong\"));\n\n\n//# sourceURL=webpack://odin-weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;