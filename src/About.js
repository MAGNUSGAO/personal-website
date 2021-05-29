import {React, Component} from 'react'
// import Cover from './Components/Cover.js'
import Introduction from './Components/Introduction.js'
import './About.css'
import {Link} from 'react-scroll'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            {/* <NavBar></NavBar> */}
            {/* <Cover sectionName="About Me"></Cover> */}
            <br></br>
            <br></br>
            <Introduction></Introduction>

            <div class="button_cont" align="center">
                    <a class="VisitGitHubButton " href="https://linkedin.com/in/m-m-gao" target="_blank" rel="nofollow noopener">My LinkedIn Profile</a>
                    <a class="VisitGitHubButton " href="https://drive.google.com/drive/folders/1SViDOXPYR8lJKu3aAP1aOBnUqK75KTzL?usp=sharing" target="_blank" rel="nofollow noopener">My Resume</a>
                    <Link to='Contact' className="VisitGitHubButton" smooth={true} duration={800}>Let's Get in Touch!</Link>
            </div>
            <br></br>
            {/* <div className="Education CardContainer EducationCardContainer">
                <h1 className="SectionTitle blue">Education</h1>
                <h2 className="SectionTitle2 in-line">McGill University, Montreal, QC    </h2>
                <h2 className="in-line right">Sep 2020-Dec 2023</h2>
                <br></br>
                <h2 className="SectionTitle2">Bachelor's in Computer Science (GPA: 3.96/4.0)</h2>
                <h2 className="SectionDescription">Relevant Courses: Intro to CS, Calculus, Linear Algebra, Software Systems, Data Structures, Algorithms</h2>
            </div> */}
            {/* <div className="CardContainer ExperienceCardContainer">
                <h1 className="SectionTitle blue">Experience</h1>
                <div className="Experience1">
                    <h2 className="SectionTitle2 in-line">Web Developer    </h2>
                    <h2 className="in-line right">Feb 2021 - Present</h2>
                    <br></br>
                    <h2 className="SectionTitle2">Markham Stouffville Election District Association</h2>
                    <h2 className="SectionDescription">- Plan, manage, upgrade and redesign websites for various organizations</h2>
                    <h2 className="SectionDescription">- Saved more than $2000 by implementing paid features using HTML, CSS and JavaScript</h2>
                </div>
                <br></br>
                <div className="Experience2">
                    <h2 className="SectionTitle2 in-line">Data Analyst and Election Canvasser</h2>
                    <h2 className="in-line right">Apr 2019 - Nov 2019</h2>
                    <br></br>
                    <h2 className="SectionTitle2">Theodore Antony Campaign</h2>
                    <h2 className="SectionDescription">- Designed a name-classification program that is 53% more accurate than the original</h2>
                    <h2 className="SectionDescription">- Devised an action plan based on demographics data, securing more than 20000 votes</h2>
                    <h2 className="SectionDescription">- Trained and lead more than 12 new volunteers, expanded team size by 20%</h2>
                </div>
            </div> */}

            {/* <div class="button_cont" align="center">
                    <a class="VisitGitHubButton" href="/Project" target="_blank" rel="nofollow noopener">My Personal Projects</a>
            </div> */}

            

            {/* <div class="button_cont" align="center">
                <Link to='Contact' className="VisitGitHubButton" smooth={true} duration={800}>Let's Get in Touch!</Link>
            </div> */}

            {/* <Journey></Journey> */}

            {/* <Footer></Footer> */}
            </div>);
    }
}
 
export default About;