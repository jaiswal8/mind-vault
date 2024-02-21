import React from 'react';
import '../MStyle.css';

function Header(){

    return(
        <div class="Header">
            <a class="active" href="#home">Home</a>
            <a href="#news">Notification</a>
            <a href="#contact">Settings</a>
            <a href="#about">Upload</a>
        </div>
    )
}

export default Header