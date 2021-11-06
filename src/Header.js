import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
    return (

        <div className="headerDiv">
            <nav>
                <div className="logodiv">
                <Link to="/">
                <p><li><strong>Newton</strong>School</li></p>
                </Link>
                </div>
                <ul className="nav-links">
                    <Link to="/codingcontest">
                    <li>CodingContest</li>
                    </Link>
                    <Link to='/launchpad'>
                    <li>LaunchPad</li>
                    </Link>
                    <Link to='/hirefromus'>
                        <li>Hire from us</li>
                    </Link>
                    <Link to='/fees'>
                        <li>Fees</li>
                    </Link>
                </ul>
                <div className="logsignlinks">
                    <Link to="login">
                    <h3><li>LogIn</li></h3>
                    </Link>
                    <Link to="/signup" target="/">
                    <h3><li>SignUp</li></h3>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
