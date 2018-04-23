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
        };

        this.change = this.change.bind(this);

        makeListOfSubjects().then((subjects) => this.setState({subjects: subjects}));
        //makeListOfCourses(this.state.selected).then((courses) => this.setState({courses: courses}));
        console.log(this.state.subjects);
        console.log(this.state.courses);
    }


    change(event) {
        event.preventDefault();
        let subject = event.target.value;
        console.log(subject);
        this.setState({subject: subject});
        //makeListOfCourses(subject).then((courses) => this.setState({courses: courses}));
    };

    render() {
        console.log('courses:' + this.state.courses);
        const subjectItems = this.state.subjects.map((subject) => <option>{subject.subject_name}</option>);

        return (
            <div>
                {/*<div className="Center">*/}
                <select onChange={this.change}>
                    {subjectItems}
                </select>

                <br/><br/>
                <Courses subject={this.state.subject}/>
                {/*</div>*/}
            </div>
        );
    }
}

export default CoursesPage;