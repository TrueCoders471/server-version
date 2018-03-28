import React from 'react';

class NotetakerNotesPage extends React.Component {

    openUploadNotes() {
        //location.href = "/uploadNotes";
        alert("File successfully uploaded.");
        //This is where we will take the file that is stored in the temporary folder and send it to the database.
    }
    deleteForm() {
        alert("Deleted notes!");
    }

    downloadForm() {
        alert("Download Notes");
    }

    render() {
        return (
            <div>
                <div align={"middle"}>
                    <br/>
                    <h4>Choose a file to upload:</h4>
                    <input className="fileUpload" type="file" id="fileUpload" name="fileUpload"/>
                    <br/> {/* Break between the button and file uploader to have space */}
                </div>
                <button className={"commonButton"} type="submit" onClick={this.openUploadNotes}>Upload Notes
                </button>
                <ul>
                    <h3> Week: Nov 12 - Nov 19</h3>
                    <ul className="list-group">
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                            <b>Notes from the lecture</b>(11/13/2017)
                            <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                        </li>
                    </ul>
                    <h3> Week: Nov 5 - Nov 12</h3>
                    <ul className="list-group">
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                            <b>Notes from the lecture</b> (11/8/2017)
                            <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                        </li>
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                            <b>Notes from the lecture </b>(11/6/2017)
                            <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                        </li>
                    </ul>
                    <h3> Week: Oct 29 - Nov 5</h3>
                    <ul className="list-group">
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                            <b>Notes from the lecture</b> (11/03/2017)
                            <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                        </li>
                        <li className="list-group-item justify-content-between">
                            <span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>
                            <b>Notes from the lecture </b>(10/31/2017)
                            <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                        </li>
                    </ul>
                </ul>
            </div>
        );
    }
}

export default NotetakerNotesPage;