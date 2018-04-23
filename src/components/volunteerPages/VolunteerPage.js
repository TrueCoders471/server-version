import React from 'react';

export default class VolunteerPage extends React.Component {

    openClasses() {
        location.href = "/VolunteerClasses"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }

    render() {
        return (
            <div>
                <h1>Volunteer</h1>


                <div align="middle">
                    <button className="commonButton" type="submit" onClick={this.openClasses}>Open My Classes
                    </button>
                </div>
            </div>
        );

    }
}
