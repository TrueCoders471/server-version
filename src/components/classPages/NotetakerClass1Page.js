import React from 'react';
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";


class NotetakerClassPage extends React.Component {
    openClasses() {
        location.href = "/volunteerClasses"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }
    render() {
        return (
            <div>



                <h3>ITEC 120</h3>
                <NotetakerNotesPage/>
                <button className="commonButton" type="submit" onClick={this.openClasses}>View All Classes</button>
                <br/><br/><br/> {/*This is the only way I could keep the button on the page, no clue why....
                                   any fixes are welcome :) */}
            </div>
        );
    }
}

export default NotetakerClassPage;