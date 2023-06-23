import express from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();

const app = express()
app.use(cors());


app.get('/weather/:cityName', (req, res) => {
 console.log('Hello World!', new Date());


let weatherData = {
    karachi: {
        city: 'karachi',
        tempInC: 32,
        humidity: 40,
        high: 36,
        low: 22
    },
    shanghai: {
        city: 'shanghai',
        tempInC: 5,
        humidity: 18,
        high: 8,
        low: 3,
    
    },
    kabul: {
        city: 'kabul',
        tempInC: 22,
        humidity: 60,
        high: 26,
        low: 18,
    },
    istanbul: {
        city: 'istanbul',
        tempInC: 13,
        humidity: 23,
        high: 20,
        low: 12
    }
}
let userInputCityName = req.params.cityName.toLowerCase();
console.log("userInputCityName: ", userInputCityName);

let weatherDataToSend = weatherData[userInputCityName];

if (weatherDataToSend) {
    res.send(weatherDataToSend);
} else {
    res.status(404)
        .send(`weather data is not available for ${req.params.cityName}`);
}

})
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})