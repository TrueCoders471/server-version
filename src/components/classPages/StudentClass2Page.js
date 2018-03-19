import React from 'react';

class StudentClass2Page extends React.Component {

    openNotes() {
        location.href ='/studentNotes'; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {

        return (
            <div>

                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <h4>ART 100</h4>
            <button className="btn btn-lg btn-primary" type="submit" onClick={this.openNotes}>Open Notes for this class</button>
            </div>
        );

    }
}

export default StudentClass2Page;