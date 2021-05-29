import {React, Component} from 'react'
import './Cover.css';

class Cover2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="Cover2 CoverBlackOverlay ">
                    <h2 className="CoverDescription">{this.props.sectionName}</h2> 
                </div>
            </div>
        
        );
    }
}
export default Cover2;