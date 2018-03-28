import React from 'react';

class StudentNotesPage extends React.Component {

    downloadForm() {
        alert("Download Notes");
    }


    openClasses() {
        location.href = "/studentClasses"; //eslint-disable-line
    }
    // openClasses() {
    //     location.href = "/studentClasses";
    // }
    render() {
        return (
            <div>
                {/*<button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View All Classes</button>*/}

                <div>
                    <ul>
                        <h3> Week: Nov 12 - Nov 19</h3>
                        <ul className="list-group">
                            <li className="list-group-item justify-content-between">
                                <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                                <b>Notes from the lecture</b>(11/13/2017)
                            </li>
                        </ul>
                        <h3> Week: Nov 5 - Nov 12</h3>
                        <ul className="list-group">
                            <li className="list-group-item justify-content-between">
                                <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                                <b>Notes from the lecture</b> (11/8/2017)
                            </li>
                            <li className="list-group-item justify-content-between">
                                <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                                <b>Notes from the lecture </b>(11/6/2017)
                            </li>
                        </ul>
                        <h3> Week: Oct 29 - Nov 5</h3>
                        <ul className="list-group">
                            <li className="list-group-item justify-content-between">
                                <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                                <b>Notes from the lecture</b> (11/03/2017)
                            </li>
                            <li className="list-group-item justify-content-between">
                                <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                                <b>Notes from the lecture </b>(10/31/2017)
                            </li>
                        </ul>
                    </ul>
                    <button className="commonButton" type="submit" onClick={this.openClasses}>View all Classes
                    </button>
                </div>
            </div>
        );
    }
}

export default StudentNotesPage;