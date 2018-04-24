import React from 'react';
//npm install --save html-to-reactimport ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './SignUpForm-Styles.css';

export default class StudentSignUpForm extends React.Component {
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
            gender: 'Choose ...',
            birth_date: '',
            canBeSubmitted: false,
        }
    };

    validate(username, password, confirm_password, first_name, last_name, email, phone, ru_id, gender, birth_date) {
        return {
            username: username.length === 0,
            password: password.length === 0,
            confirm_password: confirm_password.length === 0,
            first_name: first_name.length === 0,
            last_name: last_name.length === 0,
            email: email.length === 0,
            phone: phone.length === 0,
            ru_id: ru_id.length === 0,
            gender: gender === "Choose ...",
            birth_date: birth_date.length === 0
        }
    };

    canBeSubmitted() {
        console.log("enter can be submitted");
        const errors = this.validate(this.state.username, this.state.password, this.state.confirm_password,
            this.state.first_name, this.state.last_name, this.state.email, this.state.phone,
            this.state.ru_id, this.state.gender, this.state.birth_date);
        const isDisabled = Object.keys(errors).some(x => errors[x]) && (this.state.password !== this.state.confirm_password !== '');
        console.log(!isDisabled);
        return !isDisabled;
    };


    registerStudent(e) {
        e.preventDefault();
        const firstName = document.getElementById("first-name-field").value;
        const lastName = document.getElementById("last-name-field").value;
        const email = document.getElementById("email-field").value;
        const ruId = document.getElementById("ru-id-field").value;
        const phone = document.getElementById("phone-field").value;
        const username = document.getElementById("userName-field").value;
        const password = document.getElementById("password-field").value;
        const gender = document.getElementById("gender").value;
        const dob = document.getElementById("dob-field").value;
        const street = document.getElementById("street-field").value;
        const res_hall = document.getElementById("res-hall-field").value;
        const room = document.getElementById("room-field").value;
        const city = document.getElementById("city-field").value;
        const state = document.getElementById("state").value;
        const zip = document.getElementById("zip-field").value;
        const standing = document.getElementById("standing").value;
        const time = document.getElementById("fullTime").checked ? "full time" : "part time";
        const major = document.getElementById("major").value;
        const graduation = document.getElementById("graduation").value;

        console.log(gender);
        console.log(dob);
        console.log(ruId);
        console.log(firstName);
        console.log(city);
        console.log(standing);
        console.log(time);
        console.log(major);


        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const bodyBasic = JSON.stringify({
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            ru_id: ruId,
            gender: gender,
            birth_date: dob,
            role: 'student',
            street: street,
            res_hall: res_hall,
            room: room,
            city: city,
            state: state,
            zip: zip,
            standing: standing,
            time: time,
            major: major,
            graduation: graduation
        });

        console.log(bodyBasic);

        window.fetch('http://localhost:7555/registerStudent',
            //window.fetch('http://137.45.220.128:443/registerStudent',
            {
                method: 'POST',
                headers: headers,
                body: bodyBasic
            })
            .then((res) => {
                if (res.status === 200) res.text().then(function (text) {
                    if (text === "OK") {
                        alert(`User ${username} has been registered`);
                        location.href = "/student"; //eslint-disable-line
                    } else {
                        alert("Something went wrong");
                    }
                });
            });
    };

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
    handleDOBChange = (evt) => {
        this.setState({birth_date: evt.target.value});
    };
    handleGenderChange = (evt) => {
        this.setState({gender: evt.target.value});
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

    /**
     * returns the XML Representation of the Basic info fields
     * used to collect the user's inputted Basic Account information.
     * @returns {XML}
     */
    basicAccountFields() {
        const errors = this.validate(this.state.username, this.state.password, this.state.confirm_password,
            this.state.first_name, this.state.last_name, this.state.email, this.state.phone,
            this.state.ru_id, this.state.gender, this.state.birth_date);
        return (
            <div>
                <legend align="top">Basic Details</legend>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="first_name" required>First name:</label>
                    <input type="text"
                           className={errors.first_name ? "error" : "form-control"}
                           id="first-name-field"
                           value={this.state.first_name}
                           placeholder="First Name"
                           onChange={this.handleFirstNameChange}
                    />
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="last_name">Last name:</label>
                    <input type="text"
                           className={errors.last_name ? "error" : "form-control"}
                           id="last-name-field"
                           value={this.state.last_name}
                           placeholder="Last Name"
                           onChange={this.handleLastNameChange}
                    />
                </div>
                <div className="form-group col-md-4" align="left">
                    <label htmlFor="RUID">RU ID#:</label>
                    <input type="text"
                           className={errors.ru_id ? "error" : "form-control"}
                           id="ru-id-field"
                           value={this.state.ru_id}
                           placeholder="000000000"
                           onChange={this.handleRuIdChange}
                    />
                </div>
                <div className="form-group col-md-4" align="left">
                    <label htmlFor="DOB">Birth Date: </label>
                    <input type="text"
                           className={errors.birth_date ? "error" : "form-control"}
                           id="dob-field"
                           value={this.state.birth_date}
                           placeholder="01-23-1998"
                           onChange={this.handleDOBChange}
                    />
                </div>
                <div className="form-group col-md-4" align="left">
                    <label htmlFor="gender">Gender: </label>
                    <select className={errors.gender ? "error" : "form-control"}
                            name="genderField"
                            id="gender"
                            value={this.state.gender}
                            onChange={this.handleGenderChange}>
                        <option defaultValue>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="">Email:</label>
                    <input type="email"
                           className={errors.email ? "error" : "form-control"}
                           id="email-field"
                           value={this.state.email}
                           placeholder="@Email.com"
                           onChange={this.handleEmailChange}
                    />
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="">Phone #:</label>
                    <input type="text"
                           className={errors.phone ? "error" : "form-control"}
                           id="phone-field"
                           value={this.state.phone}
                           placeholder="000-000-0000"
                           onChange={this.handlePhoneChange}
                    />
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="username">Username:</label>
                    <input type="text"
                           className={errors.username ? "error" : "form-control"}
                           id="userName-field"
                           value={this.state.username}
                           placeholder="Username"
                           onChange={this.handleUsernameChange}
                    />
                </div>
                <br/><br/>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="password">Password:</label>
                    <input type="password"
                           className={errors.password ? "error" : "form-control"}
                           id="password-field"
                           value={this.state.password}
                           placeholder="Password"
                           onChange={this.handlePasswordChange}
                    />
                </div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input type="password"
                           className={errors.confirm_password ? "error" : "form-control"}
                           id="confirm-password-field"
                           value={this.state.confirm_password}
                           placeholder="Confirm Password"
                           onChange={this.handleConfirmPasswordChange}
                    />
                </div>
            </div>
        );
    };

    /**
     * returns the XML Representation of the address fields used to collect the user's inputted Address information.
     * @returns {XML}
     */
    addressField() {
        return (
            <div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="inputAddress">Street:</label>
                    <input type="text" className="form-control" id="street-field"
                           placeholder="1234 Main St"/>
                </div>
                <div className="form-group col-md-4" align="left">
                    <label htmlFor="Hall">Residential Hall:</label>
                    <input type="text" className="form-control" id="res-hall-field" placeholder="Tyler Hall"/>
                </div>
                <div className="form-group col-md-2" align="left">
                    <label htmlFor="inputZip">Room #:</label>
                    <input type="text" className="form-control" id="room-field"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6" align="left">
                        <label htmlFor="inputCity" >City:</label>
                        <input type="text" className="form-control" id="city-field"/>
                    </div>
                    <div className="form-group col-md-4" align="left">
                        <label htmlFor="inputState">State:</label>
                        <select id="state" name="stateLetterField" className="form-control">
                            <option defaultValue>Choose...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2" align="left">
                        <label htmlFor="inputZip">Zip
                            code:</label>
                        <input type="text" className="form-control" id="zip-field"/>
                    </div>
                </div>
            </div>
        );
    }

    studentStatusFields() {
        return (
            <div>
                <div className="form-group col-md-6" align="left">
                    <label htmlFor="country">Class Standing:</label>
                    <select className="form-control"
                            name="classStandingField"
                            id="standing"
                    >
                        <option defaultValue>Choose...</option>
                        <option value="Transfer">Transfer</option>
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Graduate">Graduate</option>
                    </select>
                </div>

                <div className="form-group col-md-6" id="time" align="left">
                    <label htmlFor="classStandings">Time Status: </label>
                    <br/>
                    <label className="radio-inline"><input type="radio" name="classStandingField" value="Full Time" id="fullTime"/>
                        Full Time</label>
                    <label className="radio-inline"><input type="radio" name="classStandingField" value="Part Time" id="partTime"/>
                        Part Time</label>
                </div>
                <div className="form-group col-md-8" align="left">
                    <label htmlFor="Select Major">Major:</label>
                    <select className="form-control"
                            name="majorField"
                            id="major">
                        <option defaultValue>Choose...</option>
                        <option value="Pre-Major">Pre-Major</option>
                        <option disabled>---College of Business and Economics</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Economics">Economics</option>
                        <option value="Finance">Finance</option>
                        <option value="Management">Management</option>
                        <option value="Marketing">Marketing</option>

                        <option disabled>College of Education and Human Development</option>
                        <option value="Athletic Training">Athletic Training</option>
                        <option value="Exercise, Sport and Health Education">Exercise, Sport and Health Education
                        </option>
                        <option value="Interdisciplinary Studies<">Interdisciplinary Studies</option>
                        <option value="Nutrition and Dietetics">Nutrition and Dietetics</option>
                        <option value="Recreation, Parks and Tourism">Recreation, Parks and Tourism</option>

                        <option disabled>College of Humanities and Behavioral Sciences</option>
                        <option value="Communication">Communication</option>
                        <option value="Criminal Justice">Criminal Justice</option>
                        <option value="English">English</option>
                        <option value="Foreign Languages">Foreign Languages</option>
                        <option value="History">History</option>
                        <option value="Interdisciplinary Studies in Liberal Arts">
                            Interdisciplinary Studies in Liberal Arts
                        </option>
                        <option value="Media Studies">Media Studies</option>
                        <option value="Philosophy and Religious Studies">Philosophy and Religious Studies</option>
                        <option value="Political Science">Political Science</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Social Science">Social Science</option>
                        <option value="Sociology">Sociology</option>
                        <option disabled>Artis College of Science and Technology</option>
                        <option disabled>College of Visual and Performing Arts</option>
                        <option disabled>Waldron College of Health and Human Services</option>
                    </select>
                </div>
                <div className="form-group col-md-4" align="left">
                    <label htmlFor="GraduationDate">Graduation Date: </label>
                    <input type="text" className="form-control" name="GraduationDateField" id="graduation"
                           placeholder="Spring 2021"/>
                </div>
            </div>
        );
    }

    /**
     * renders the components associated with this Account Creation page.
     * @returns {XML} : (Markup Language) for rendering the elements within this page
     */
    regstudentInfo() {
        return (
            <div className="form-group col-md-12" align="left">
                <div id="RegStudent-border">
                    <p>To become a registered student with the Center for Accessibility Services (CAS), follow these
                        steps:
                        <br/></p>
                    <p>1. Complete the Student Registration Form and submit documentation from your medical professional
                        no
                        later than:</p>
                    <ul>
                        <li>April 15 if requesting Summer, Maymester, or Augustmester medical housing, classroom, and
                            testing accommodations
                        </li>
                        <li>June 30 if requesting medical housing accommodations for the upcoming academic year due to a
                            medical/physical condition or qualifying disability
                        </li>
                        <li>July 31 for Fall semester classroom and testing accommodations</li>
                        <li>December 15 for Spring semester classroom and testing accommodations</li>
                    </ul>
                    <p>2. New students attend QUEST** (see below).</p>
                    <p>3. Complete your interview with your Disability Services Specialist (DSS) prior to the first day
                        of
                        classes, or as soon as possible, if classes have begun (i.e. Skype, face time, phone, or in-
                        person
                        interview).
                    </p>
                    <br/>
                    <p><b>NOTE: Once documentation is received and your interview is complete, allow ten (10) business
                        days
                        to process your package.</b></p>
                    <br/>
                    <p>4. Complete a Request for Accommodations Form and submit it to the CAS.</p>
                    <p>5. Pick-up your accommodation packet once you have been notified.</p>
                    <p>6. Meet with each of your professors/instructors during their office hours to discuss your
                        accommodation packet and to obtain the necessary signatures.</p>
                    <p>7. Return the white copies of your Academic Accommodations Contracts and any other forms
                        to the CAS within five business days.</p>
                    <p>8. Submit a Request for Accommodations Form <b>EVERY</b> subsequent semester immediately after
                        registering for classes.</p>
                    <p>9. Schedule a follow-up appointment with your DSS if you are not receiving an accommodation
                        or if you need additional support.</p>
                    <br/>
                    <p>**If you are a new student or transfer student to Radford University, QUEST is our campus
                        orientation. During your visit to campus is an excellent time to schedule a meeting with a DSS.
                    </p>
                    <p>During your interview with your DSS, discuss any challenges you face in the classroom or around
                        campus. This is a collaborative effort between you and your DSS to see that reasonable
                        accommodations are implemented and subsequently applied.
                    </p>
                    <p>The DSS may request additional documentation to qualify you for a requested accommodation. You
                        may
                        also be asked for a letter of impact or be provided with information on where and how to obtain
                        assessments.
                    </p>
                    <p>Submit Documentation to the CAS by:<br/>
                        1. Hand delivery to the CAS in Suite 327, Third Floor, Russell Hall<br/>
                        2. Fax to (540) 831-6525<br/>
                        3. Scan and attach in an email to CAS@radford.edu<br/>
                        4. Mail a copy to: Center for Accessibility Services, PO Box 6902, Radford, Virginia 24142<br/>
                    </p>
                </div>
            </div>
        );
    }

    render() {
        const isDisabled = !this.canBeSubmitted();
        return (
            <div className="container">
                <div className="row">
                    <div id="primary" className="col-md-8 col-md-offset-2">
                        <form role="form" method="POST" action="#">
                            <fieldset>
                                <legend><h1 className="text-center">Student General Registration</h1></legend>
                                {this.basicAccountFields()}
                            </fieldset>
                            <fieldset>
                                <legend align="top">Location Details</legend>
                                {this.addressField()}
                            </fieldset>
                            <fieldset>
                                <legend align="top">Student Information</legend>
                                {this.studentStatusFields()}
                                <div className="form-group col-md-12 hidden">
                                    <label htmlFor="specify">Please Specify</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend align="top"> Becoming a Registered Student Terms & Conditions</legend>
                                {this.regstudentInfo()}
                            </fieldset>
                            <fieldset>
                                <legend align="top"> Disability Information</legend>
                                <div align={"left"}>
                                    <p>
                                        State disability/medical condition:
                                        <textarea name={"disability-medicalCondition"}
                                                  id={"disabilityField"}
                                                  value={this.state.disability}
                                                  rows={"4"}
                                                  cols={"100"}
                                                  disabled={isDisabled}>
                                        </textarea>
                                    </p>
                                    <p>
                                        Describe how the disability/medical condition impacts the educational environment:
                                        <textarea name={"descDisability-medicalCondition"}
                                                  id={"descDisabilityField"}
                                                  value={this.state.descDisability}
                                                  rows={"4"}
                                                  cols={"100"}
                                                  disabled={isDisabled}>
                                        </textarea>
                                    </p>
                                </div>
                                <legend align="top">Types of Support/Accomodations</legend>

                                <div align={"left"}>
                                    <p>
                                        Please describe what services you have had in the past in detail and what services
                                        you wish to have at Radford Uiniversity in detail for each of the fileds below:
                                    </p><br/>
                                    <p>
                                        <b>Assistive Technology (e.g. assistive listening device, recording device, laptop)</b>
                                        <textarea name={"previousTech"}
                                                  id={"previousTech"}
                                                  value={this.state.assistiveTech}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                    placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredTech"}
                                                  id={"desiredTech"}
                                                  value={this.state.desiredTech}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Alternate Texts ( e.g. books on CD, braille, enlarged text)</b>
                                        <textarea name={"previousAlternateText"}
                                                  id={"previousAlternateText"}
                                                  value={this.state.previousAlternateText}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredAlternateText"}
                                                  id={"desiredAlternateText"}
                                                  value={this.state.desiredAlternateText}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Note Taking Services</b>
                                        <textarea name={"previousNoteTakingServices"}
                                                  id={"previousNoteTakingServices"}
                                                  value={this.state.previousNoteTakingServices}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredNoteTakingServices"}
                                                  id={"desiredNoteTakingServices"}
                                                  value={this.state.desiredNoteTakingServices}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Exam Accomodations (e.g. extended time, reduced distractions, use a reader
                                                                dictation software)</b>
                                        <textarea name={"previousExamAccomodations"}
                                                  id={"previousExamAccomodations"}
                                                  value={this.state.previousExamAccomodations}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredExamAccomodations"}
                                                  id={"desiredExamAccomodations"}
                                                  value={this.state.desiredExamAccomodations}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Housing Accomodations (MUST comlete Request for Housing Accomodations form)</b>
                                        <textarea name={"previousHousingAccomodations"}
                                                  id={"previousHousingAccomodations"}
                                                  value={this.state.previousHousingAccomodations}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredHousingAccomodations"}
                                                  id={"desiredHousingAccomodations"}
                                                  value={this.state.desiredHousingAccomodations}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Sign Language Interpreting Services/Computer Aided Realtime Translations (CART)</b>
                                        <textarea name={"previousSignLanguageAccomodations"}
                                                  id={"previousSignLanguageAccomodations"}
                                                  value={this.state.previousSignLanguageAccomodations}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredSignLanguageAccomodations"}
                                                  id={"desiredSignLanguageAccomodations"}
                                                  value={this.state.desiredSignLanguageAccomodations}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Closed Captioning/English Subtitles</b>
                                        <textarea name={"previousEnglishSubtitles"}
                                                  id={"previousEnglishSubtitles"}
                                                  value={this.state.previousEnglishSubtitles}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredEnglishSubtitles"}
                                                  id={"desiredEnglishSubtitles"}
                                                  value={this.state.desiredEnglishSubtitles}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <p>
                                        <b>Reduced Course Load (e.g. less than full time)</b>
                                        <textarea name={"previousCourseLoad"}
                                                  id={"previousCourseLoad"}
                                                  value={this.state.previousCourseLoad}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Previously Received (please describe)"}>
                                        </textarea>
                                        <textarea name={"desiredCourseLoad"}
                                                  id={"desiredCourseLoad"}
                                                  value={this.state.desiredCourseLoad}
                                                  rows={"2"}
                                                  cols={"100"}
                                                  disabled={isDisabled}
                                                  placeholder={"Desired at Radford University (please describe)"}>
                                        </textarea>
                                    </p><br/>
                                    <div align={"left"}>
                                        <p>
                                            <b>Any other information you would like to share:</b>
                                            <textarea name={"additionalInfo"}
                                                      id={"additionalInfoField"}
                                                      value={this.state.disability}
                                                      rows={"4"}
                                                      cols={"100"}
                                                      disabled={isDisabled}>
                                        </textarea>
                                        </p>
                                    </div>
                                </div>
                                <legend align="top">Functional Limitations</legend>
                                <div align={"left"}>
                                    Indicate the level of impact on applicable major life activities due to the diagnosis(es):
                                    <p>
                                        <b>Attending Class</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"attendingClass"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"attendingClass"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"attendingClass"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"attendingClass"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Breathing</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"breathing"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"breathing"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"breathing"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled} ></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"breathing"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Calculating</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"calculating"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"calculating"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"calculating"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"calculating"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Caring for Oneself</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"caring"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"caring"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"caring"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"caring"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Concentrating</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Concentrating</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"concentrating"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Eating</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"eating"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"eating"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"eating"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"eating"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Hearing</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"hearing"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"hearing"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"hearing"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"hearing"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Interacting with Others</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"interaction"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"interaction"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"interaction"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"interaction"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Learning</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"learning"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"learning"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"learning"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"learning"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Lifting/Carrying</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"lifting"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"lifting"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"lifting"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"lifting"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Making/Keeping Appointments</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"appointments"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"appointments"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"appointments"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"appointments"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Managing Distractions</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"distractions"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"distractions"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"distractions"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"distractions"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Meeting Deadlines</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"deadlines"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"deadlines"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"deadlines"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"deadlines"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Memorizing</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"memorizing"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"memorizing"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"memorizing"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"memorizing"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Organization</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"organization"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"organization"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"organization"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"organization"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Perfoeming a Manual Task</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"manualTask"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"manualTask"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"manualTask"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"manualTask"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Reaching</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reaching"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reaching"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reaching"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reaching"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Reading</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reading"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reading"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reading"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"reading"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Seeing</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"seeing"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"seeing"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"seeing"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"seeing"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Sitting</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sitting"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sitting"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sitting"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sitting"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Sleeping</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sleeping"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sleeping"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sleeping"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"sleeping"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Spelling</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"spelling"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"spelling"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"spelling"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"spelling"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Stree Management</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"stressManagement"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"stressManagement"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"stressManagement"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"stressManagement"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Taking Exams</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"takingExams"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"takingExams"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"takingExams"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"takingExams"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Talking</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"talking"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"talking"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"talking"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"talking"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Thinking</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"thinking"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"thinking"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"thinking"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"thinking"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Walking/Standing</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"walkingStanding"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"walkingStanding"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"walkingStanding"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"walkingStanding"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Working</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"working"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"working"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"working"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"working"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <p>
                                        <b>Writing</b>
                                        <blockquote>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"writing"}
                                                       value={"noImpact"}
                                                       disabled={isDisabled}></input>   No Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"writing"}
                                                       value={"modImpact"}
                                                       disabled={isDisabled}></input>   Moderate Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"writing"}
                                                       value={"subImpact"}
                                                       disabled={isDisabled}></input>   Substantial Impact
                                            </label>
                                            <label className={"radio-inline"}>
                                                <input type={"radio"}
                                                       name={"writing"}
                                                       value={"dontKnow"}
                                                       disabled={isDisabled}></input>   Don't Know
                                            </label>
                                        </blockquote>
                                    </p>
                                    <div align={"left"}>
                                        <p>
                                            <b>Additional Information:</b>
                                            <textarea name={"additionalInfo"}
                                                      id={"additionalInfoField"}
                                                      value={this.state.disability}
                                                      rows={"4"}
                                                      cols={"100"}
                                                      disabled={isDisabled}>
                                        </textarea>
                                        </p>
                                    </div>
                                </div>
                                <div align={"left"}>
                                    <p>
                                        <b>
                                            Center for Accessability Services (CAS) Records Policy:
                                        </b>
                                        <p>
                                            Files for Registered Students will be stored for five (5) years from the last
                                            date of service, after which the information will be purged, without further
                                            notification. It is the student's responsibility to obtain a copy of the CAS
                                            file departure from Radford University.
                                        </p>
                                    </p>
                                    <p><br/>
                                        <b>
                                            Ackowledgement
                                        </b>
                                        <p>
                                            I have access to the Center for Accessability Services Student Handbook at
                                            www.radford.edu/cas and I will adhere to the CAS policies and procedures.
                                        </p>
                                        <p>
                                            I understand to complete the registration process I must provide documentation
                                            from a treating professional and conduct an interview with a Disability Services
                                            Specialist.
                                        </p>
                                    </p><br/><br/>
                                        <label htmlFor="inputZip">Student Signature</label>
                                        <input type="text" className="form-control" id="studentSig" placeholder="Signature"/>
                                        <br/>
                                        <label htmlFor="inputZip">Date</label>
                                        <input type="text" className="form-control" id="studentDate" placeholder="00-00-0000"/>
                                </div>

                                <legend align="top"> Emergency Info</legend>
                                <div className="checkbox" >
                                    <label>
                                        <input type="checkbox"
                                               name="hasMobilityConcernField"
                                               id="mobilityCheckbox"
                                               value={this.state.mobility}
                                        />
                                        Do you have a mobility concern that would require an emergency responder?
                                    </label>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"
                                               name="reqEmsTransportField"
                                               id="emsCheckbox"
                                               value={this.state.ems}
                                        />
                                        Do you need an emergency responder for medical transport to a hospital to
                                        receive time sensitive medications for a current medical condition?
                                    </label>
                                </div>
                            </fieldset>
                            <div className="form-group">
                                <div id="submit-Container">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"
                                                   id="termsCheckbox"
                                                   value={this.state.terms}/>
                                            I accept the terms & conditions of becoming a Becoming a Registered Student,
                                            listed above.
                                        </label>
                                    </div>
                                    <br/>
                                    <button type="submit"
                                            className={isDisabled ? "disabledCommonButton" : "commonButton"}
                                            disabled={isDisabled}
                                            onClick={this.registerStudent}>
                                        Register
                                    </button>
                                    <div>{isDisabled.value}</div>
                                    <br/>
                                    <br/>
                                    <a href="#">Already have an account?</a>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}