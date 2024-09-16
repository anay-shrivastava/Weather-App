const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime =document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

 async function getData(cityName) {
  const Promise =await fetch(
    `http://api.weatherapi.com/v1/current.json?key=30b457e98a594a0fae6105632240409&q=${cityName}&aqi=yes`
);

return await Promise.json()
}

button.addEventListener("click", async () =>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = `${result.location.localtime}`
    cityTemp.innerText = `${result.current.temp_c}`
})


