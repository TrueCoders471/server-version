import React from 'react';
import ReactTable from 'react-table';
import {makeListOfNotes} from "../adminPage/Utils";

class VolunteerNotesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes_data: [],
            course: '',
        };
        makeListOfNotes("ITEC120").then((notes) => this.setState({notes_data: notes}));
    }

    validate(course) {
        return {
            course: course.length === 0,
        }
    }

    handleCourseChange = (evt) => {
        this.setState({course: evt.target.value});
    };

    canBeSubmitted() {
        console.log("enter can be submitted");
        const errors = this.validate(this.state.course);

        const isDisabled = Object.keys(errors).some(x => errors[x]);
        console.log(!isDisabled);
        return !isDisabled;
    };

    handleUploadFile(ev) {
        ev.preventDefault();
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const data = new FormData();
        const file = document.getElementById("fileUpload").files[0];
        const courseNumber = document.getElementById("courseNumber").value;
        data.append('file', file);
        data.append('title', file.name);
        data.append('course_number', courseNumber);
        data.append('date_submitted', file.lastModifiedDate.toDateString());

        console.log(file.name);
        console.log(file.lastModifiedDate.toDateString());
        //return (window.fetch('http://137.45.220.128:443/uploadNote', {
        return (window.fetch('http://localhost:7555/uploadNote', {
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
        const errors = this.validate(this.state.course);
        const isDisabled = !this.canBeSubmitted();
        return (
            <div>
                <br/>
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
                    <br/>
                    <div className="form-group col-md-12" align="middle">
                        <h5>Enter Course Number for the notes</h5>
                        <br/>
                        <div align={"middle"}>
                            <input type="text"
                                   id="courseNumber"
                                   className={errors.course ? "error" : "form-control"}
                                   value={this.state.course}
                                   onChange={this.handleCourseChange}
                                   placeholder="Course Number"/>
                            <br/>
                            <form onSubmit={this.handleUploadFile}>
                                <h4>Choose a file to upload:</h4>
                                <input className="fileUpload" type="file" id="fileUpload" name="fileUpload"/>
                                <br/> {/* Break between the button and file uploader to have space */}
                                <button
                                    className={isDisabled ? "disabledCommonButton" : "commonButton"}
                                    disabled={isDisabled}>Upload Notes
                                </button>
                            </form>
                            <br/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VolunteerNotesPage;