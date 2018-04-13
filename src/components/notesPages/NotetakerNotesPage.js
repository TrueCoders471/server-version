import React from 'react';
import ReactTable from 'react-table';
import {makeListOfNotes} from "../adminPage/Utils";

class NotetakerNotesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes_data: []
        };
        makeListOfNotes("ITEC120").then((notes) => this.setState({notes_data: notes}));
    }

    handleUploadFile(ev) {
        ev.preventDefault();
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const data = new FormData();
        const file = document.getElementById("fileUpload").files[0];
        data.append('file', file);
        data.append('title', file.name);
        data.append('course_number', file.name);
        data.append('date_submitted', file.lastModifiedDate.toDateString());

        console.log(file.name);
        console.log(file.lastModifiedDate.toDateString());
        return (window.fetch('http://137.45.220.128:443/uploadNote', {
        //return (window.fetch('http://localhost:7555/uploadNote', {
                method: 'POST',
                body: data,
            }).then((response) => {
                alert("File is uploaded");
                return "done";

            })
        );
    }

    deleteForm() {
        alert("Deleted notes!");
    }

    downloadForm() {
        alert("Download Notes");
    }

    render() {
        const notesData = this.state.notes_data;
        console.log(notesData);
        return (
            <div>

                <br/>
                {/*<ul>*/}
                    {/*<h3> Week: Nov 12 - Nov 19</h3>*/}
                    {/*<ul className="list-group">*/}
                        {/*<li className="list-group-item justify-content-between">*/}
                            {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                            {/*<b>Notes from the lecture</b>(11/13/2017)*/}
                            {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                    {/*<h3> Week: Nov 5 - Nov 12</h3>*/}
                    {/*<ul className="list-group">*/}
                        {/*<li className="list-group-item justify-content-between">*/}
                            {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                            {/*<b>Notes from the lecture</b> (11/8/2017)*/}
                            {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item justify-content-between">*/}
                            {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                            {/*<b>Notes from the lecture </b>(11/6/2017)*/}
                            {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                    {/*<h3> Week: Oct 29 - Nov 5</h3>*/}
                    {/*<ul className="list-group">*/}
                        {/*<li className="list-group-item justify-content-between">*/}
                            {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                            {/*<b>Notes from the lecture</b> (11/03/2017)*/}
                            {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                        {/*</li>*/}
                        {/*<li className="list-group-item justify-content-between">*/}
                            {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                            {/*<b>Notes from the lecture </b>(10/31/2017)*/}
                            {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                {/*</ul>*/}
                <div className="container">
                <ReactTable
                    data={notesData}
                    columns={[
                        {
                            Header: "Course Number",
                            accessor: "course_number"
                        },
                        {
                            Header: "Notes Title",
                            accessor: "title"
                        },
                        {
                            Header: "Added on",
                            accessor: "date_submitted"
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                    <div align={"middle"}>
                        <div className="form-group col-md-12">
                            <br />
                            <br />
                            <p>To download or delete a file please copy the file id from the table and input it into the field below and click download.</p>
                            <label>File ID</label>
                            <input type="password" id="inputStudentID" className="form-control" required
                                   placeholder="File ID"/>
                            <br />
                            <button type="button" className="commonButton">Download</button>
                            <div className="divider"/>
                            <button type="button" className="commonButton">Delete</button>
                            <br />
                            <br />
                            <br />

                        </div>
                        <br/>
                        <form onSubmit={this.handleUploadFile}>
                            <h4>Choose a file to upload:</h4>
                            <input className="fileUpload" type="file" id="fileUpload" name="fileUpload"/>
                            <br/> {/* Break between the button and file uploader to have space */}
                            <button className={"commonButton"}>Upload Notes</button>
                        </form>
                        <br />
                        <br />
                        <br />
                    </div>

                </div>
            </div>
        );
    }
}

export default NotetakerNotesPage;