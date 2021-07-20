import React from 'react'


const Cityies = (props)=>{

    return(
        <p onClick={props.onClick} className="light-text suggestion">{props.city}</p>
    )
}
export default Cityies