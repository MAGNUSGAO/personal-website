import {React, Component} from 'react'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import ProjectCard from './Components/ProjectCard'
import ChatBot from "./images/ChatBot.png";
import Calculator from "./images/Calculator.png";
import TesterImage from "./images/Tester.png";
import Cover from './Components/Cover.js'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            {/* <NavBar></NavBar> */}
            <Cover sectionName="Select Projects"></Cover>
            <div>
                
                <ProjectCard
                src={ChatBot}
                text='ADM AI ChatBot'
                alt="ChatBot"
                description="Team project built during McHacks21 that focuses on improving students' mental health during COVID-19"
                GitPath='https://github.com/MAGNUSGAO/ADMChatBot'
                WebsitePath="http://3.23.186.95"
                language='HTML, CSS, Python (Backend: Flask)'
                displayLink='1'
                tags="AI, TensorFlow, Backend, Mental Health"
                
                ></ProjectCard>
                <ProjectCard
                src={TesterImage}
                text='COMP250 Student Testers'
                alt="Tester"
                description="10000+ lines Student collaborative GitHub testers to test the assignment code, ensuring a high average"
                GitPath='https://github.com/MAGNUSGAO/COMP250-A1-TEST'
                language='Java'
                displayLink='0'
                tags="Testing, Coursework"
                ></ProjectCard>

                <ProjectCard    
                src={Calculator}
                text='Calculator'
                alt="Calculator"
                description="A Simple Calculator Built Using ReactJS and Other JavaScript Features"
                GitPath='https://github.com/MAGNUSGAO/React_Calculator'
                WebsitePath="https://magnusgao.github.io/React_Calculator/"
                language='CSS, JavaScript (Frontend: ReactJS)'
                displayLink='1'
                tags="Fun, Math, Calculator"
                
                ></ProjectCard>

                <div class="button_cont" align="center">
                    <a class="VisitGitHubButton" href="https://github.com/MAGNUSGAO" target="_blank" rel="nofollow noopener">More Projects on GitHub</a>
                </div>
            </div>

            {/* <Footer></Footer> */}
            </div>
            );
    }
}
 
export default Project;