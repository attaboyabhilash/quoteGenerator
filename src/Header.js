import React from 'react'
import myLogo from './myMainLogo.svg'
import './index.css'

export default function Header() {
    return (
        <div className="headFCC">
            <img src={myLogo} alt="logo"/>
            <h1>Random Quote Generator</h1>
        </div>
    )
}