import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import { Chart } from './Chart'
import moment from 'moment'
function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [showChart, setShowChart] = useState(false)

  const handleChange = e => {
    setCity(e.target.value)
  }

  const handleClick = e => {
    if (e.key === 'Enter' && city) {
      e.preventDefault()
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        if (!response.message) {
          const items = response.data.list
          let datesList = []
          let result = [] 
        
          items.forEach(item => {
            const date = moment.utc(item.dt, 'X').format('DD.MM.YYYY')
            
            datesList.push(date)
              result.push({
                name: date,
                uv: Math.round(+item.main.temp - 273.15)  
            })
          })
          setWeatherData(result)
          setShowChart(true)
        }
      })
      .catch(error => {
        console.log(error)
      })  
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <form>
          <input className="city-inp" type="text" 
                 onChange={handleChange} onKeyDown={handleClick} placeholder="Enter the city..."/>
        </form>
        {showChart && <Chart data={weatherData} />}
      </div>
    </div>
  )
}

export default App
