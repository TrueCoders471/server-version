import React from 'react';

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: props.subject,
            courses: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({subject: nextProps.subject});
        console.log(nextProps);
        console.log(this.state);
        let headers = new Headers();
        const body = JSON.stringify({subject_name: nextProps.subject});
        console.log("courses comp");
        console.log(body);
        headers.append("Content-Type", "application/json");
        window.fetch('http://localhost:7555/loadCourses',
        //window.fetch('http://137.45.220.128:443/loadCourses',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                return res.json();
            }).then((courses) => {
            this.setState({courses: courses});
        });
    }

    componentDidMount() {

    }

    render() {
        const coursesItems = this.state.courses.map((courses) => <option>{courses.course}</option>);
        return (
            <div>
                <select>
                    {coursesItems}
                </select>
                <br/>
            </div>
        );
    }
}

export default Courses;
