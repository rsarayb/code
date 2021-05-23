const btn = document.querySelector(".btn");
const ciudad = document.querySelector(".ciudad");
const cityName = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const feelsLike= document.querySelector(".feels-like");
const humedad = document.querySelector(".humedad");
const uvIndex = document.querySelector(".uv-index");
const cloud = document.querySelector(".cloud");
const pais= document.querySelector(".country-name");



btn.addEventListener("click", function () {

    temp.textContent = "";
    uvIndex.textContent = "";
    feelsLike.textContent = "";
    uvIndex.textContent = "";
    cloud.textContent = "";
    humedad.textContent = "";
    pais.textContent = "";

    fetch("http://api.weatherstack.com/current?access_key=1e3c582a9701bf809d7249d262ccdfdb&query="+ciudad.value)
    
    .then(response => response.json())
    .then(data => {
        cityName.textContent = `Ciudad: ${data.location.name}, País: ${data.location.country}`;
        temp.textContent = data.current.temperature + " °C";
        feelsLike.textContent = data.current.feelslike + " °C";
        uvIndex.textContent = data.current.uv_index + " nm";
        cloud.textContent = data.current.cloudcover;
        humedad.textContent = data.current.humidity;
    })

})




