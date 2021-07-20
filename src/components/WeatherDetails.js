import React,{UseState} from 'react'

const WeatherDetails = (props) =>{
    console.log(props.weatherDetails)
    const {clouds, humidity, wind} = props.weatherDetails
    return(
        <>
            <div className="row px-3">
                <p className="light-text">Cloudy</p>
                <p className="ml-auto">{clouds}%</p>
            </div>
            <div className="row px-3">
                <p className="light-text">Humidity</p>
                <p className="ml-auto">{humidity}%</p>
            </div>
            <div className="row px-3">
                <p className="light-text">Wind</p>
                <p className="ml-auto">{wind}km/h</p>
            </div>
        </>
    )
}
export default WeatherDetails;