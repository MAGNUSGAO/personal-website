import {React, Component} from 'react'
import Cover2 from './Components/Cover2.js'
import './Contact.css'
import './Components/Introduction.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div><Cover2 sectionName="Contact Me"></Cover2>
            <br></br>
            <br></br>
            <div className="CardContainer ExperienceCardContainer">
            {/* <NavBar></NavBar> */}
            
                <h3 className="Reach">I'm always open to new opportunities, so don't hesitate to get in touch!</h3>
                <div className="SocialLinks">
                    {/* <a
                    class='youtube Red SocialIcon in-line'
                    href='https://www.youtube.com/channel/UCa-iQ0gx6M5zS_zVxD3vbcQ'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </a> */}
                    {/* <br></br> */}
                    <a
                    class='social-icon-link twitter TwitterBlue in-line SocialIcon'
                    href='https://twitter.com/GaoMagnus'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    {/* <h2 className="SectionTitle LightBlue in-line">    @GaoMagnus</h2> */}
                    </a>
                    {/* <br></br> */}
                    <a
                    class='social-icon-link LinkedInBlue SocialIcon in-line'
                    href='http://www.linkedin.com/in/m-m-gao'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' /><div className="Space in-line"></div>
                    {/* <h2 className="SectionTitle LightBlue in-line">   Mengyu Magnus Gao</h2> */}
                    </a>
                    <a
                    class='social-icon-link twitter LightBlue SocialIcon in-line'
                    href='mailto: magnus.gao@outlook.com'
                    target='_blank'
                    aria-label='Mail'
                    >
                    <i class="fas fa-envelope"></i>
                    {/* <h2 className="SocialDescription LightBlue in-line">   Magnus.Gao@outlook.com</h2> */}
                    </a>
                </div>
            {/* <Footer></Footer> */}
            </div>
            </div>);
    }
}
 
export default Contact;