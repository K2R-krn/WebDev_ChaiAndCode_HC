// You can only grab input element once the DOM is loaded 

document.addEventListener('DOMContentLoaded', () =>{

    
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const tempDisplay = document.getElementById("temperature");
    const descriptionDisplay= document.getElementById("description");
    const errorMessage= document.getElementById("error-msg");
    // const API_KEY = process.env.API_OPENWEATHER;
    const API_KEY = '69904d16f4b536a3d93485b8b538fe71';



    // Now when someone click on button then we want action
    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if(!city) return;

        // It may throw an error
        // Server/db is always in another continent
        // ie try to wrap it in a safe zone

        try{
            const weatherData = await fetchWeatherData(city)   // Now as it gonna take timme  
            displayWeatherData(weatherData);
        }catch (error){
            showError("City Not found ! Please try again.");
        }

    });

    async function fetchWeatherData(city){
        // gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);

        if(!response.ok){
            throw new Error("City not Found !! ");
        }
        const data = await response.json();
        return data;

    }

    function displayWeatherData(weatherData){
        // display the data
        console.log(weatherData);
        const {name, main, weather} = weatherData; 
        cityNameDisplay.textContent = name;
        
        

        tempDisplay.textContent = `Temperature : ${main.temp} °C`;
        descriptionDisplay.textContent = `Description : ${weather[0].description}`;

        // Unlock Display
        // Show weather info and hide error message if elements are found
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError(errorMsg){
        // errorMessage.textContent = errorMsg || "An error occurred. Please try again later.";
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
       
    }

})