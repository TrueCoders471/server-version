import React from 'react';
import "./volunteerSignUpFormStyles.css"


export default class VolunteerSignUpForm extends React.Component {

    registerVolunteer(e) {
        e.preventDefault();
        const firstName = document.getElementById("fName-field").value;
        const lastName = document.getElementById("lName-field").value;
        const email = document.getElementById("email-field").value;
        const ruId = document.getElementById("student-id-field").value;
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
            role: 'volunteer'
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
                    <label className="value" htmlFor="student-id-field">Student ID:</label>
                    <input type="text" name="sid" className="form-control" id="student-id-field"
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
                <div className="form-group col-md-12">
                    {/*Supposed to be empty*/}
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
                    <label className=".value" htmlFor="volNoteTakerExpectations"><h4>Volunteer
                        Expectations:</h4>
                    </label>
                </div>
                <div className="form-group col-md-6">
                    <ul>
                        <li>Attend classes regularly</li>
                        <li>Write legibly</li>
                        <li>Complete mandatory volunteer Training Program provided by the Center for Accessibility
                            Services
                        </li>
                        <li>Maintain confidentiality</li>
                    </ul>
                </div>
                <div className="form-group col-md-6">
                    <ul>
                        <li>Be in good academic standing</li>
                        <li>Take detailed notes</li>
                        <li>Submit notes <b>at least</b> twice a week if possible</li>
                    </ul>
                </div>
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="volNoteTakerPerks"><h4>Volunteer Perks:</h4></label>
                </div>
                <div className="form-group col-md-6">
                    <ul>
                        <li>Early registration for next semester</li>
                        <li>Community Service</li>
                        <li>Résumé Builder</li>
                    </ul>
                </div>
                <div className="form-group col-md-12">
                    <p>By submitting this form you understand the responsibilities of a volunteer and if
                        selected will uphold the above expectations.</p>
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
                                    <legend><h1 className="text-center"><b>Volunteer Sign-Up Form</b></h1>
                                    </legend>
                                    {this.informationInputSection()}
                                </fieldset>
                                <div className="form-group">
                                    <div className="text-center">
                                        <div id="submit-Container">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id=""/>
                                                    I accept the terms & conditions of becoming a volunteer for the
                                                    CAS Department.
                                                </label>
                                            </div>
                                            <br/>
                                            <button type="submit"
                                                    className="commonButton"
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
