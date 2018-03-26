import React from 'react';
import "./proctoringRequestForm-CSS.css";


class proctoringRequestForm extends React.Component {

    goToHub() {
        location.href ="/hub"; //eslint-disable-line
    }

    formInfoStudent() {
        return (
            <div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="name-field">Name:</label>
                    <input type="text" name="nameField" className="form-control" id="name-field"
                           placeholder="First Last"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="student_id">Student ID:</label>
                    <input type="text" className="form-control" name="studentId" id="student_id"
                           placeholder="000000000"/>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="course-name-number">Course Name and Number:</label>
                    <input type="text" className="form-control" name="courseNameNumber" id="course-name-number"
                           placeholder="Basket Weaving 101"/>
                </div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="student-sig-field">Student Signature:</label>
                    <input type="text" name="sigField" className="form-control" id="student-sig-field"
                           placeholder="First Last"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="date-student">Date:</label>
                    <input type="text" className="form-control" name="dateStudent" id="date-student"
                           placeholder="MM-DD-YYYY"/>
                </div>
            </div>
        );
    }

    formInfoProfessor() {
        return (
            <div>
                <div className="form-group col-md-12">
                    <p className="text-center"><b>* Use of the term "test" also includes any assessment, quiz or exam
                        *</b></p>
                </div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="professor-name-field">Professor Name:</label>
                    <input type="text" name="professorNameField" className="form-control" id="professor-name-field"
                           placeholder="First Last"/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="date-student">Duration of Test:</label>
                    <br />
                    <label className="radio-inline"><input type="radio" name="50mins" value="T"/>
                        50mins</label>
                    <label className="radio-inline"><input type="radio" name="75mins" value="T"/>
                        75mins</label>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="other-time">Other:</label>
                    <input type="text" className="form-control" name="otherTime" id="other-time"
                           placeholder="000mins"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="date-student-take">Date Student will take test:</label>
                    <input type="text" className="form-control" name="dateStudentTake" id="date-student-take"
                           placeholder="MM-DD-YYYY"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="time-student-take">Time Student will take test:</label>
                    <input type="time" className="form-control" name="timeStudentTake" id="time-student-take"/>
                </div>
                <div className="form-group col-md-12">
                    <label>Contact information, for any CAS staff questions DURING scheduled time:</label>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="location">Location:</label>
                    <input type="text" className="form-control" name="Location" id="location"
                           placeholder="(required)"/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="office-phone">Office Phone:</label>
                    <input type="text" className="form-control" name="officePhone" id="office-phone"
                           placeholder="(required)"/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="cell-phone">Cell Phone:</label>
                    <input type="text" className="form-control" name="cellPhone" id="cell-phone"
                           placeholder="(optional)"/>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="date-student">Check items ALLOWED in the testing room: (book bags, electronic
                        devices,
                        purses, etc. are not allowed)</label>
                </div>
                <div className="form-group col-md-12">
                    <div className="text-center">
                        <label className="checkbox-inline"><input type="checkbox" name="calculator" value="T"/>
                            Calculator</label>
                        <label className="checkbox-inline"><input type="checkbox" name="class-notes" value="T"/>
                            Class Notes</label>
                        <label className="checkbox-inline"><input type="checkbox" name="formula-sheets" value="T"/>
                            Formula Sheets</label>
                        <label className="checkbox-inline"><input type="checkbox" name="note-cards" value="T"/>
                            Note Cards</label>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <div className="text-center">
                        <label className="checkbox-inline"><input type="checkbox" name="study-guide" value="T"/>
                            Study Guide</label>
                        <label className="checkbox-inline"><input type="checkbox" name="workbook" value="T"/>
                            Workbook</label>
                        <label className="checkbox-inline"><input type="checkbox" name="open-book-notes" value="T"/>
                            Open Book/Open Notes</label>
                        <label className="checkbox-inline"><input type="checkbox" name="scantron" value="T"/>
                            Scrantron</label>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="other-test-item">Other: </label>
                    <input type="text" className="form-control" name="otherTestItem" id="other-test-item"
                           placeholder="item1,item2,etc."/>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="other-test-item">Pre-Test Delivery Instructions (do not use campus mail)</label>
                </div>
                <div className="form-group col-md-6">
                    <label className="checkbox-inline"><input type="checkbox" name="swdtCAS" value="T"/>
                        Student will deliver to CAS</label>
                </div>
                <div className="form-group col-md-3">
                    <label className="checkbox-inline"><input type="checkbox" name="pwdtCAS" value="T"/>
                        Professor will deliver to CAS</label>
                </div>
                <div className="form-group col-md-3">
                    <input type="text" className="form-control" name="pwdtDate" id="PWDTDate"
                           placeholder="MM-DD-YYYY"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="checkbox-inline"><input type="checkbox" name="pdwdtCAS" value="T"/>
                        Professor designee will deliver to CAS</label>
                </div>
                <div className="form-group col-md-3">
                    <label className="checkbox-inline"><input type="checkbox" name="pwEmailCAS" value="T"/>
                        Professor will email CAStests@radford.edu on</label>
                </div>
                <div className="form-group col-md-3">
                    <input type="text" className="form-control" name="pwdtDate" id="PWDTDate"
                           placeholder="MM-DD-YYYY"/>
                </div>
                <div className="form-group col-md-12">
                    <label className="checkbox-inline"><input type="checkbox" name="twbpo" value="T"/>
                        Test will be posted online</label>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="other-test-item">Post-Test Delivery Instructions
                        (CAS does not hand deliver or mail completed tests)</label>
                </div>
                <div className="form-group col-md-6">
                    <label className="checkbox-inline"><input type="checkbox" name="pwpu" value="T"/>
                        Professor will pick up</label>
                </div>
                <div className="form-group col-md-2">
                    <label className="checkbox-inline"><input type="checkbox" name="casWEmailT" value="T"/>
                        CAS will email to</label>
                </div>
                <div className="form-group col-md-4">
                    <input type="text" className="form-control" name="casEmailT" id="casEMAILt"
                           placeholder="somthing@radford.edu"/>
                </div>
                <div className="form-group col-md-6">
                    <label className="checkbox-inline"><input type="checkbox" name="swrtp" value="T"/>
                        Student will return to professor</label>
                </div>
                <div className="form-group col-md-6">
                    <label className="checkbox-inline"><input type="checkbox" name="pdwpu" value="T"/>
                        Professor designee will pick up</label>
                </div>
                <div className="form-group col-md-12">
                    <label>Additional delivery/return instructions:</label>
                    <input type="text" className="form-control" name="addDelRetInInput" id="addDelRetIn-Input"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Professor Signature:</label>
                    <input type="text" className="form-control" name="professorSig" id="professor-sig"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Date:</label>
                    <input type="text" className="form-control" name="professorDate" id="professor-Date"
                           placeholder="MM-DD-YYYY"/>
                </div>
                <div className="form-group col-md-12">
                    <label><u>Information for Professors and CAS registered students</u></label>
                    <p>1. A Proctoring Request Form is <b>NOT</b> required if the Professor and student have agreed to
                        an
                        alternate test location outside the CAS.</p>
                    <p>2. The Professor and student should complete <b>ALL</b> sections of this form and <b>return it to
                        the CAS
                        prior to the scheduled test date.</b></p>
                    <p>3. Tests may be scheduled Monday-Friday (Monday-Thursday for Final Exams only) and should begin
                        at or before 2:30pm.</p>
                    <p>4. Electronic versions of tests should be emailed to CAStests@radford.edu</p>
                    <p><b>5. Students may begin their tests up to 15 minutes past the scheduled start time but will only
                        be
                        allowed the remainder of their extended time. Students later than 15 minutes MUST reschedule
                        with
                        written permission from the Professor and should begin before 2:30pm.</b></p>
                    <p>6. Proctors in the CAS will regularly monitor students and report Honor Code violations.</p>
                    <p>7. Tests being delivered to the CAS by the student should be in a sealed envelope.</p>
                    <p>8. Tests returned by the student will be in a sealed envelope.</p>
                </div>
            </div>
        );
    }

    formInfoCAS() {
        return (
            <div>
                <div className="form-group col-md-3">
                    <label>Testing Room:</label>
                    <input type="text" className="form-control" name="TestingRoom" id="testing-room"
                           placeholder="Room Number"/>
                </div>
                <div className="form-group col-md-3">
                    <label>AT Lab:</label>
                    <input type="text" className="form-control" name="atLab" id="at-lab"
                           placeholder="Lab"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Other:</label>
                    <input type="text" className="form-control" name="otherCas" id="other-cas"
                           placeholder="other"/>
                </div>
                <div className="form-group col-md-3">
                    <label>Extended Time:</label>
                    <input type="text" className="form-control" name="extendedTime" id="testing-room"
                           placeholder="00min"/>
                </div>
                <div className="form-group col-md-3">
                    <label>Time Start:</label>
                    <input type="time" className="form-control" name="timeStart" id="time-start"/>
                </div>
                <div className="form-group col-md-6">
                    <label>Time Ended:</label>
                    <input type="time" className="form-control" name="timeEnd" id="time-end"/>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container" align="left">
                <div className="row">
                    <div id="primary" className="col-md-8 col-md-offset-2">
                        <form role="form" method="POST" action="#">
                            <fieldset>
                                <legend><h1 className="text-center">Proctoring Request Form</h1></legend>
                                <p><b>* <u>Submit this form 7 business days prior to the scheduled test date</u> to
                                    allow
                                    coordination of services. <u>Tests should begin at or before 2:30pm.</u>
                                </b></p>
                            </fieldset>
                            <fieldset>
                                <legend><h1 className="text-center">To be completed by the student</h1></legend>
                                {this.formInfoStudent()}
                            </fieldset>
                            <fieldset>
                                <legend><h1 className="text-center">To be completed by the professor</h1></legend>
                                {this.formInfoProfessor()}
                            </fieldset>
                            <fieldset>
                                <legend><h1 className="text-center">FOR CAS USE ONLY</h1></legend>
                                {this.formInfoCAS()}
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div className="text-center">
                    <div className="form-group">
                        <div id="submit-Container">
                            <br/>
                            <button type="button" className="commonButton" onClick={this.goToHub}>Submit</button>
                            <br/>
                            <br/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default proctoringRequestForm;