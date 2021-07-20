import {React, Component} from 'react'
import './LandingPage.css';
// import Buttons from './Components/Buttons.js';
import { init } from 'ityped'
// Animation https://dev.to/narendersaini32/how-to-add-animated-typing-to-your-react-app-3bgl
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const typing = document.querySelector('#typing')
        init(typing, { showCursor: true, strings: ['Software Developer', 'McGill Student', 'City Explorer' ],typeSpeed: 80 })
    }
    render() { 
        return (
        <div className = "cover">
            <div className = "name">
                <h1>Magnus Gao</h1>
            </div>  
            <div id="typing" className = "typing">
            </div>
            <div className="Options">
                <Link to='/Main'><h2 className="Link">Main Page</h2></Link>
                
                {/* <a href='/Main'><h2 className="Link">Projects</h2></a>
                <Link to='/Main/#Contact'><h2 className="Link">Contact</h2></Link> */}
                {/* <a target="_blank" href='Blog' ><h2 className="Link">Blog</h2></a> */}
                {/* <a target="_blank" href='About' ><h2 className="Link">About</h2></a>
                <a target="_blank" href='Contact' ><h2 className="Link">Contact</h2></a> */}
                <a
                    class='social-icon-link in-line'
                    href='http://www.linkedin.com/in/m-m-gao'
                    target='_blank'
                    >
                    <h2 className="Link">LinkedIn</h2>
                </a>
                <a
                    class='social-icon-link in-line'
                    href='http://www.github.com/MAGNUSGAO'
                    target='_blank'
                >
                    <h2 className="Link">GitHub</h2>
                </a>
            </div>
            
        </div>)
        ;
    }
}
 
export default LandingPage;
