import React from 'react';

export default class FacultyVolunteersPage extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Notetaker1 </b>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Notetaker2</b>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Notetaker3</b>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <span className="glyphicon glyphicon-user"/>
                        <b>Notetaker4</b>
                    </li>
                </ul>
            </div>

        );
    }
}
