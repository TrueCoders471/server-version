import React from 'react';

class StudentPage extends React.Component {
    openClasses() {
        location.href = "/studentClasses"; //eslint-disable-line
    }
    openCasForms() {
        location.href = "/hub"; //eslint-disable-line
    }
     render() {
        return (
            <div>
                <h3>Student</h3>
                <button className="commonButton" type="submit" onClick={this.openClasses}>Open Classes</button>
                <br /><br />
                <h3>Navigate to CAS Forms</h3>
                <button className={"commonButton"} type={"submit"} onClick={this.openCasForms}>CAS Forms</button>
            </div>
        );

    }
}

export default StudentPage;