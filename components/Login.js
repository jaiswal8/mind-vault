import React, {useEffect, useState} from 'react';
import { useNavigate, } from 'react-router-dom';


const Login= () =>{
    const [username, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    function handleRedirect(){
        localStorage.setItem('username', username);
        navigate("/Feed");
    }

    return(
        <div>
        <div class="row" >
            User Name
        </div>
        <div class="row">
            <input type="text" placeholder="User Name" value={username} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
        <div class="row">
            Password
        </div>
        <div class="row">
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div class="row">
            <button onClick={handleRedirect}>Login</button>
        </div>
        </div>
    )
};

export default Login