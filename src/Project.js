import {React, Component} from 'react'
import ProjectCard from './Components/ProjectCard'
import ChatBot from "./images/ChatBot.png";
import FoodDetect from "./images/FoodDetect.png";
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
                src={FoodDetect}
                text='Food Detect - AI Based Food Detection Recipe Web App'
                alt="Demo of Food Detect"
                description="Backend built with REST API and used third party APIs such as Clarifai API"
                GitPath='https://github.com/MAGNUSGAO/food-detect-api'
                WebsitePath="http://food-recognition-reactjs.herokuapp.com"
                language='React.js, Node.js, Express, PostgreSQL, CSS, BCrypt'
                displayLink='1'
                tags="Full-stack Web App, AI, Food"
                
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