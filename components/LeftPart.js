import React,{useEffect, useState} from 'react';

const LeftPart= () =>{

    const pTag= {
        float:'left'
    }

    const [username, setUsername]= useState('');
    useEffect(()=>{
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    },[])

    

    return(
        <p style={pTag}>Hi, {username}</p>
    )
}

export default LeftPart