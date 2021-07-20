import React,{useState, useEffect} from 'react'
import GotService from "../services/gotService";
import DateTime from "./dateTime";
import './temp.css'

const service = new GotService()
const Temp = (props) => {

    const [temp, setTemp] = useState('');
    const [cityName,setCityName] = useState('')
    const [timezone, setTimezone]= useState('')

    const getData = async ()=>{
        let weatherDetails = {}
        service.getData(props.city || localStorage.getItem('city') || 'Владикавказ')
            .then((data) => {
                weatherDetails = {
                    'name': data.name,
                    'clouds': data.clouds['all'],
                    'humidity': data.main.humidity,
                    'wind': data.wind.speed
                }
                console.log(weatherDetails.name)
                props.onSaveWeatherDetails(weatherDetails)
                setCityName(weatherDetails.name)
                localStorage.setItem('city', data.name)
                setTemp(Math.round(data.main.temp))
                setTimezone(data.timezone)
            })
    }

    useEffect(()=>{
        getData();


    },[props.city, ])


    return(
        <>
            <h1 className="large-font mr-3">{temp}&#176;</h1>
            <div className="d-flex flex-column mr-3">
                <h2 className="mt-3 mb-0">{cityName}</h2><DateTime timezone={timezone}/>
            </div>
        </>

    )
}
export default Temp