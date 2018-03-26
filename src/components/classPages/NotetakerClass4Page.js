import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClass4Page extends React.Component {
    openClasses() {
        location.href = "/notetakerClasses"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
        return (
            <div>



                <h3>ITEC 110</h3>
                <NotetakerNotesPage/>

                <button className="uploadButton" type="submit" onClick={this.openClasses}>View All Classes</button>

            </div>

        );

    }
}

export default NotetakerClass4Page;