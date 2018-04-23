import React from 'react';

export default class VolunteerUploadNotes extends React.Component {

    uploadNotes(){
        alert("Download file here!");
    }
    render(){
        return(
            <div>
                <p>Volunteer Upload Notes view here</p>
                <button className="commonButton" type="submit" onClick={this.uploadNotes}>Download Notes!</button>
            </div>

        );
    }
}