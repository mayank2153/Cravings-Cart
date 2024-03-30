import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setLogOut } from "../utils/authSlice";
import loginImg from "../assets/img/login_character.png"
const Auth = () => {
    const [userNameText, setUserNameText] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (userNameText && userPassword) {
            dispatch(setUsername(userNameText));
            dispatch(setPassword(userPassword));
        }
        // Add logic for displaying error message or handling invalid credentials
    }
    const handleLogout=()=>{
        dispatch(setLogOut())
    }
    const userName = useSelector((state) => state.auth.username);
    const userPass = useSelector((state) => state.auth.password);
    console.log("user", userName);
    console.log("pass", userPass);

    return (
        <div className='auth'>
            <img src={loginImg} className='login-img'></img>
            {!userName && (
                <div className='user-log-info'>
                    <input
                        type='text'
                        value={userNameText}
                        onChange={(e) => { setUserNameText(e.target.value) }}
                        placeholder='User Name'
                        className='user-log-info-field'

                    />
                    <input
                        type='password'
                        value={userPassword}
                        onChange={(e) => { setUserPassword(e.target.value) }}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleLogin() }}
                        placeholder='Password'
                        className='user-log-info-field'
                    />
                    <button onClick={handleLogin} className='login-btn'>Login</button>
                </div>
            )}
            {userName && (
                <>
                    <button onClick={handleLogout} className='login-btn'>LogOut</button>
                </>
            )
            }
        </div>
    );
}

export default Auth;
