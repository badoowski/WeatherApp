const search = document.querySelector('#search')
        const searchBtn = document.querySelector('#img-button')
        const temp = document.querySelector('.temp')
        const city = document.querySelector('.city')
        const humidity = document.querySelector('.humidity')
        const wind = document.querySelector('.wind')
        const weatherIcon = document.querySelector('#weather-icon')
        const weatherBodyContainer = document.querySelector('.weather-body-container')
        const error = document.querySelector('.error')
        const container = document.querySelector('.container')

        const apiKey = "ba95d1a668e5be42d54697400a5ca807"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        const checkWeather = async (search) => {
            const response = await fetch(apiUrl + search + `&appid=${apiKey}`)
            if (response.status == 404) {
                error.style.display = 'block'
                weatherBodyContainer.style.display = 'none'

            } else {
                let weatherData = await response.json()
                city.innerHTML = weatherData.name
                temp.innerHTML = Math.floor(weatherData.main.temp) + '°C'
                wind.innerHTML = weatherData.wind.speed + ' km/h'
                humidity.innerHTML = weatherData.main.humidity + '%'

                if (weatherData.weather[0].main == 'Clouds') {
                    weatherIcon.src = './images/clouds.png'
                    container.style.backgroundImage = 'url(./images/clouds.gif)'
                    container.style.backgroundSize = 'cover'
                }
                else if (weatherData.weather[0].main == 'Clear') {
                    weatherIcon.src = './images/clear.png'
                    container.style.backgroundImage = 'url(./images/clear.gif)'
                    container.style.backgroundSize = 'cover'

                }
                else if (weatherData.weather[0].main == 'Rain') {
                    weatherIcon.src = './images/rain.png'
                    container.style.backgroundImage = 'url(./images/rain.gif)'
                    container.style.backgroundSize = 'cover'
                }
                else if (weatherData.weather[0].main == 'Drizzle') {
                    weatherIcon.src = './images/drizzle.png'
                    container.style.backgroundImage = 'url(./images/drizzle.gif)'
                    container.style.backgroundSize = 'cover'
                }
                else if (weatherData.weather[0].main == 'Mist') {
                    weatherIcon.src = './images/mist.png'
                    container.style.backgroundImage = 'url(./images/mist.gif)'
                    container.style.backgroundSize = 'cover'
                }
                error.style.display = 'none'
                weatherBodyContainer.style.display = 'block'
            }
        }
        searchBtn.addEventListener('click', () => {
            checkWeather(search.value)
        })