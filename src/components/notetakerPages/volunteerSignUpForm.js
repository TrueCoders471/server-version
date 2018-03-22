import React from 'react';
import "./volunteerSignUpFormStyles.css"


class volunteerSignUpForm extends React.Component {

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
                    <label className=".value" htmlFor="volNoteTakerExpectations"><h4>Volunteer Note Taker Expectations:</h4></label>
                </div>
                <div className="form-group col-md-6">
                    <ul>
                        <li>Attend classes regularly</li>
                        <li>Write legibly</li>
                        <li>Complete mandatory Note Taker Training Program provided by the Center for Accessibility Services</li>
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
                    <label className=".value" htmlFor="volNoteTakerPerks"><h4>Volunteer Note Taker Perks:</h4></label>
                </div>
                <div className="form-group col-md-6">
                    <ul>
                        <li>Early registration for next semester</li>
                        <li>Community Service</li>
                        <li>Résumé Builder</li>
                    </ul>
                </div>
                <div className="form-group col-md-12">
                    <p>By submitting this form you understand the responsibilites of a Note Taker and if
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
                                    <legend><h1 className="text-center"><b>Volunteer Note Taker Sign-Up Form</b></h1></legend>
                                    {this.informationInputSection()}
                                </fieldset>
                                <div className="form-group">
                                    <div className="text-center">
                                        <div id="submit-Container">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id=""/>
                                                    I accept the terms & conditions of becoming a note taker for the
                                                    CAS Department.
                                                </label>
                                            </div>
                                            <br/>
                                            <button type="button" className="btn btn-primary">Submit
                                            </button>
                                            {/* function that submits information to the database */}
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

export default volunteerSignUpForm;