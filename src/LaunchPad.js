import React from 'react'
import { courseData} from "./data"
import { Link } from 'react-router-dom'
import "./Launchpad.css"
import launchpadimg from "./launchpadimg.webp"
import SignUp from "./SignUp"
function LaunchPad() {
    console.log(courseData)
    return (
        <>
        <div className="launchpad-firstdiv">
            <div className="lauchpad-first-textdiv">
                    <p>Start from scratch & get tech jobs</p>
                    <Link to="/signup">
                        <button className="launchpad-first-button">Get Started</button>
                        </Link>
            </div>
            <img src={launchpadimg} alt=""/>
        </div>
        <div className="cards-div">
            {
                courseData.map(course => {
                    return (
                        <div  className="course-card" key={course.id}>
                            <h2>{course.title}</h2>
                            <p>{course.instructor}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default LaunchPad
