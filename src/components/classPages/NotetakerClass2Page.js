import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClass2Page extends React.Component {
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

                <h3>ART 100</h3>
                <NotetakerNotesPage/>

                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View All Classes</button>
            </div>

        );

    }
}

export default NotetakerClass2Page;