import React from 'react';
import CoursesPage from "../coursesPage/CoursesPage";

export default class FacultySignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            ru_id: '',
            canBeSubmitted: false,
        }
    };

    validate(username, password, confirm_password, first_name, last_name, email, phone, ru_id) {
        return {
            username: username.length === 0,
            password: password.length === 0,
            confirm_password: confirm_password.length === 0,
            first_name: first_name.length === 0,
            last_name: last_name.length === 0,
            email: email.length === 0,
            phone: phone.length === 0,
            ru_id: ru_id.length === 0
        }
    };

    canBeSubmitted() {
        console.log("enter can be submitted");
        const errors = this.validate(this.state.username, this.state.password, this.state.confirm_password,
            this.state.first_name, this.state.last_name, this.state.email, this.state.phone, this.state.ru_id);
        const isDisabled = Object.keys(errors).some(x => errors[x]) && (this.state.password !== this.state.confirm_password !== '');
        console.log(!isDisabled);
        return !isDisabled;
    };

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
        if (password === password2) {
            window.fetch('http://localhost:7555/registerFaculty',
                //window.fetch('http://137.45.220.128:443/registerFaculty',
                {
                    method: 'POST',
                    headers: headers,
                    body: body
                })
                .then((res) => {
                    if (res.status === 200) res.text().then(function (text) {
                        if (text === "OK") {
                            alert(`User ${username} has been registered`);
                            location.href = "/faculty"; //eslint-disable-line
                        } else {
                            alert("Something went wrong");
                        }
                    });
                })
        } else {
            alert("Passwords don't match");
        }
    }

    //region change handlers
    handleFirstNameChange = (evt) => {
        this.setState({first_name: evt.target.value});
    };
    handleLastNameChange = (evt) => {
        this.setState({last_name: evt.target.value});
    };
    handleRuIdChange = (evt) => {
        this.setState({ru_id: evt.target.value});
    };
    handleEmailChange = (evt) => {
        this.setState({email: evt.target.value});
    };
    handlePhoneChange = (evt) => {
        this.setState({phone: evt.target.value});
    };
    handleUsernameChange = (evt) => {
        this.setState({username: evt.target.value});
    };
    handlePasswordChange = (evt) => {
        this.setState({password: evt.target.value});
    };
    handleConfirmPasswordChange = (evt) => {
        this.setState({confirm_password: evt.target.value});
    };

    //endregion

    informationInputSection() {
        const errors = this.validate(this.state.username, this.state.password, this.state.confirm_password,
            this.state.first_name, this.state.last_name, this.state.email, this.state.phone, this.state.ru_id);

        return (
            <div>
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="generalInformation"><h4>General Information:</h4></label>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="name-field" id="labels">First Name:</label>
                    <input type="text"
                           name="fName"
                           className={errors.first_name ? "error" : "form-control"}
                           value={this.state.first_name}
                           onChange={this.handleFirstNameChange}
                           id="fName-field"
                           placeholder="Bob"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="name-field">Last Name:</label>
                    <input type="text"
                           name="lName"
                           className={errors.last_name ? "error" : "form-control"}
                           value={this.state.last_name}
                           onChange={this.handleLastNameChange}
                           id="lName-field"
                           placeholder="Ross"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="email-field">Email:</label>
                    <input type="text"
                           name="email"
                           className={errors.email ? "error" : "form-control"}
                           value={this.state.email}
                           onChange={this.handleEmailChange}
                           id="email-field"
                           placeholder="bross@radford.edu"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="student-id-field">Radford ID:</label>
                    <input type="text"
                           name="sid"
                           className={errors.ru_id ? "error" : "form-control"}
                           value={this.state.ru_id}
                           onChange={this.handleRuIdChange}
                           id="radford-id-field"
                           placeholder="000000000"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="cell-phone-field">Cell Phone:</label>
                    <input type="text"
                           name="cellPone"
                           className={errors.phone ? "error" : "form-control"}
                           value={this.state.phone}
                           onChange={this.handlePhoneChange}
                           id="cell-phone-field"
                           placeholder="000-000-0000"/>
                </div>
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="accountInformation"><h4>Account Information:</h4></label>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="username">Username:</label>
                    <input type="text"
                           name="username"
                           className={errors.username ? "error" : "form-control"}
                           value={this.state.username}
                           onChange={this.handleUsernameChange}
                           id="userName-field"
                           placeholder="bross@radford.edu"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="password">Password:</label>
                    <input type="password"
                           name="password"
                           className={errors.password ? "error" : "form-control"}
                           value={this.state.password}
                           onChange={this.handlePasswordChange}
                           id="password-field"
                           placeholder=""/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password"
                           name="password"
                           className={errors.confirm_password ? "error" : "form-control"}
                           value={this.state.confirm_password}
                           onChange={this.handleConfirmPasswordChange}
                           id="confirm-password-field"
                           placeholder=""/>
                </div>
                <div className="form-group col-md-12">
                    {/*<label className=".value" htmlFor="facultyCourses"><h4>Courses Taught This Semester:</h4></label>*/}
                    <CoursesPage ru_id={this.state.ru_id}/>
                    <br/>
                    {/*<div>*/}
                    {/*<button type="submit"*/}
                    {/*className="commonButton"*/}
                    {/*onClick={this.addCourse}*/}
                    {/*>Add course*/}
                    {/*</button>*/}
                    {/*<br/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

    render() {
        const isDisabled = !this.canBeSubmitted();
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
                                                    className={isDisabled ? "disabledCommonButton" : "commonButton"}
                                                    disabled={isDisabled}
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