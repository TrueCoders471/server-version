import React from 'react';

export default class FacultyStudentsPage extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="text-center">
                    <ul className="list-group">
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-user"/>
                            <b>Brandon Phillips</b>
                        </li>
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-user"/>
                            <b>John Devins</b>
                        </li>
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-user"/>
                            <b>Bob Ross</b>
                        </li>
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-user"/>
                            <b>Edward Scott</b>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}