import React from 'react';

class StudentClass3Page extends React.Component {

    openNotes() {
        location.href ='/studentNotes'; //eslint-disable-line
    }
    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {

        return (
            <div>
                <h4>GEOG 101</h4>
            <button className="uploadButton" type="submit" onClick={this.openNotes}>Open Notes for this class</button>
            </div>
        );

    }
}

export default StudentClass3Page;