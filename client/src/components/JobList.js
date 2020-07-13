import React, { useEffect } from 'react'
import JobCard from './JobCard'
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/actions";

const JobList = () => {
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs)
    const query = useSelector(state => state.query)

    useEffect(() => {
        dispatch(fetchJobs(query))
    }, [dispatch, query])

    return (
        <div className="container d-flex justify-content-center align-items-center py-2 bg-light" style={{ maxWidth: "98vw" }}>
            <div className="container py-2 bg-white" style={{ maxWidth: "98vw" }}>
                <h3 className="pb-1" style={{ borderBottom: "1px solid grey" }}>Job List</h3>
                {jobs.map((el, index) => {
                    return <JobCard key={el.id} data={{ id: el.id, location: el.location, full_time: el.type, title: el.title, post: el.created_at, description: el.company }}></JobCard>
                })}
            </div>
        </div>
    )
}

export default JobList