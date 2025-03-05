// Key
// 5dd8b72524273aacd09a33d0e5aa300f


const cities = document.getElementById("citynm");
// const cityname = document.getElementById("citynm");
const statename = document.getElementById("statenm");        
const countryname = document.getElementById("connm");        
const imagechange = document.getElementById("image");        
const weathername = document.getElementById("weather");        
const temperatures = document.getElementById("tempe");        
const windspeed = document.getElementById("wind");        
const precip1 = document.getElementById("precip");        
const pressure1 = document.getElementById("pressure");   
const scroll = document.getElementById("scroll");
function sendReq(){
    const city = document.getElementById("entercity").value;
    const Api = `https://api.weatherstack.com/current?access_key=5dd8b72524273aacd09a33d0e5aa300f&query=${city}`;
    fetch(Api)
    .then((res) => res.json())
    .then((data)=>{

        // if (data.error) {
        //     alert("City not found!");
        //     return;
        // }
        cities.innerHTML = data.location.name;
        statename.innerHTML = data.location.region;
        countryname.innerHTML = data.location.country;

        imagechange.src = data.current.weather_icons[0];
        weathername.innerHTML = data.current.weather_descriptions[0];

        temperatures.innerHTML = data.current.temperature;
        windspeed.innerHTML = data.current.wind_speed;
        precip1.innerHTML = data.current.precip;
        pressure1.innerHTML = data.current.pressure;
        const quote = "Good morning, sunshine! May your day be as bright and beautiful as you are."
        scroll.innerHTML = quote;
    })
    .catch((err) =>{alert("!!!Error In Fetcching The Data, !!! Please ECheck The City Name !!! ", err)
        
    })
}