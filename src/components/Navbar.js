// import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

import React, { useState } from 'react'

export default function Navbar(props) {

    // const [colorr, setcolorr] = useState("")

    // if (props.mode == "primary") {
    //     setcolorr("danger")
    // }

    // else {
    //     setcolorr(props.mode)
    // }

    // if (props.mode==="primary"){
    //     var bgcolor="danger"
    //     var color="success"
    //     console.log("H")
    // }
    // else{
    //     color=props.mode
    //     bgcolor=props.mode
    // }

    if(props.mode=="success"){
        var color="light"
    }
    else if(props.mode=="dark"){
        color="primary"
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${color} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand text-heading" href="/"><b className={"text-heading"}>{props.title}</b> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">{props.aboutText}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div> */}
                    <button className="btn rounded bg-success mx-2 px-4 py-4" onClick={() => {
                        props.toggleMode("success")
                    }}></button>
                    
                    <button className="btn rounded bg-warning mx-2 px-4 py-4" onClick={() => {
                        props.toggleMode("warning")
                    }}></button>
                    <button className="btn rounded bg-dark mx-2 px-4 py-4" onClick={() => {
                        props.toggleMode("dark")
                    }}></button>
                    <button className="btn rounded bg-light mx-2 px-4 py-4" onClick={() => {
                        props.toggleMode("light")
                    }}></button>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
};