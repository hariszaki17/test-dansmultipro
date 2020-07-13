import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const history = useHistory()
    useEffect(() => {
        if (localStorage.token) {
            history.push('/positions')
        }
    }, [history])
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
            <div className="container" style={{ maxWidth: "25rem", borderRadius: "1rem", border: "1px solid lightgrey", padding: "2rem" }}>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage