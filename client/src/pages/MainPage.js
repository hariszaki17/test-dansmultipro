import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { fetchJobs } from "../store/actions";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import SearchPage from './SearchPage'
import DetailPage from './DetailPage'

const MainPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!localStorage.token) {
            history.push('/login')
        } else {
            dispatch(fetchJobs())
        }
    }, [history, dispatch])
    return (
        <>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <a href="/positions" className="navbar-brand"><b>Github</b> Jobs</a>
            </nav>
            <Route exact path="/positions">
                <SearchPage></SearchPage>
            </Route>
            <Route path="/positions/:id">
                <DetailPage></DetailPage>
            </Route>
        </>

        )
}

export default MainPage