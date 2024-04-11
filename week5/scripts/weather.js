const currentTemp = document.querySelector('#current-temp');
const WeatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')
const mykey = "418f81beb874cc6b989d2fd98fd660e4"
const myLat = "49.75869436821265" 
const myLong = "6.64875768601892"
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
        let desc = data.weather[0].description;
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        captionDesc.textContent = `${desc}`;
        const iconsrc =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        WeatherIcon.setAttribute('SRC', iconsrc);
        WeatherIcon.setAttribute('alt', data.weather[0].description)
    }
    apiFetch();