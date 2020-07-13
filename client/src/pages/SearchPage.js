import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import JobList from '../components/JobList'
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/actions";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const SearchPage = () => {
    const dispatch = useDispatch()
    const queryData = useQuery()
    const query = {
        description: queryData.get('description'),
        location: queryData.get('location'),
        full_time: queryData.get('full_time') 
    }
    useEffect(() => {
        dispatch(setQuery)
    }, [dispatch])

    return (
        <>
            <SearchBar></SearchBar>
            <JobList query={query}></JobList>
        </>
    )
}

export default SearchPage