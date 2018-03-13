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
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>Open Classes</button>
                <br /><br />
            </div>
        );

    }
}

export default StudentPage;