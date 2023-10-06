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
          setErreur('Erreur lors de la récupération des données météo')
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

      const getCityAPIGeo = async (latitude, longitude) => {
        try {
          const response = await fetch(`https://jb03dcnv74.execute-api.eu-west-1.amazonaws.com/Prod/geo?lon=${longitude}&lat=${latitude}`);
          const data = await response.json();
          const cityName = data.city;
          setCity(cityName);
        } catch (error) {
          setError('Erreur lors de la récupération du nom de la ville à partir des coordonnées.');
          console.error('Erreur coordonnées:', error);
        }
      };

      const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function (position) {      
              var latitude = position.coords.latitude;
              var longitude = position.coords.longitude;
              getCityAPIGeo(latitude, longitude);
            }, 
            (err) => console.log(err)
            );    
        }
      };

    return (
    <div className="container">
        <button className="recherche" onClick={fetchWeather}>
            <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em" width="1.5em">
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
        </button>
        <span>
            <input 
                type="text"
                value={city}
                placeholder="Entrez une ville" 
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </span>
        <br />
        {chargement && <p>Chargement des données en cours...</p>}
        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
        {weatherData && <WeatherDisplay data={weatherData} />}
        <br />
        <button className="loc" onClick={getLocation}>Obtenir ma localisation</button>
    </div>
    );
}
  
ReactDOM.createRoot(document.getElementById("root")).render(<App />);