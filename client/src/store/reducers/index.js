import { SET_USER, SET_JOBS, SET_QUERY, SET_JOB } from "../actions";

const initialstate = {
    user: '',
    jobs: [],
    query: {},
    job: {}
}

const reducer = (state = initialstate, action) => {
    const { type, payload } = action
    if (type === SET_USER) {
        return { ...state, user: payload }
    } else if (type === SET_JOBS) {
        return { ...state, jobs: payload }
    } else if (type === SET_QUERY) {
        return { ...state, query: payload }
    } else if (type === SET_JOB) {
        return { ...state, job: payload }
    }
    return state
}

export default reducer