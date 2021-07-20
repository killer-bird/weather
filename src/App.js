import React,{useState, useEffect} from 'react'
import './App.css';
import SearchForm from "./components/searchForm";
import Temp from "./components/temp";
import Cityies from "./components/cityies";
import { transliterate as tr } from 'transliteration'
import WeatherDetails from "./components/WeatherDetails";

let cityies = (localStorage.getItem('cityies'))?localStorage.getItem('cityies').split(','):['Birmingham', 'Manchester', 'New York', 'California'];
console.log(cityies)

function App() {
    const [city, setCity] = useState('')
    const [weatherDetails, setweatherDetails]= useState('')
    const onSaveWeatherDetails = (weatherDetails)=>{
        setweatherDetails(weatherDetails)
        if (!cityies.includes(weatherDetails.name)){
            cityies.unshift(weatherDetails.name);
            cityies.pop();
            localStorage.setItem('cityies', cityies.join());
        }




    }

    const onSaveSearchValue = (value)=>{
        setCity(value)

    }


  return (
          <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
              <div className="row d-flex justify-content-center">
                  <div className="row card0">
                      <div className="card1 col-lg-8 col-md-7">
                          <div className="text-center"><img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png"/></div>
                          <div className="row px-3 mt-3 mb-3">
                          <Temp onSaveWeatherDetails={onSaveWeatherDetails} city={city}/>
                          </div>
                      </div>
                      <div className="card2 col-lg-4 col-md-5">
                          <SearchForm onSaveSearchValue={onSaveSearchValue}/>
                          <div className="mr-5">
                              {cityies.map((propscity, index )=> <Cityies onClick={() => setCity(propscity)} key={index} city={propscity}/>)}
                              <div className="line my-5"></div>
                              <p>Weather Details</p>
                              <WeatherDetails weatherDetails={weatherDetails}/>
                              <div className="line mt-3"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

  );
}

export default App;
