import React from 'react';

class MyClassesStudentPage extends React.Component {

    openClass1() {
        location.href = "/classPageStudent"; //eslint-disable-line
    }
    openClass2() {
        location.href = "/classPageStudent"; //eslint-disable-line
    }
    openClass3() {
        location.href = "/classPageStudent"; //eslint-disable-line
    }
    openClass4() {
        location.href = "/classPageStudent"; //eslint-disable-line
    }

    openClass5() {
        location.href = "/classPageStudent"; //eslint-disable-line
    }


    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
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
                            <div className={"containerNT"} onClick={this.openClass2}>
                                <h4><b>ART 101</b></h4>
                                <p className={"centerText"}>Information Technology</p>
                            </div>
                        </div>
                        <br/>
                        <div className={"card"}>
                            <div className={"containerNT"} onClick={this.openClass4}>
                                <h4><b>ITEC 110</b></h4>
                                <p className={"centerText"}>Information Technology</p>
                            </div>
                            <div className={"containerNT"} onClick={this.openClass3}>
                                <h4><b>GEOG 101</b></h4>
                                <p className={"centerText"}>Core Curriculum</p>
                            </div>
                        </div>
                        <br/>
                        <div className={"card"}>
                            <div className={"containerNT"} onClick={this.openClass2}>
                                <h4><b>ART 100</b></h4>
                                <p className={"centerText"}>Information Technology</p>
                            </div>
                            <div className={"containerNT"} onClick={this.openClass5}>
                                <h4><b>CORE 102</b></h4>
                                <p className={"centerText"}>Core Curriculum</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<p>My Classes Notetaker: A grid of classes her with a button for each</p> */}
            </div>
        );
    }
}

export default MyClassesStudentPage;