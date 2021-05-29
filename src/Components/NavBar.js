import {React, Component} from 'react'
import './NavBar.css';
// import { Element } from 'react-scroll'
import {Link} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class NavBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {
        nav:false
    }


    render() { 
        return (
            <div>
                <div className='Nav'>
                    <ul className="NavUL">

                        <li><Link to='Contact' className="NavLink" smooth={true} duration={800}>Contact Me</Link></li>
                        <li><Link to='Project' className="NavLink" smooth={true} duration={800}>Projects</Link></li>
                        {/* <li><Link to='Contact' className="NavLink" smooth={true} duration={800}>Blogs</Link></li> */}
                        <li><Link to='About' className="NavLink" smooth={true} duration={800}>Introduction</Link></li>
                        <li className="myName" onClick={(() => scroll.scrollToTop())}>Magnus Gao</li>
                    </ul>

                    {/* This is the old NavBar */}
                    {/* <ul className="NavUL">
                        <li><a target="_blank" href='Contact' className="Nav">Contact</a></li>
                        <li><a target="_blank" href='About' className="Nav">About</a></li>
                        {/* <li><a target="_blank" href='Blog' className="Nav">Blog</a></li> */}
                        {/* <li><a target="_blank" href='Project' className="Nav">Projects</a></li>
                        <li ><a target="_blank" href='Home' className="myName">Magnus Gao</a></li>
                    </ul> */}


                </div>
                
            </div>
        
        );
    }
}
 
export default NavBar;