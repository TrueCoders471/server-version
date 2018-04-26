import React from 'react';

export default class VolunteerPage extends React.Component {
    openClasses() {
        location.href = "/volunteerClasses"; //eslint-disable-line
    }
    openCasForms() {
        location.href = "/hub"; //eslint-disable-line
    }
    render() {
        return (
            <div>
                <h3>Volunteer</h3>
                <button className="commonButton" type="submit" onClick={this.openClasses}>Open Classes</button>
                <br /><br />
                <h3>Navigate to CAS Forms</h3>
                <button className={"commonButton"} type={"submit"} onClick={this.openCasForms}>CAS Forms</button>

            </div>
        );

    }
}