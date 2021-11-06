import React from 'react'
import "./Fees.css"
import homeoffice1 from "./homeoffice1.jpeg"
import laptoppic from "./laptoppic.png"
import calendarpic from "./calendarpic.png"
import handpic from "./handpic.svg"
function Fees() {
    return (
        <div>
            <div className="fees-introdiv">
                <h2>Newton School's</h2>
                <p>
                    Income Sharing Agreement (ISA)
                </p>
            </div>
            <div className="fees-isa-def">
                <div className='fees-isa-def-img'>
                    <img src={homeoffice1} alt="" height="200px"/>
                </div>
                <div className="fees-isa-def-text-div">
                <h1>
                    What is ISA?
                </h1>
                <p>
                    With Newton School's Income Share Agreement (ISA), a student can enroll and complete the course by paying absolutely nothing and can get placed in one of the top notch companies, but agrees to pay us back the fees over a period of 36 months. This way students can learn effectively without pressure of down payment in the starting.*
                </p>
                </div>
            </div>
            <div>
                <div id="about-heading">3 things to know about ISA</div>
            <div className="fees-about-isa-div">
                <div className="fees-about-isa">
                    <img src={laptoppic} alt="" height="200px" width="250px" />
                    <h3>Pay ₹0 tuition fee until you land a high paying job</h3>
                    <p>                   
                        Newton School covers your tuition costs until you make at least the minimum guaranteed amount. There's no down payment.
                    </p>
                </div>
                <div className="fees-about-isa">
                    <img src={calendarpic} alt="" height="200px" width="250px" />
                        <h3>Pay a fixed amount over a period of 36 months</h3>
                        <p>
                            After you land a job of or above the minimum guaranteed CTC, then only you have to pay a fixed amount (as decided at the start) over a period of 36 months.
                    </p>
                </div>
                <div className="fees-about-isa">
                    <img src={handpic} alt="" height="200px" width="250px" />
                    <h3>Stop paying once you reach the cap</h3>
                    <p>
                            You're 100% free from any obligation to us once you've reached the cap or the payment schedule ends.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Fees