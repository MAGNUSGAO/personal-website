import {React} from 'react'
import '../About.css'
import WoodWork from "../images/Carpentry.JPG";
import BookShelf from '../images/BookShelf.JPG'
import Ball from '../images/Ball2.jpg'
import UrbanGeography from '../images/UrbanGeography.JPG'


export default function Hobbies() {
    return (
        <div>
            <div className="CardContainer ExperienceCardContainer">
                <h1 className="SectionTitle blue">Non-Tech Hobbies</h1>
                <div className="HobbiesContainer in-line">
                    <img src={Ball} alt="Soccer" className="HobbiesDisplay"></img>
                    <h2 className="MiddleText WhiteColor">Soccer</h2>
                    
                </div>
                <div className="HobbiesContainer in-line">
                    <img src={UrbanGeography} alt="Urban Geography" className="HobbiesDisplay"></img>
                    <h2 className="MiddleText WhiteColor">Toronto, ON</h2>
                </div>
                <div className="HobbiesContainer in-line">
                    <img src={WoodWork} alt="WoodWorking" className="HobbiesDisplay"></img>
                    <h2 className="MiddleText WhiteColor">Making a Subway Map</h2>
                </div>
                <div className="HobbiesContainer in-line">
                    <img src={BookShelf} alt="Reading" className="HobbiesDisplay"></img>
                    <h2 className="MiddleText WhiteColor">Favorite Books</h2>
                </div>
                <div className="SubtitleContainer">
                    <h2 className="Subtitle in-line left1">Soccer</h2>
                    <h2 className="Subtitle in-line left2">Urban Geography</h2>
                    <h2 className="Subtitle in-line left3">Woodworking</h2>
                    <h2 className="Subtitle in-line left4">Reading</h2>
                </div>
            </div>

            <div className="CardContainer ExperienceCardContainer">
                <h1 className="SectionTitle blue">Favorite Quote</h1>
                <h2 className="SectionTitle2 Quote">"Origin of Genius is 1 Percent Inspiration and 99 Percent Perspiration." -Thomas Edison</h2>
            </div>
        </div>
    )
}
