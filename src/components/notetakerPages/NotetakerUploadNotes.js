import React from 'react';

class NotetakerUploadNotes extends React.Component {

    uploadNotes(){
        alert("Download file here!");
    }
    render(){
        return(
            <div>
                <p>Notetaker Upload Notes view here</p>
                <button className="commonButton" type="submit" onClick={this.uploadNotes}>Download Notes!</button>
            </div>

        );
    }
}

export default NotetakerUploadNotes;