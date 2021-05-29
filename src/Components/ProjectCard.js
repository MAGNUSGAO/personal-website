import React from 'react'
import './ProjectCard.css';

export default function ProjectCard(props) {
    let link;
    if (props.displayLink=='1') {
        link = <div className="in-line"><a href={props.WebsitePath} target='_blank'><i class="fas fa-external-link-alt blue"></i></a></div>;
    } else {
        link = null;
    }
    return (
        <div className="ProjectCardContainer">
            <div className="Wrapper">
                <div className="LeftColumn">
                    <div>   
                        <img
                        className='ProjectCardImage'
                        alt={props.alt}
                        src={props.src}
                        />
                    </div>
                </div>
                <div className="RightColumn">
                    <div className="ProjectCardDescription">
                        <h3 className='blue'>{props.text}</h3>
                        <h5 className='ProjectDescription'>{props.description}</h5>
                        <div className="ProjectCardIcons">
                            <i class="fas fa-language blue"></i> 
                            <h5 className="in-line LanguageDescription">{props.language}</h5>
                            <br></br>
                            <i class="fas fa-tag blue in-line"></i>
                            <h5 className="in-line TagDescription">{props.tags}</h5>
                            <br></br>
                            <div className="ProjectLinks">
                                <a href={props.GitPath} target='_blank'>
                                    <i class="fab fa-github"></i>
                                </a>
                            {link}
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}