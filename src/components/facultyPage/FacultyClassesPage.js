import React from 'react';

export default class FacultyClassesPage extends React.Component {

    openClass1() {
        location.href = './facultyClass1'; //eslint-disable-line
    }

    openClass2() {
        location.href = './facultyClass2'; //eslint-disable-line
    }

    openClass3() {
        location.href = './facultyClass3'; //eslint-disable-line
    }

    render() {
        return (
            <div className="text-center">
                <h1>Faculty's Classes List</h1>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass1}>View ITEC 120</button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass2}>View ITEC 380</button>
                <br/><br/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClass3}>View ART 101</button>
            </div>
        );
    }
}