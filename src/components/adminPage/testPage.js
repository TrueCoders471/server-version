import React from "react";
import "./testPageStyles.css";

//!!!!!!!! Still in Development !!!!!!!!!!
class testPage extends React.Component{

    courses = ["ITEC 220", "GEO 100", "ITEC 380"];
    descs = ["Computer Science II", "Intro to Geology", "Racket"];

    classCard(courseName, courseDesc){
        return (
            <div className={"class-column"}>
                <div className={"image-class-header"}>
                    <img className={"image-header"} src = {require ('./../../public/images/testClassImage.jpeg')} alt="" />
                    <br/><br/>
                </div>
                <div className={"classInfo-container"}>
                    <span className={"courseName-style"}>{courseName}</span> <br/>
                    <span className={"courseDesc-style"}>{courseDesc}</span>
                </div>
                <div className={"button-container"}>
                    <button className={"commonButton"}>ENTER</button>
                </div>
            </div>
        );
    }

    renderMultiple(arrayCourse, arrayDesc){
        var cards = [];
        for (var i = 0; i < arrayCourse.length; i++) {
            cards.push(this.classCard(arrayCourse[i], arrayDesc[i]));
        }
        return cards;
    }

    //THIS AREA IS A WORK IN PROGRESS
    /*getCourseName(){
        This is the function that will get the course name from the db MAYBE
    }

    getCourseDesc(){
        This is the function that will get the course description from the db MAYBE
    }

    getCourseIMG(){
        This is the function that will get the course IMG from the db MAYBE
    }*/


    render() {

        return (
            <div className={"container"}>
                <div className={"classCard-container"}>
                    {this.renderMultiple(this.courses, this.descs)}
                </div>
            </div>

        );
    }

}

export default testPage;