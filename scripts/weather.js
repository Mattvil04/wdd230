//select the HTML elements or call it in the document
const myTemperature = document.querySelector("#temperature");
const myDescription = document.querySelector("#description");
const myWeathericon = document.querySelector("#weather-icon");
//Create required variables for the api and url
const mykey = "418f81beb874cc6b989d2fd98fd660e4"
const myLat = "-0.03144380441314658" 
const myLong = "-78.44471080345099"
//Create a path using the literal bellow
const myUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${mykey}&units=imperial`
//Try to grab the current weather data

async function apiFetch (){
    try{
        const response = await fetch(myUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data) //display the data
        } else {
            throw Error(await response.text ());
        }
        } catch (error) {
            console.log(error);
        }
    }

function displayResults(data) {
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    myDescription.innerHTML = data.weather[0].description;

}
apiFetch();
