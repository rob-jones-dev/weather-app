const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apiKey = "PWGPJUCZ8GKZHQ4L2D88N2S68";
const locationInput = document.getElementById("city-input").value;
const weatherButton = document.getElementById("get-weather");



const weather = weatherButton.addEventListener("click", async () => {
    const response = await fetch(`${url}${locationInput}?unitGroup=metric&key=${apiKey}&contentType=json`);
    const data = await response.json();
    console.log(data);
    console.log(data.days[0].description);
    document.getElementById("weather-result").innerHTML = "";
    for (let i = 0; i < data.days.length; i++) {
            printWeather(data, i);
    }
    return data;
});

printWeather = (weather, i) => {
    console.log("Printing weather...");
    const weatherResult = document.getElementById("weather-result");
    const newBox = document.createElement("div");

    const newHeading = document.createElement("h2");
    newHeading.innerText = weather.days[i].datetime;
    newBox.appendChild(newHeading);

    const temp = weather.days[i].temp + "°C";
    const tempParagraph = document.createElement("p");
    tempParagraph.innerText = `Temperature: ${temp}`;
    newBox.appendChild(tempParagraph);

    const descParagraph = document.createElement("p");
    descParagraph.innerText = weather.days[i].description;
    newBox.appendChild(descParagraph);

    newBox.classList.add("weather-box");
    newHeading.classList.add("weather-heading");
    weatherResult.appendChild(newBox);
};