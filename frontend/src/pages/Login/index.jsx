import React, { useState } from "react"
import './Login.css'
import { Link, useNavigate } from "react-router-dom" 
import Validation from "./LoginValidation"
import {useAuth} from '../../hooks/AuthProvider'


function Login() {
    const [user, setUser] = useState({ 'username': '', 'password': "" })
    const auth = useAuth();

    const handleSignIn = (user) => {
        auth.loginAction(user);
    }
    
    
    return (
        <div className="BackGround">
            <div className="container">
            <div className="flex-1"></div>
            <div className="flex flex-1 justify-center items-center">
                <div className="auth-form-container mt-2">
                    <label htmlFor="form" className="heading1">Login</label>
                        <label htmlFor="usernam"  className="label">Email</label>
                        <input onChange={(e) => {
                            setUser((current) => ({
                                ...current, [e.target.name]:e.target.value
                                }))
                        }} type="email" placeholder="Your Email Address..." name="username" className="input"/>
                        <label htmlFor="password" className="label">Password</label>
                        <input onChange={(e) => {
                            setUser((current) => ({
                                ...current, [e.target.name]:e.target.value
                                }))
                        }}  type="password" placeholder="Password..." name="password" className="input"/>  
                        <button type="submit" onClick={() => {
                            handleSignIn(user)
                        }} className="login-button bg-black" >Sign in</button>
                        <div className="flex justify-center items-center">
                            <div className="line-horizontal mr-0 mt-2"></div>
                        </div>
                    <Link to='/register' className="link-btn">Don't have an account? Register here.</Link>
                </div>
            </div>
            
            <div className="flex-1"></div>
        </div>
        </div>
       
    )
}

export default Login;