import React from 'react';
import ReactTable from 'react-table';
import {makeListOfNotes} from "../adminPage/Utils";

class AdminNotesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes_data: []
        };
        makeListOfNotes("GEOG101").then((notes) => this.setState({notes_data: notes}));
    }


    openClasses() {
        location.href = "/studentClasses"; //eslint-disable-line
    }
    // openClasses() {
    //     location.href = "/studentClasses";
    // }
    render() {
        const notesData = this.state.notes_data;
        return (
            <div>
                {/*<button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>View All Classes</button>*/}
                {/*<div>*/}
                {/*<ul>*/}
                {/*<h3> Week: Nov 12 - Nov 19</h3>*/}
                {/*<ul className="list-group">*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                {/*<b>Notes from the lecture</b>(11/13/2017)*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*<h3> Week: Nov 5 - Nov 12</h3>*/}
                {/*<ul className="list-group">*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                {/*<b>Notes from the lecture</b> (11/8/2017)*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                {/*<b>Notes from the lecture </b>(11/6/2017)*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*<h3> Week: Oct 29 - Nov 5</h3>*/}
                {/*<ul className="list-group">*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                {/*<b>Notes from the lecture</b> (11/03/2017)*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<span className="glyphicon glyphicon-download" onClick={this.downloadForm}/>*/}
                {/*<b>Notes from the lecture </b>(10/31/2017)*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</ul>*/}
                {/*<button className="commonButton" type="submit" onClick={this.openClasses}>View all Classes*/}
                {/*</button>*/}
                {/*</div>*/}
                <div className="container" align="center">

                    <br />
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
                        <div className="divider"/>
                        <button type="button" className="commonButton">Upload</button>
                        <br />
                        <br />
                        <br />

                    </div>

                </div>
            </div>
        );
    }
}

export default AdminNotesPage;