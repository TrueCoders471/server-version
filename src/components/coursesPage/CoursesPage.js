import React from 'react';
import Courses from './Courses';
import ReactTable from 'react-table';


import {makeListOfCourses, makeListOfSubjects} from "../adminPage/Utils";

class CoursesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            subjects: [],
            subject: '',
            ru_id: props.ru_id,
            course: props.course,
        };

        this.change = this.change.bind(this);

        makeListOfSubjects().then((subjects) => this.setState({subjects: subjects}));
        //makeListOfCourses(this.state.selected).then((courses) => this.setState({courses: courses}));
        console.log(this.state.subjects);
        console.log(this.state.courses);
        console.log(this.state.ru_id);
    }


    change(event) {
        event.preventDefault();
        let subject = event.target.value;
        console.log(subject);
        this.setState({subject: subject});
        //makeListOfCourses(subject).then((courses) => this.setState({courses: courses}));
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(this.state);
        this.setState({ru_id: nextProps});

    }

    addCourse(e) {
        e.preventDefault();
        const ru_id = this.state.ru_id;
        console.log(ru_id);
        const course = Courses.course;
        console.log(course);
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const body = JSON.stringify({
            ru_id: ru_id,
            course: course,
        });
        //window.fetch('http://localhost:7555/addCourse',
            window.fetch('http://137.45.220.128:443/addCourse',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                if (res.status === 200) res.text().then(function (text) {
                    if (text === "OK") {
                        alert(`User added course`);
                        location.href = "/faculty"; //eslint-disable-line
                    } else {
                        alert("Something went wrong");
                    }
                });
            })
    }

    render() {
        console.log('courses:' + this.state.courses);
        const subjectItems = this.state.subjects.map((subject) => <option>{subject.subject_name}</option>);

        return (
            <div>
                <form role="form" method="POST" action="#">
                    <label className=".value" htmlFor="facultyCourses"><h4>Courses Taught This Semester:</h4></label>
                    <br/>
                    <br/>
                    <select onChange={this.change}>
                        {subjectItems}
                    </select>

                    <br/><br/>
                    <Courses subject={this.state.subject}/>
                    <br/>
                    <div>
                        <button type="submit"
                                className="commonButton"
                                onClick={this.addCourse.bind(this)}
                        >Add course
                        </button>
                        <br/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CoursesPage;