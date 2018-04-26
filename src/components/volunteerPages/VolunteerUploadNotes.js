import React from 'react';

export default class VolunteerUploadNotes extends React.Component {

    constructor() {
        super();
        this.state = {
            course: '',
        }
    };

    validate(course) {
        return {
            course: course.length ===0,
        }
    }
    handleCourseChange = (evt) => {
        this.setState({course: evt.target.value});
    };

    handleUploadFile(ev) {
        //ev.preventDefault();
        const course= this.state.course;
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const data = new FormData();
        const file = document.getElementById("fileUpload").files[0];
        data.append('file', file);
        data.append('title', file.name);
        data.append('course_number', course);
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

    render() {
        const errors = this.validate(this.state.course);
        return (
            <div align="middle">
                <form onSubmit={this.handleUploadFile}>
                    <h4>Choose a file to upload:</h4>
                    <input
                        className="fileUpload"
                        type="file"
                        id="fileUpload"
                        name="fileUpload"
                    />
                    <br/>
                    <div className="form-group col-md-6" align="left">
                        <label className="value" htmlFor="name-field">Course Number</label>
                        <input type="text"
                               className={errors.course ? "error" : "form-control"}
                               value={this.state.course}
                               onChange={this.handleCourseChange}
                               id="course-field"
                               placeholder="Course number: (ex. ITEC120)"/>
                    </div>
                    <br/>
                    <button className="commonButton">Upload File</button>
                </form>
                {/*<button className="commonButton" type="submit" onClick={this.uploadNotes}>Download Notes!</button>*/}
            </div>

        );
    }
}