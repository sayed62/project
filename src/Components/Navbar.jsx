import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Navbar() {
    const [pathName, setpathname] =useState(window.location.pathName)
return (
    <nav className="navbar navbar-expand-lg" style={{color: "white"}}>
                <div className="container">
                <Link onClick={() => {setpathname("/")}} className={pathName ==="/"? "  nav-link": "nav-link"} aria-current="page" to={"/"}>START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={() => {setpathname("/about")}} className={pathName ==="/about"? "active  nav-link": "nav-link"} aria-current="page" to={"/about"} style={{color: "white"}}>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => {setpathname("/PORTFOLIO")}} className={pathName ==="/PORTFOLIO"? "active nav-link": "nav-link"} aria-current="page" to={"/PORTFOLIO"} style={{color: "white"}}>PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={() => {setpathname("/contact")}} className={pathName ==="/contact"? "active nav-link": "nav-link"} aria-current="page" to={"/contact"} style={{color: "white"}}>CONATCT</Link>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
  )
}

