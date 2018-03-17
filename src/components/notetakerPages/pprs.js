import React from 'react';
import "./pprs-style.css";


class pprs extends React.Component {

    goToHub() {
        location.href = "/hub"; //eslint-disable-line
    }

    openingInformation() {
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
                    <p>1. Students are qualified for accommodations based on best practices, a student interview and
                        supporting documentation. CAS accepts <b>COPIES</b> of documentation only (no originals).
                        Documentation is processed in the order it is received.</p>
                    <p>2. Accommodations are <b>NOT</b> retroactive. I will submit an Accommodation Request Form each
                        semester to receive my accommodation package. <b>Students requesting PRIORITY REGISTRATION ONLY
                            are required to submit an Accommodation Request Form each semester.</b></p>
                    <p>3. It is my responsibility to initiate services and to inform my professors of the accommodations
                        that have been recommended. I will provide an Accommodation Letter and Academic Accommodations
                        Contract to each professor, every semester and for each class in which I am requesting
                        accommodations.</p>
                    <p>4. I will return the white copy of the triplicate Academic Accommodations Contract, signed both
                        by myself and the professor, to the CAS <b>within five (5) business days</b> of obtaining
                        signatures.</p>
                    <p>5. I will notify the CAS of any concerns regarding my accommodations so they may be addressed in
                        a timely manner.</p>
                    <p>6. Documentation is valid for academic accommodations at Radford University <b>ONLY</b> and may
                        not
                        fulfill the accommodation requirements for entities that administer standardized tests.
                        (GRE, Praxis, VCLA, etc.)</p>
                    <p>7. Registered student files will be purged five years from the last date of service, without
                        notification.</p>
                    <p>8. By written student request, CAS will provide copies of CAS service related records. Requests
                        for
                        copies of documentation (medical records, IEPs, etc.) should be made to the original
                        provider.</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="initial">(initial) <b>I understand and agree to the CAS policies and
                        responsibilities listed above.</b></label>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" name="studentId" id="initial"
                           placeholder="FL"/>
                </div>
            </div>);
    }

    policiesAndResponsibilitiesForRecordingDevices() {
        return (
            <div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="recordingDevices">Are you eligible for the use of a Recording
                        Devices?</label>
                </div>
                <div className="form-group col-md-3">
                    <label className="radio-inline"><input type="radio" name="yesRecordingDevice" value="Y"/>
                        YES</label>
                    <label className="radio-inline"><input type="radio" name="noRecordingDevice" value="N"/>
                        NO</label>
                </div>
                <div className="form-group col-md-12">
                    <p>1. Prior to using the recording device, I will notify my instructor of what recording device(s)
                        I will use and discuss the plan of use with my professor.</p>
                    <p>2. Information recorded during class lectures and discussions will be used to support my
                        education.
                        I will maintain private and exclusive use of all recorded lectures and/or discussions.
                        I will destroy recorded material at the end of the semester.</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="initialRD">(initial) <b>I understand and agree to the policies and
                        responsibilities listed above related to recording devices.</b></label>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" name="initialRD" id="initialRD"
                           placeholder="FL"/>
                </div>
            </div>
        );
    }

    noteTakingServicesCoordinationAgreement() {
        return (
            <div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="noteTakingServices">Are you eligible for Note Taking
                        Services?</label>
                </div>
                <div className="form-group col-md-3">
                    <label className="radio-inline"><input type="radio" name="yesNoteTakingServices" value="Y"/>
                        YES</label>
                    <label className="radio-inline"><input type="radio" name="noNoteTakingServices" value="N"/>
                        NO</label>
                </div>
                <div className="form-group col-md-12">
                    {/*Supposed to be empty*/}
                </div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="anonymous">Do you want to be Known or Anonymous?</label>
                </div>
                <div className="form-group col-md-6">
                    <label className="radio-inline"><input type="radio" name="yesAnonymous" value="Y"/>
                        Known</label>
                    <label className="radio-inline"><input type="radio" name="noAnonymous" value="N"/>
                        Anonymous</label>
                </div>
                <div className="form-group col-md-12">
                    <p><b>** Coordinating with your note taker will greatly improve the quality of this service and will
                        allow
                        you to communicate directly with your note taker when questions arise.</b></p>
                </div>
            </div>
        );

    }

    policiesAndResponsibilitiesForNoteTakingServices() {
        return (
            <div>
                <div className="form-group col-md-12">
                    <p>I will contact the CAS immediately if I am not receiving notes in a timely manner or
                        if I withdraw from a class.</p>
                </div>

                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="responsibilitiesForNTS">(initial) <b>I understand and agree to
                        the policy/responsibility listed above related to note taking services.</b></label>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" name="initialNTS" id="initialNTS"
                           placeholder="FL"/>
                </div>
            </div>
        );
    }

    policiesAndResponsibilitiesForTQEProctoringCAS() {
        return (
            <div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="testAccommodation">Are you eligible for Test
                        Accommodation?</label>
                </div>
                <div className="form-group col-md-3">
                    <label className="radio-inline"><input type="radio" name="yesTestAccommodation" value="Y"/>
                        YES</label>
                    <label className="radio-inline"><input type="radio" name="noTestAccommodation" value="N"/>
                        NO</label>
                </div>
                <div className="form-group col-md-12">
                    <p>1. To secure test/quiz/exam accommodations, I will complete the Proctoring Request Form with my
                        professor and submit it at least<b> seven (7) business days prior to the test/quiz/exam.</b>
                        Tests/quizzes/exams scheduled in the CAS will begin between the hours of<b>8am and 2:30pm,
                            Monday through Friday.</b></p>
                    <p>2. I will arrive ten (10) minutes prior to the test/quiz/exam time on the scheduled day approved
                        on the Proctoring Request Form. I will arrive no later than fifteen (15) minutes after the
                        scheduled time to be eligible to take the test/quiz/exam in the CAS.</p>
                    <p>3. I will bring and use only the materials approved by the instructor on the Proctoring Request
                        Form.
                        I will leave unauthorized materials, including jackets, backpacks, cell phones, etc. outside the
                        testing area.</p>
                    <p>4. I will adhere to the Radford University Honor Code. The CAS monitors and records all testing
                        rooms. Any academic infractions will be reported immediately to the professor to determine
                        course
                        of action.</p>
                </div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="responsibilitiesTQE">(initial) <b>I understand and agree to all
                        policies and responsibilities listed above related to test/quiz/exam
                        proctoring in the CAS.</b></label>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" name="initialTQE" id="initialTQE"
                           placeholder="FL"/>
                </div>
            </div>
        );
    }

    policiesAndResponsibilitiesForAlternateTextRequests() {
        return (
            <div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="altTextRequests">Are you eligible for Alternate Text
                        Requests?</label>
                </div>
                <div className="form-group col-md-3">
                    <label className="radio-inline"><input type="radio" name="yesAltTextRequests" value="Y"/>
                        YES</label>
                    <label className="radio-inline"><input type="radio" name="noAltTextRequests" value="N"/>
                        NO</label>
                </div>
                <div className="form-group col-md-12">
                    <p>1. I will submit an alternate text request form and copies of receipts for my alternate text
                        needs.
                        Allow<b> ten (10) business days from the time both the request form and the receipts have been
                            submitted </b>
                        to process the request. <b>PUBLISHERS CAN TAKE LONGER THAN 10 BUSINESS DAYS TO PROVIDE ALTERNATE
                            FORMATS TO THE CAS.</b></p>
                    <p>2. I will comply with the Copyright Revision Act of 1976, as amended (17 U.S.C SEC 101 et. Seq.)
                        and not copy, duplicate, distribute or alter the materials received through this accommodation
                        for any purpose. Alternate text formats/assistive technology are for my personal use only.</p>
                    <p>3. Alternate text formats will be destroyed or returned to the CAS if I am no longer in
                        possession
                        of the original textbook (i.e., if the original is sold, traded or returned after rental).</p>
                </div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="responsibilitiesATR">(initial) <b> I understand and agree to all
                        of the policies and responsibilities listed above related to alternate text.</b></label>
                </div>
                <div className="form-group col-md-2">
                    <input type="text" className="form-control" name="initialATR" id="initialATR"
                           placeholder="FL"/>
                </div>
                <div className="form-group col-md-12">
                    <p>I have read the Policies and Procedures for Receiving Services and will adhere to them.</p>
                    <p>I understand that if I do not adhere to the above, there will be a delay in receiving
                        accommodations.</p>
                    <p>I understand that I may be required to submit additional documentation to support my request.</p>
                    <p>I understand that alternate accommodation strategies will be explored should requested
                        accommodations
                        violate the technical standards of the course or program.
                    </p>
                </div>
                <div className="form-group col-md-6">
                    <label className=".value" htmlFor="student-signature">Student Signature:</label>
                    <input type="text" name="studentSignature" className="form-control" id="student-signature"
                           placeholder="Signature"/>
                </div>
                <div className="form-group col-md-3">
                    <label className=".value" htmlFor="student-signature-date">Date:</label>
                    <input type="text" name="studentSignatureDate" className="form-control" id="student-signature-date"
                           placeholder="MM-DD-YYYY"/>
                </div>
                <div className="form-group col-md-3">
                    <label className=".value" htmlFor="student-signature-AY">Academic Year:</label>
                    <input type="text" name="studentSignatureAY" className="form-control" id="student-signature-AY"
                           placeholder="YYYY"/>
                </div>
                <div className="form-group col-md-12">
                    {/*Suppose to be empty*/}
                </div>
            </div>
        );
    }

    submitBox() {
        return (
            <div>
                <div className="form-group col-md-12">
                    <div className="form-group">
                        <div id="submit-Container">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" id=""/>
                                    I accept the terms & conditions of Policies and Procedures for Receiving
                                    Services.
                                </label>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <br/>
                        </div>
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
                                    <legend><h1 className="text-center"><b>Policies and Procedures for Receiving
                                        Services</b></h1></legend>
                                    {this.openingInformation()}
                                </fieldset>
                                <fieldset>
                                    <legend align="top"><b>Policies and Responsibilities for Recording Devices</b>
                                    </legend>
                                    {this.policiesAndResponsibilitiesForRecordingDevices()}
                                </fieldset>
                                <fieldset>
                                    <legend align="top"><b>Note Taking Coordination Agreement</b></legend>
                                    {this.noteTakingServicesCoordinationAgreement()}
                                </fieldset>
                                <fieldset>
                                    <legend align="top"><b>Policies and Responsibilities for Note Taking Services</b>
                                    </legend>
                                    {this.policiesAndResponsibilitiesForNoteTakingServices()}
                                </fieldset>
                                <fieldset>
                                    <legend align="top"><b>Policies and Responsibilities for Test/Quiz/Exam Proctoring
                                        in
                                        the CAS</b></legend>
                                    {this.policiesAndResponsibilitiesForTQEProctoringCAS()}
                                </fieldset>
                                <fieldset>
                                    <legend align="top"><b>Policies and Responsibilities for Alternate Text Requests</b>
                                    </legend>
                                    {this.policiesAndResponsibilitiesForAlternateTextRequests()}
                                </fieldset>
                                <div className="form-group">
                                    <div className="text-center">
                                        <div id="submit-Container">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" id=""/>
                                                    I accept the terms & conditions of the Policies and Procedures for
                                                    Receiving Services
                                                </label>
                                            </div>
                                            <br/>
                                            <button type="button" className="btn btn-primary"
                                                    onClick={this.goToHub}>Submit
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

export default pprs;