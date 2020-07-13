import React, { useEffect } from 'react'
import { useParams, useHistory  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJob } from '../store/actions'

const DetailPage = (props) => {
    const job = useSelector(state => state.job)
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchJob(params.id))
    }, [ dispatch, params.id ])
    const history = useHistory()
    // const test = '<h1>WOYYY</h1>'
    console.log(job)
    return (
        <div className="" style={{ width: '100%', height: '100vh' }}>
            <div style={{ width: '100%' }}>
                <button onClick={ () => history.goBack() } className="btn btn-light bg-white px-3 m-1" style={{ fontSize: "16px" }}><i className="fa fa-arrow-left"></i> Back</button>
            </div>
            <div className="bg-light mx-4 p-2"  style={{ width: "100%" }}>
                <div className="bg-white px-4 d-flex flex-column justify-content-center align-items-start" style={{ width: "100%"}}>
                    <div style={{ borderBottom: "1px solid lightgrey", width: "100%" }}>
                        <p>{job.type} / {job.location}</p>
                        <h4>{job.title}</h4>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center" style={{ width: "100%" }}>
                        <div className="px-2" dangerouslySetInnerHTML={{__html: job.description}} style={{ width: "75%" }}>
                        </div>
                        <div className="px-2 py-2 d-flex flex-column justify-content-center align-items-center align-self-start" style={{ width: "25%" }}>
                            <div className="bg-light" style={{ width: "100%" }}>
                                <div style={{ width: "100%" }}>
                                    { job.company }
                                </div>
                                <div>
                                    <img src={ job.company_logo } alt={ job.company } style={{ objectFit: "cover", width: "100%", height: "100%" }} ></img>
                                    <a href={job.company_url} >{ job.company_url }</a>
                                </div>
                            </div>

                            <div className="bg-light py-5" style={{ width: "100%" }}>
                                <h4 className="p-2" style={{ backgroundColor: "white" }}>How to Apply</h4>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    Email your resume to
                                    <div dangerouslySetInnerHTML={{__html: job.how_to_apply}}>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage