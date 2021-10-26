import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <>
        
            <nav className={ `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">Text Tools</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Profile</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Text Tools</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/number">Number</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contactme">Contact Me!</Link>
                        </li>
                        
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="switch"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable {props.mode === "light" ?"Dark":"Light"} Mode</label>
                    </div>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}
