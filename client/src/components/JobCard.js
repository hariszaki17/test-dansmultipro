import React from 'react'
import { useHistory } from "react-router-dom";
import './JobCard.css'

const JobList = (props) => {
    const history = useHistory()
    const { id, title, description, full_time, location, post } = props.data
    const toDetail = (e) => {
        e.preventDefault()
        history.push(`/positions/${id}`)
    }
    return (
        <div onClick={ (e) => toDetail(e) } className="job-card py-1 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid grey", width: "100%" }}>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <p>{title}</p>
                <p>{`${description} - ${full_time}`}</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-end">
                <p>{ location }</p>
                <p>{ post }</p>
            </div>
        </div>
    )
}

export default JobList