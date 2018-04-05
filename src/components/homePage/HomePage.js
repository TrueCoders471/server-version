import React from 'react';
import {Link} from 'react-router';
import './homePage-Styles.css';
class HomePage extends React.Component {
    // alternateSplashImage(){
    //     let myMood= document.getElementById("Jumbo-Image");
    //     let images=[
    //         "https://609a44a6cdb4586e9598-283665da9ac5a1b900d87ba1896f28bb.ssl.cf1.rackcdn.com/Radford-University-21.jpg",
    //         "https://cdn.lynda.com/course/373782/373782-636247511734821922-16x9.jpg"
    //     ];
    //
    //     function change(){
    //         myMood.src = images.reverse()[0];
    //     }
    //
    //     setInterval(change, 5000);
    // }
    render() {
        return (
            <div className="HomePageView-Container">
            <div id = "jumbo-Container">
                    <img id = "Jumbo-Image"
                         src = {require ('./../../public/images/homepage.jpg')}
                         alt="View of the College of Humanities and Behavioral Sciences with students walking around"/>
                    <div id= "jumbo-caption-container">
                        <jumbo-text>Welcome To The CAS Student Notes Hub</jumbo-text>
                    </div>

            </div>
                <div id ="LowerHomepageView-Container">
                    <a href="signup">
                    <div id = "homepage-panel">
                        <img id = "panel-image"
                             src = {require ('./../../public/images/signupPanelImage.jpg')}
                             alt="Ariel view of the center of Radford University"/>
                        <div id= "panel-shroud">
                            <panel-text>Sign Up To Access The
                                <br></br>Services CAS Has To Offer</panel-text>
                        </div>
                    </div>
                    </a>
                    <a href="login">
                    <div id = "homepage-panel">
                        <img id = "panel-image"
                             src = {require ('./../../public/images/loginPanelImage.jpg')}
                             alt="View of Heath Hall with students playing a game on the lawn"/>
                        <div id= "panel-shroud">
                            <panel-text>Already Have An Account?
                                <br></br>Sign In Here.</panel-text>
                        </div>
                    </div>
                    </a>
                </div>
                <div id="info-div">
                    <h2> CAS INFO </h2>
                    <p>The Center for Accessibility Services (CAS) is committed to providing equal educational
                        opportunities for individuals living with disabilities. The CAS serves and supports students,
                        parents, and visitors seeking reasonable accommodations under the Americans with Disabilities
                        Act. The office is dedicated to the ongoing goal of access and inclusion so that an individual
                        may fully participate in the university experience.<br/><br/></p>
                </div>
            </div>
        );

    }
}

export default HomePage;