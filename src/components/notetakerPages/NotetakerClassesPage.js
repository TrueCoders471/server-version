import React from 'react';
import './NTCPStyleSheet.css';

class MyClassesNotetakerPage extends React.Component {
    openClass1() {
        location.href = "/notetakerClass1"; //eslint-disable-line
    }

    openClass2() {
        location.href = "/notetakerClass2"; //eslint-disable-line
    }

    openClass3() {
        location.href = "/notetakerClass3"; //eslint-disable-line
    }

    openClass4() {
        location.href = "/notetakerClass4"; //eslint-disable-line
    }

    openClass5() {
        location.href = "/notetakerClass5"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
        return (
            <div>
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
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
                        <div className="card">
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
                        <div className="card">
                            <div className={"containerNT"} onClick={this.openClass2}>
                                <h4><b>ART 100</b></h4>
                                <p className={"centerText"}>Art appreciation</p>
                            </div>
                            <div className="containerNT" onClick={this.openClass3}>
                                <h4><b>GEOG 101</b></h4>
                                <p className={"centerText"}>World Geography</p>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                {/*<p>My Classes Notetaker: A grid of classes her with a button for each</p> */}
            </div>
        );
    }
}

export default MyClassesNotetakerPage;