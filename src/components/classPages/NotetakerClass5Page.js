import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClass5Page extends React.Component {
    openClasses() {
        location.href = "/notetakerClasses"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
        return (
            <div>


                <h3>CORE 102</h3>
                <NotetakerNotesPage/>

                <button className="uploadButton" type="submit" onClick={this.openClasses}>View All Classes</button>
            </div>

        );

    }
}

export default NotetakerClass5Page;