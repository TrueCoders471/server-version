import React from 'react';

class AdminClassesPage extends React.Component {
    openClass() {
        location.href = "/adminClassPage"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }

    courses = ["ITEC 120", "ITEC 110", "ART 100", "CORE 102"];
    descs = ["Principles of Computer Science I", "Information Technology", "Introduction to Art", "Core Curriculum"];

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
            <div>
                <div className="section group">
                    <div className="cardContainer">
                        <div className={"card"}>
                            <br/>
                            <div className={"containerNT"} onClick={this.openClass1}>
                                <h4><b>ITEC 120</b></h4>
                                <p className={"centerText"}>Principles of Computer Science I</p>
                            </div>
                            <div className={"containerNT"} onClick={this.openClass4}>
                                <h4><b>ITEC 110</b></h4>
                                <p className={"centerText"}>Information Technology</p>
                            </div>
                        </div>
                        <br/>
                        <div className={"card"}>
                            <div className={"containerNT"} onClick={this.openClass4}>
                                <h4><b>ITEC 110</b></h4>
                                <p className={"centerText"}>Information Technology</p>
                            </div>
                            <div className={"containerNT"} onClick={this.openClass5}>
                                <h4><b>CORE 102</b></h4>
                                <p className={"centerText"}>Core Curriculum</p>
                            </div>
                        </div>
                        <br/>
                        <div className={"card"}>
                            <div className={"containerNT"} onClick={this.openClass2}>
                                <h4><b>ART 100</b></h4>
                                <p className={"centerText"}>Information Technology</p>
                            </div>
                            <div className={"containerNT"} onClick={this.openClass3}>
                                <h4><b>GEOG 101</b></h4>
                                <p className={"centerText"}>Core Curriculum</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/!*<p>My Classes Notetaker: A grid of classes her with a button for each</p> *!/}
            </div>
        );
    }*/
}

export default AdminClassesPage;