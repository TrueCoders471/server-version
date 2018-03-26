import React from 'react';

class StudentClass5Page extends React.Component {

    openNotes() {
        location.href = '/studentNotes'; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {

        return (
            <div>
                <h4>CORE 102</h4>
                <button className="commonButton" type="submit" onClick={this.openNotes}>Open Notes for this
                    class
                </button>
            </div>
        );

    }
}

export default StudentClass5Page;