import React from 'react';

class NotetakerNotesPage extends React.Component {

    openUploadNotes() {
        //location.href = "/uploadNotes";
        alert("File Picker opens...");
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
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openUploadNotes}>Upload Notes
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