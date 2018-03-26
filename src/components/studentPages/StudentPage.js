import React from 'react';

class StudentPage extends React.Component {
    openClasses() {
        location.href = "/studentClasses"; //eslint-disable-line
    }
    logOut() {
        location.href = "/"; //eslint-disable-line
    }
     render() {
        return (
            <div>
                <h3>Student</h3>
                <button className="commonButton" type="submit" onClick={this.openClasses}>Open Classes</button>
                <br /><br />
            </div>
        );

    }
}

export default StudentPage;