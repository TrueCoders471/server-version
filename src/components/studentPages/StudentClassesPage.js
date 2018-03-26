import React from 'react';

class MyClassesStudentPage extends React.Component {

    openClass1() {
        location.href = "/studentClass1"; //eslint-disable-line
    }
    openClass2() {
        location.href = "/studentClass2"; //eslint-disable-line
    }
    openClass3() {
        location.href = "/studentClass3"; //eslint-disable-line
    }
    openClass4() {
        location.href = "/studentClass4"; //eslint-disable-line
    }

    openClass5() {
        location.href = "/studentClass5"; //eslint-disable-line
    }
    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
        return (
            <div>
                <div className="section group">
                    <div className="col span_1_of_5">
                        <div className="card">
                            <br/>
                            <div className="container" onClick={this.openClass1}>
                                <h4><b>ITEC 120</b></h4>
                                <p>Principles of Computer Science I</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass2}>
                            <div className="container">
                                <h4><b>ART 100</b></h4>
                                <p>Art appreciation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass3}>
                            <div className="container">
                                <h4><b>GEOG 101</b></h4>
                                <p>World Geography</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass4}>
                            <div className="container">
                                <h4><b>ITEC 110</b></h4>
                                <p>Information Technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span_1_of_5">
                        <div className="card" onClick={this.openClass5}>
                            <div className="container">
                                <h4><b>CORE 102</b></h4>
                                <p>Core Curriculum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyClassesStudentPage;