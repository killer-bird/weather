import React,{useState, useEffect} from 'react'


import './searchForm.css'
const SearchForm = (props)=>{
    const [value, setValue] = useState('')
    const inputHandler= (event) =>{
        setValue(event.target.value)

    }

    const sumbitHandler = (event) =>{
        event.preventDefault();
        props.onSaveSearchValue(value)
        setValue('')
    }

    return(
        <>
            <form onSubmit={sumbitHandler}>
                <div className="row px-3"> <input type="text" value={value} onChange={inputHandler} name="location" placeholder="Another location" className="mb-5"/>
                   <div className={"fa fa-search mb-5 mr-0 text-center"}></div>
                </div>
            </form>
        </>
    )
}
export default SearchForm