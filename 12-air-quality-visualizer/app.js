;(() => {
  const API_KEY = ''

  const fetchAirQuality = async ({ country, state, city }) => {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`,
    )
    const {
      data: {
        current: { weather, pollution },
      },
    } = await response.json()

    return {
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.wd,
      aqi: pollution.aqius,
    }
  }

  const displayAirQuality = ({
    city,
    state,
    country,
    aqi,
    temperature,
    humidity,
    wind,
  }) => {
    const cityElement = document.querySelector('.city')
    const stateCountryElement = document.querySelector('.state-country')
    const aqiElement = document.querySelector('.aqi > h1')
    const temperatureElement = document.querySelector('.temperature')
    const humidityElement = document.querySelector('.humidity')
    const windElement = document.querySelector('.wind')

    cityElement.innerText = city
    stateCountryElement.innerText = `${state}, ${country}`
    aqiElement.innerText = aqi
    temperatureElement.innerText = `Temp: ${temperature}`
    humidityElement.innerText = `Humidity: ${humidity}%`
    windElement.innerText = `Wind: ${wind} m/s`
  }

  const setAirQualityColor = (aqi) => {
    if (aqi <= 50) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--good-aqi-color)',
      )
    } else if (aqi <= 100) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--medium-aqi-color)',
      )
    } else {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--bad-aqi-color)',
      )
    }
  }

  const run = async () => {
    const city = 'Sathon'
    const state = 'Bangkok'
    const country = 'Thailand'

    const { aqi, temperature, humidity, wind } = await fetchAirQuality({
      country,
      state,
      city,
    })

    displayAirQuality({
      city,
      state,
      country,
      aqi,
      temperature,
      humidity,
      wind,
    })

    setAirQualityColor(aqi)
  }

  run()
})()
