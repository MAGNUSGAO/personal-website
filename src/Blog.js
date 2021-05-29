import {React, Component} from 'react'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import Cover from './Components/Cover.js'
import './App.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <NavBar></NavBar>
            <Cover sectionName="Blog (Under Construction)"></Cover>
            <Footer></Footer>
        </div>
            );
    }
}
 
export default Blog;