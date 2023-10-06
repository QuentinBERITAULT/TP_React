import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherDisplay from './WeatherDisplay';
import './index.css'
import './App.css'

function App() {

    const [city, setCity] = React.useState('');
    const [weatherData, setWeatherData] = React.useState(null);
    const [chargement, setChargement] = React.useState(false);
    const [erreur, setErreur] = React.useState(false);


    const fetchWeather = async () => {
        setChargement(true);
        setErreur(false);
        try {
          const response = await fetch(`https://jb03dcnv74.execute-api.eu-west-1.amazonaws.com/Prod/weather/${city}`);
          const data = await response.json();
          const MajMinCity = data.city.charAt(0).toUpperCase() + data.city.slice(1).toLowerCase();
          const MajMinCondition = data.condition.charAt(0).toUpperCase() + data.condition.slice(1).toLowerCase();
          setWeatherData({...data, city:MajMinCity, condition:MajMinCondition});
          setCity('');
        } catch (error) {
          setErreur('Erreur lors de la récupération des données météo de cette ville')
          console.error('Erreur lors du fetch:', error);
        } finally {
          setChargement(false);
        }
      };

      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          fetchWeather();
        }
      };

    return (
    <div className="container">
        <button className="recherche" onClick={fetchWeather}><img src="./src/chercher.png" alt="Rechercher" width="15px" /></button>
        <span><input 
            type="text"
            value={city}
            placeholder="Rechercher" 
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
        /></span>
        {chargement && <p>Chargement des données en cours...</p>}
        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
        {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
    );
}
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);