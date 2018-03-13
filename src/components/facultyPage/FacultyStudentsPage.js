import React from 'react';

export default class FacultyStudentsPage extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Student1 </b>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Student2</b>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Student3 </b>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Student4 </b>
                    </li>
                </ul>
            </div>
        );
    }
}