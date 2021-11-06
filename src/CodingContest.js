import React from 'react'
import cc1 from "./cc1.webp"
import "./CodingContest.css"
import { Link } from 'react-router-dom'
function CodingContest() {
    return (
        <div>
            <div className="cc-firstDiv">
                <div className="cc-textdiv">
                    <p>India's PremierCoding Challenge</p>
                        <li>Free Registration</li>
                        <li>Cash Prizes & Gift Vouchers worth Rs.30,000</li>
                        <li>Access to Free Coding Courses</li>
                        <Link to="/signup">
                            <button className="cc-button">Register</button>
                        </Link>
                </div>
                <div className="cc-imgdiv">
                    <img src={cc1} alt=""/>
                </div>
            </div>
            <div className='cc-seconddiv'>
            </div>
        </div>
    )
}

export default CodingContest
