import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <div className="container" style={{ maxWidth: "25rem" }}>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
}

export default LoginPage