const weatherbtn = () =>{
    const inputField = document.getElementById('input-Field')
    const inputFieldText = inputField.value

    inputField.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&units=metric&appid=edd4505bafbfa147a6109937ce0afea7`
    fetch(url)
    .then(res => res.json())
    .then(Data => displayWeather(Data))
}

weatherbtn()

const displayWeather = weatherForecast =>{

    const resultWeather = weatherForecast.weather[0]
    const resultMain = weatherForecast.main
    const resultsys = weatherForecast.sys
    const cardid = document.getElementById('cardID')
    cardid.textContent =''
    const div = document.createElement('div')
    div.classList.add('carddiv')
    div.innerHTML = `<div  class="card cardClass mx-auto" style="max-width: 18rem;">
    <div class="card-header"><h5>${weatherForecast.name}(${resultsys.country})</h5></div>
    <div class="card-body text-dark">
      <h4 class="card-title">Temperature: ${resultMain.temp}<span class="cElement">°c</span></h4>
      <span class="card-text">Temperature-Max ${resultMain.temp_min}</span>
      <span class="card-text">Temperature-Max ${resultMain.temp_max}</span>
      <p class="card-text">Humidity: ${resultMain.humidity}</p>
      <p class="card-text d-inline">Sky: ${resultWeather.main}</p>
      <img class="d-inline" src="http://openweathermap.org/img/w/${resultWeather.icon}.png" alt="">
    </div>
    </div> 
    `
    cardid.appendChild(div)
    
}




















































// const weatherbtn = () =>{
//     const inputField = document.getElementById('input-Field')
//     const inputFieldText = inputField.value

//     inputField.value = ''
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldText}&appid=edd4505bafbfa147a6109937ce0afea7`
//     fetch(url)
//     .then(res => res.json())
//     .then(Data => displayWeather(Data.main))
// }

// const displayWeather = weatherForecast =>{
//     const cardid = document.getElementById('cardID')
//     cardid.textContent =''
//     const div = document.createElement('div')
//     div.classList.add('carddiv')
//     div.innerHTML = `<div  class="card mx-auto" style="max-width: 18rem;">
//     <div class="card-header">Weather Today</div>
//     <div class="card-body text-dark">
//       <h5 class="card-title">Temperature: ${weatherForecast.temp}</h5>
//       <span class="card-text">Temperature-Max ${weatherForecast.temp_min}</span>
//       <span class="card-text">Temperature-Max ${weatherForecast.temp_max}</span>
//       <p class="card-text">Humidity: ${weatherForecast.humidity}</p>
//       <p class="card-text">predict: ${weatherForecast.main}</p>
//     </div>
//     </div> 
//     `
//     cardid.appendChild(div)
    
// }