import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/actions"

const SearchBar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [fullTime, setFullTime] = useState('off')

    const decsHandler = (e) => {
        e.preventDefault()
        setDescription(e.target.value)
        console.log(description)
    }
    const locHandler = (e) => {
        e.preventDefault()
        setLocation(e.target.value)
        console.log(location)
    }
    const fullTimeHandler = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        if (fullTime === 'off') {
            setFullTime('on')
        } else {
            setFullTime('off')
        }
    }

    const search = (e) => {
        e.preventDefault()
        let data = {
            description,
            location,
            full_time: fullTime
        }
        let count = 0
        let url = '/positions?'
        for (let key in data) {
            if (data[key]) {
                if (count > 0) {
                    url += '&'
                }
                url += `${key}=${data[key].replace(' ', '+')}`
                count++
            }
        }
        console.log(url)
        dispatch(setQuery(data))
        history.push(url)
    }


    return (
        <div className="bg-light" style={{ width: "100vw", marginBottom: "2rem" }}>
            <form className="d-flex flex-row justify-content-between align-items-center px-5 py-1">
                <div className="form-group">
                    <label htmlFor="inputDecs">Job Description</label>
                    <input onChange={ (e) => decsHandler(e) } value={description}  type="text" className="form-control" id="inputDecs" aria-describedby="descHelp" placeholder="Enter description"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputLocation">Location</label>
                    <input onChange={ (e) => locHandler(e) } value={location} type="text" className="form-control" id="inputLocation" placeholder="Enter location"></input>
                </div>
                <div className="form-check">
                    <input onChange={ (e) => fullTimeHandler(e) } value={fullTime}  type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Full time only</label>
                </div>
                <button onClick={ (e) => search(e) } type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    )
}

export default SearchBar