import React from 'react';
import CoursesPage from "../coursesPage/CoursesPage";

export default class FacultySignUpForm extends React.Component {

    registerFaculty(e) {
        e.preventDefault();
        const firstName = document.getElementById("fName-field").value;
        const lastName = document.getElementById("lName-field").value;
        const email = document.getElementById("email-field").value;
        const ruId = document.getElementById("radford-id-field").value;
        const phone = document.getElementById("cell-phone-field").value;
        const username = document.getElementById("userName-field").value;
        const password = document.getElementById("password-field").value;
        const password2 = document.getElementById("confirm-password-field").value;

        console.log(firstName);
        if (password !== password2) {
            alert("Passwords don't match")
        }
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const body = JSON.stringify({
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            ru_id: ruId,
            role: 'faculty'
        });
        console.log(body);
        window.fetch('http://localhost:7555/registerUser',
            //window.fetch('http://137.45.220.128:443/registerUser',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                if (res.status === 200) res.text().then(function (text) {
                    if (text === "OK") {
                        alert(`User ${username} has been registered`);
                    } else {
                        alert("Something went wrong");
                    }
                });
            })
    }

    informationInputSection() {
        return (
            <div>
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="generalInformation"><h4>General Information:</h4></label>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="name-field" id="labels">First Name:</label>
                    <input type="text" name="fName" className="form-control" id="fName-field"
                           placeholder="Bob"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="name-field">Last Name:</label>
                    <input type="text" name="lName" className="form-control" id="lName-field"
                           placeholder="Ross"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="email-field">Email:</label>
                    <input type="text" name="email" className="form-control" id="email-field"
                           placeholder="bross@radford.edu"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="student-id-field">Radford ID:</label>
                    <input type="text" name="sid" className="form-control" id="radford-id-field"
                           placeholder="000000000"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="cell-phone-field">Cell Phone:</label>
                    <input type="text" name="cellPone" className="form-control" id="cell-phone-field"
                           placeholder="000-000-0000"/>
                </div>
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="accountInformation"><h4>Account Information:</h4></label>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="username">Username:</label>
                    <input type="text" name="username" className="form-control" id="userName-field"
                           placeholder="bross@radford.edu"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="password">Password:</label>
                    <input type="password" name="password" className="form-control" id="password-field"
                           placeholder=""/>
                </div>
                <div className="form-group col-md-6">
                    <label className="value" htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="password" className="form-control" id="confirm-password-field"
                           placeholder=""/>
                </div>
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="facultyCourses"><h4>Courses Taught This Semester:</h4></label>
                    <CoursesPage/>
                    <br/>
                    <div>
                        <button type="submit"
                                className="commonButton"
                                onClick={this.addCourse}
                        >Add course
                        </button>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div id="primary" className="col-md-8 col-md-offset-2">
                            <form role="form" method="POST" action="#">
                                <fieldset>
                                    <legend><h1 className="text-center"><b>Faculty Registration Form</b></h1>
                                    </legend>
                                    {this.informationInputSection()}
                                </fieldset>
                                <div className="form-group">
                                    <div className="text-center">
                                        <div id="submit-Container">
                                            <br/>
                                            <button type="submit"
                                                    className="commonButton"
                                                    onClick={this.registerFaculty}
                                            >Register
                                            </button>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}