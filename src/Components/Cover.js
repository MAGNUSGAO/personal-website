import {React, Component} from 'react'
import './Cover.css';

class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className="Cover CoverBlackOverlay ">
                    <h2 className="CoverDescription">{this.props.sectionName}</h2> 
                </div>
            </div>
        
        );
    }
}
export default Cover;