import React,{useState} from 'react'
import "./HireFromUs.css"
import diffcomp from "./diffcomp.png"
import { Link } from 'react-scroll'

function HireFromUs() {
    const [value, setValue]  = useState({
        fname: "",
        designation : "",
        cname : "",
        email : "",
        contact : ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValue((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
        console.log(value);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        setValue({
            fname: "",
            designation: "",
            cname: "",
            email: "",
            contact: ""
        })
        e.preventDefault();
    };
    return (
        <div>
            <div className="hire-first-div">
                <h1>Hire best in class engineers at no cost!</h1>
                <p>
                    Newton School students are ready to join your company and help you achieve high impact goals
                </p>
                <Link to="contact-div" smooth={true}>Start Hiring</Link>
            </div>
            <div className="hire-second-div">
                <p>Our hiring and referral partners</p>
                <img src={diffcomp} alt="" />
            </div>
            <div id="contact-div">
                <p>Fill in the form and we will get back to you!</p>
                <form onSubmit={handleSubmit}>
                    <div  className="hire-input-divs">
                        <input  type="text" value={value.fname} name="fname"  placeholder="Enter Full Name"  onChange={handleChange}/>
                    </div>
                    <div className="hire-input-divs">
                        <input type="text" value={value.designation} name="designation" placeholder="Designation" onChange={handleChange}/>
                    </div>
                    <div className="hire-input-divs">
                        <input type="text" value={value.cname} name="cname" placeholder="Company Name"  onChange={handleChange}/>
                    </div>
                    <div className="hire-input-divs">
                        <input type="email" value={value.email} name="email" placeholder="Business Email"  onChange={handleChange}/>
                    </div>
                    <div className="hire-input-divs">
                        <input type="number" value={value.contact} name="contact" placeholder="Contact Number" onChange={handleChange}/>
                    </div>
                    <div >
                        <input type="checkbox" name="checkbox" /><label>I agree to be contacted byNewton School</label>
                    </div>
                    <button className="hire-submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default HireFromUs