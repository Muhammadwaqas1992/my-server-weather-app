window.getWeather = function () {
    let cityName = document.querySelector("#cityName").value;

    axios.get(`/weather/${cityName}`)
        .then(function (response) {
            // handle success
            document.querySelector("#result").innerHTML =
             `City Name: ${response.data.city}`
             document.querySelector("#result2").innerHTML =
             `Current Temperature: ${response.data.tempInC}°C`
             document.querySelector("#result3").innerHTML =
             `Humidity: ${response.data.humidity}°C`
             document.querySelector("#result4").innerHTML =
             `High: ${response.data.high}°C`
             document.querySelector("#result5").innerHTML =
             `Low: ${response.data.low}°C`

            showImage(cityName);
        })    
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#result").innerHTML = "Enter your city name";
            document.querySelector("#result2").innerHTML =""
             document.querySelector("#result3").innerHTML =""
             document.querySelector("#result4").innerHTML =""
             document.querySelector("#result5").innerHTML =""
        });
}

function showImage(cityName) {
    let sunImage = document.getElementById('sunImage');
    let cloudsSunImage = document.getElementById('cloudsSunImage');
    let cloudsImage = document.getElementById('cloudsImage');
    let rainImage = document.getElementById('rainImage');
  
    if (cityName.toLowerCase() === 'karachi') {
        sunImage.style.display = 'block';  
        cloudsSunImage.style.display = 'none';  
        rainImage.style.display = 'none';  
        cloudsImage.style.display = 'none';  
    } else if (cityName.toLowerCase() === 'shanghai') {
        sunImage.style.display = 'none';  
        cloudsSunImage.style.display = 'block';  
        rainImage.style.display = 'none';  
        cloudsImage.style.display = 'none';  
    } else if (cityName.toLowerCase() === 'kabul') {
        sunImage.style.display = 'none';  
        cloudsSunImage.style.display = 'none';  
        rainImage.style.display = 'block';  
        cloudsImage.style.display = 'none';  
    } else if (cityName.toLowerCase() === 'istanbul') {
        sunImage.style.display = 'none';  
        cloudsSunImage.style.display = 'none';  
        sunImage.style.display = 'none';  
        cloudsImage.style.display = 'block';  
    }else{
        sunImage.style.display = 'none';  
        cloudsSunImage.style.display = 'none';  
        sunImage.style.display = 'none';  
        cloudsSunImage.style.display = 'none';  
    }
}