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
                        I love exploring new technologies and learning their uses.</h3>
                        {/* <h3 className="Description">
                        The amazing world of cloud computing, database and web applications are some of my favorite fields. 
                        Since our tools get better progressively, I think staying up to date with new technologies is essential, 
                        so that we can always solve technical challenges with the right tools.
                        </h3> */}
                        <h3 className="Description">
                        My current Major GPA is 4.0. Some of the courses that I have taken are: Data Structure and Algorithms, Computer Architecture, Software Systems, Discrete Math, Linear Algebra, and Calculus.
                        </h3>
                        <h3 className="LightBlue Title">My Work Experience</h3>
                        <h3 className="Description">
                        In Winter 2022, I interned at Genetec, a Security Company, as a full stack developer intern.
                        I worked with different technologies (including Microsoft Azure, C#, JavaScript) and testing frameworks. 
                        </h3>
                        <h3 className="Description"> 
                        In Summer 2022, I will work at Google Cloud Platform as a STEP software engineering intern. 
                        You may learn more about my work on my resume!
                        </h3>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}