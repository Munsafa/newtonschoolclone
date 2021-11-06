import React from 'react'
import homepage1 from './homepage1.webp'
import diffcomp from "./diffcomp.png"
import { Link } from 'react-router-dom'
import "./Home.css"
function Home() {
    return (
        <div>        
            <div className="home-maindiv">
                <div className="home-img-text-div"> 
                <div className="home-textdiv">
                <h1>The Ultimate step towards your dream <span className="home-jobspan">Job</span></h1>
                <p>₹0 fee till placement</p>
                        <Link to="/signup" className="home-signup-btn"><button className="home-applybtn">Apply now for Free</button>
                        </Link>
                
            </div>
            <div>
                <img src={homepage1} alt=""/>
            </div>
                </div>
        </div  >
        <div className="home-company-name-div">
            <h1>Newton School's students are working in <span className="home-jobspan">top companies</span></h1>
            <img src={diffcomp} alt="" />
        </div>
        </div>
    )
}

export default Home
