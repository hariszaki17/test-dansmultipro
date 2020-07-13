import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../store/actions';
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const emailHandler = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        dispatch(login(data))
        .then(result => {
            history.push('/positions')
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={ (e) => emailHandler(e) } value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={ (e) => passwordHandler(e) } value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button onClick={ (e) => submit(e) } type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default LoginForm