//remove later
import React from 'react';
import FacultyVolunteersPage from "./FacultyVolunteersPage";
import FacultyStudentsPage from "./FacultyStudentsPage";
import FacultyStyles from "./FacultyStyles.css";

export default class FacultyClassPage extends React.Component {

    openClasses() {
        location.href = './facultyClasses'; //eslint-disable-line
    }

    render() {
        return (
            <div>
                <h3>ITEC 380</h3>
                <ul className="nav  nav-tabs nav-justified">
                    <li className="active"><a data-toggle="tab" href="#students">View Students</a></li>
                    <li><a data-toggle="tab" href="#notetakers">View Volunteers</a></li>
                </ul>
                <div className="tab-content">
                    <div id="students" className="tab-pane fade in active">
                        <h3>Students</h3>
                        <FacultyStudentsPage/>
                    </div>
                    <div id="notetakers" className="tab-pane fade">
                        <h3>Notetakers</h3>
                        <FacultyVolunteersPage/>
                    </div>
                </div>

                <div className="text-center">
                    <button className="commonButton" type="submit" onClick={this.openClasses}>View All Classes
                    </button>
                </div>
            </div>
        );
    }
}