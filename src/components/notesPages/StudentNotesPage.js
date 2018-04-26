import React from 'react';
import ReactTable from 'react-table';
import {makeListOfNotes} from "../adminPage/Utils";

class StudentNotesPage extends React.Component {

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
                        <p>To download a file please copy the file id from the table and input it into the field below and click download.</p>
                        <label>File ID</label>
                        <input type="password" id="inputStudentID" className="form-control" required
                               placeholder="File ID"/>
                        <br />
                        <button type="button" className="commonButton">Download</button>
                        <br />
                        <br />
                        <br />

                    </div>

                </div>
            </div>
        );
    }
}

export default StudentNotesPage;