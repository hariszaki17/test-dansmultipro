import axios from 'axios'

export const SET_QUERY = 'SET_QUERY'
export const SET_USER = 'SET_USER'
export const SET_JOBS = 'SET_JOBS'
export const SET_JOB = 'SET_JOB'

export const setUser = (data) => {
    return { type: SET_USER, payload: data }
}
export const setJobs = (data) => {
    return { type: SET_JOBS, payload: data }
}
export const setQuery = (data) => {
    return { type: SET_QUERY, payload: data }
}
export const setJob = (data) => {
    return { type: SET_JOB, payload: data }
}

export const fetchJob = (data) => {
    return (dispatch => {
        return axios({
            method: "GET",
            url: "http://localhost:3001/positions/" + data
        })
        .then(result => {
            // console.log(result.data)
            dispatch(setJob(result.data))
        })
        .catch(err => {
            console.log(err)
        })
    })
}
export const fetchJobs = (data) => {
    return (dispatch => {
        // console.log(data)
        let url = "http://localhost:3001/positions?"
        let count = 0
        if (data) {
            for (let key in data) {
                if (data[key]) {
                    if (count > 0) {
                        url += '&'
                    }
                    url += `${key}=${data[key].replace(' ', '+')}`
                    count++
                }
            }
        }
        // console.log(url, '<<<<<<<<<<<<<<<<')
        return axios({
            method: "GET",
            url
        })
        .then(result => {
            console.log(result.data)
            dispatch(setJobs(result.data))
        })  
        .catch(err => {
            console.log(err)
        })
    })
}
export const login = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            return axios({
                method: 'POST',
                data,
                url: 'http://localhost:3001/login'
            })
            .then(result => {
                console.log(result.data)
                localStorage.token = result.data.token
                resolve(result.data)
                dispatch(setUser(result.data.email))
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
}