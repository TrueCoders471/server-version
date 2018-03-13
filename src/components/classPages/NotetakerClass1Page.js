import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClassPage extends React.Component {
    openClasses() {
        location.href = "/notetakerClasses"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
        return (
            <div>

                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View All Classes</button>

                <h4>ITEC 120</h4>
                <NotetakerNotesPage/>
            </div>
        );
    }
}

export default NotetakerClassPage;