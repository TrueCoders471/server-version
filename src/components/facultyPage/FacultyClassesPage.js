import React from 'react';

export default class FacultyClassesPage extends React.Component {

    openClass() {
        location.href = '/volFacClassPage'; //eslint-disable-line
    }

    courses = ["ITEC 120", "ITEC 380", "ART 100", "CORE 102"];
    descs = ["Principles of Computer Science I", "Origin of Programming Languages ", "Introduction to Art", "Core Curriculum"];

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
                    <button className={"commonButton"} onClick={this.openClass}>VIEW</button>
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

    /*render() {
        return (
            <div className="text-center">
                <h1>Faculty's Classes List</h1>
                <button className="commonButton" type="submit" onClick={this.openClass1}>View ITEC 120</button>
                <br/><br/>
                <button className="commonButton" type="submit" onClick={this.openClass2}>View ITEC 380</button>
                <br/><br/>
                <button className="commonButton" type="submit" onClick={this.openClass3}>View ART 101</button>
            </div>
        );
    }*/
}