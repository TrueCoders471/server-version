import React from 'react';

export default class CreateVolunteer extends React.Component {
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
        }
    }

    validate(username, password, confirm_password, first_name, last_name, email, phone, ru_id) {
        return {
            username: username.length === 0,
            password: password.length === 0,
            confirm_password: confirm_password.length === 0,
            first_name: first_name.length === 0,
            last_name: last_name.length === 0,
            email: email.length === 0,
            phone: phone.length === 0,
            ru_id: ru_id.length === 0,
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


    registerVolunteer(e) {
        e.preventDefault();
        const firstName = document.getElementById("vol-fName-field").value;
        const lastName = document.getElementById("vol-lName-field").value;
        const email = document.getElementById("vol-email-field").value;
        const ruId = document.getElementById("volunteer-id-field").value;
        const phone = document.getElementById("volunteer-phone-field").value;
        const username = document.getElementById("volunteer-userName-field").value;
        const password = document.getElementById("vol-password-field").value;
        const password2 = document.getElementById("vol-confirm-password-field").value;

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
            role: 'volunteer'
        });
        console.log(body);
        if (password === password2) {
            window.fetch('http://localhost:7555/registerVolunteer',
                //window.fetch('http://137.45.220.128:443/registerVolunteer',
                {
                    method: 'POST',
                    headers: headers,
                    body: body
                })
                .then((res) => {
                    if (res.status === 200) res.text().then(function (text) {
                        if (text === "OK") {
                            alert(`User ${username} has been registered`);
                            location.href = "/admin"; //eslint-disable-line
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
                <div className="form-group col-md-12" align="center">
                    <label className=".value" htmlFor="generalInformation"><h4>General Information:</h4></label>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="name-field" id="labels">First Name:</label>
                    <input type="text"
                           name="fName"
                           className={errors.first_name ? "error" : "form-control"}
                           value={this.state.first_name}
                           id="vol-fName-field"
                           onChange={this.handleFirstNameChange}
                           placeholder="First Name"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="name-field">Last Name:</label>
                    <input type="text"
                           name="lName"
                           className={errors.last_name ? "error" : "form-control"}
                           value={this.state.last_name}
                           id="vol-lName-field"
                           onChange={this.handleLastNameChange}
                           placeholder="Last Name"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="email-field">Email:</label>
                    <input type="text"
                           name="email"
                           className={errors.email ? "error" : "form-control"}
                           value={this.state.email}
                           id="vol-email-field"
                           onChange={this.handleEmailChange}
                           placeholder="email@radford.edu"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="volunteer-id-field">Student ID:</label>
                    <input type="text"
                           name="sid"
                           className={errors.ru_id ? "error" : "form-control"}
                           value={this.state.ru_id}
                           id="volunteer-id-field"
                           onChange={this.handleRuIdChange}
                           placeholder="000000000"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="volunteer-phone-field">Cell Phone:</label>
                    <input type="text"
                           name="cellPone"
                           className={errors.phone ? "error" : "form-control"}
                           value={this.state.phone}
                           id="volunteer-phone-field"
                           onChange={this.handlePhoneChange}
                           placeholder="000-000-0000"/>
                </div>
                <div className="form-group col-md-12" align="center">
                    <label className=".value" htmlFor="accountInformation"><h4>Account Information:</h4></label>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="volunteer-username">Username:</label>
                    <input type="text"
                           name="volunteer-username"
                           className={errors.username ? "error" : "form-control"}
                           value={this.state.username}
                           id="volunteer-userName-field"
                           onChange={this.handleUsernameChange}
                           placeholder="Username"/>
                </div>
                <div className="form-group col-md-12">
                    {/*Supposed to be empty*/}
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="password">Password:</label>
                    <input type="password"
                           name="password"
                           className={errors.password ? "error" : "form-control"}
                           value={this.state.password}
                           id="vol-password-field"
                           onChange={this.handlePasswordChange}
                           placeholder="Password"/>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label className="value" htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password"
                           name="confirm-password"
                           className={errors.confirm_password ? "error" : "form-control"}
                           value={this.state.confirm_password}
                           id="vol-confirm-password-field"
                           onChange={this.handleConfirmPasswordChange}
                           placeholder="Confirm Password"/>
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
                                    {this.informationInputSection()}
                                </fieldset>
                                <div className="form-group">
                                    <div className="text-center">
                                        <div id="submit-Container">
                                            <button type="submit"
                                                    className={isDisabled ? "disabledCommonButton" : "commonButton"}
                                                    disabled={isDisabled}
                                                    onClick={this.registerVolunteer}
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