import {React, Component} from 'react'
import Project from './Project.js'
import About from './About.js'
import FooterSimple from './Components/FooterSimple.js'
import Contact from './Contact.js'
import NavBar from './Components/NavBar.js'
import Hobbies from './Components/Hobbies.js'
import {Element} from 'react-scroll'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <NavBar></NavBar>
            <div id={'About'}>
                <Element id='About' name='About'>
                    <About></About>
                </Element>
            </div>
            
            <div id={'Project'}></div>
            <Element id='Project' name='Project'>
                <Project></Project>
            </Element>

            <Hobbies></Hobbies>

            <Element id='Contact' name='Contact'>
                <Contact></Contact>
            </Element>
            {/* <Footer></Footer> */}
            <FooterSimple></FooterSimple>
        </div>);
    }
}
 
export default Main;