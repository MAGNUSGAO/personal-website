import React from 'react'
import './Introduction.css';
import Me from "../images/Me.jpg"

export default function Introduction() {
    return (
        <div className="IntroductionContainer">
            <div className="Wrapper">
                <div className="IntroductionLeftColumn">
                    <div>   
                        <img
                        className='IntroductionImage'
                        alt="Magnus Gao"
                        src={Me}
                        />
                    </div>
                </div>
                <div className="IntroductionRightColumn">
                    <h3 className="LightBlue Title">Hello, I am Magnus Gao!</h3>
                    <div className="Introduction">
                        <h3 className="Description">I am a second year Software Engineering student at McGill University. 
                        I started programming in high school since I love solving technical challenges. 
                        I am good at translating the users' demands into small technical problems, and then building the product.</h3>
                        {/* <h3 className="Description">
                        The amazing world of cloud computing, database and web applications are some of my favorite fields. 
                        Since our tools get better progressively, I think staying up to date with new technologies is essential, 
                        so that we can always solve technical challenges with the right tools.
                        </h3> */}
                        <h3 className="Description">
                        My current Major GPA is 4.0. Some of the courses that I have taken are: Intro to Computer Science, Software Systems, Data Structures, Discrete Math, Linear Algebra, and Calculus.
                        </h3>
                        <h3 className="LightBlue Title">My Work Experience</h3>
                        <h3 className="Description">
                        Currently I am working for the Markham Stouffville Election District Association as Frontend Web Developer. 
                        I implemented originally paid featuresnative HTML, CSS and JavaScript, which saved the organization more than $2000.
                        Previously I worked for the same organization as a data analyst, 
                        where I built a name-classification program that is 53% more accurate than the original program.
                        </h3>
                        <h3 className="Description"> 
                        I also working for CourseLnk as a backend Software Engineer. I built over 30 web scrapers using Python and libraries, 
                        retrieving more than 5000 course descriptions from 30+ universities. 
                        Furthermore, I optimized runtime of the programs from O(m*n) to O(n).
                        </h3>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}