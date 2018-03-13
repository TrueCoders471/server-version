import React from 'react';
//npm install --save html-to-reactimport ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './Accommodation-Styles.css';

class RequestForAccommodationsForm extends React.Component {
    goToHub() {
        location.href ="/hub"; //eslint-disable-line
    }
    requestInfo(){
        return(
            <div className="form-group col-md-12">
                <div id="RegStudent-border">
                    <p>
                        To request academic accommodations, complete <b>ALL</b> sections below.
                    </p>
                    <br/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name = "priorityReg" id="priorityRegCheckbox"/>
                            <b>If requesting PRIORITY REGISTRATION ONLY, CHECK HERE</b>. Do not check this box if requesting
                            academic accommodations.
                        </label>
                    </div>
                    <br/>
                    <p>
                        Class schedule changes require a new form to be submitted. Contact your assigned Disabillity Services
                        Specialist with questions.
                    </p>
                    <br/>
                    <p> <b>Which campus site attending are you attending:</b> </p>
                        <div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name = "RHECenter" id="RHECenterCheckbox"/>
                                    Roanoke Higher Education Center
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name = "RadfordCampus" id="RadfordCampusCheckbox"/>
                                    Radford Campus
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name = "Other" id="OtherCheckbox"/>
                                    Other
                                </label>
                                <input type="text" name="OtherText" id="OtherText" placeholder="Campus Site"/>
                            </div>
                        </div>

                    <br/>
                    <p> <b>Semester in which accommodations are being requested:</b> </p>
                    <div className="text-center">
                        <div className="form-group col-md-12">
                            <label className="checkbox-inline"><input type="checkbox" name="Fall" value="Y"/>
                                Fall</label>
                            <label className="checkbox-inline"><input type="checkbox" name="Wintermester" value="Y"/>
                                Wintermester</label>
                            <label className="checkbox-inline"><input type="checkbox" name="Spring" value="Y"/>
                                Spring</label>
                            <label className="checkbox-inline"><input type="checkbox" name="Maymester" value="Y"/>
                                Maymester</label>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="form-group col-md-12">
                            <label className="checkbox-inline"> <input type="checkbox" name="SummerOne" value="Y"/>
                                Summer 1</label>
                            <label className="checkbox-inline"> <input type="checkbox" name="SummerTwo" value="Y"/>
                                Summer 2</label>
                            <label className="checkbox-inline"> <input type="checkbox" name="SummerThree" value="Y"/>
                                Summer 3</label>
                            <label className="checkbox-inline"><input type="checkbox" name="Augustmester" value="Y"/>
                                Augustmester</label>
                        </div>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputAddress">Course Information</label>
                        <input type="textfield" name = "coursesField" className="form-control" id="courseInput"
                               placeholder="Course Name   |   Section Number   |   Location   |   Professor"/>
                    </div>
                    <p>
                        <b>In the event of a campus emergency, do you:</b>
                    </p>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="mobilityCheckbox" id="mobilityCheckbox"/>
                            have a mobility concern that would require an emergency responder to assist?
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="medicationsCheckbox" id="medicationsCheckbox"/>
                            need an emergency responder for medical transport to a hospital to recieve time sensitive
                            medications for a current medical condition?
                        </label>
                    </div>
                    <p>
                        If changes are needed or students are unsure, contact a Disability Services Specialist.
                    </p>
                    <br/>
                    <div className="form-group col-md-6">
                        <label htmlFor="Signature">Signature</label>
                        <input type="text" name = "signatureField" className="form-control" id="Signature"
                               placeholder="Your Name"/>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div id = "primary" className="col-md-8 col-md-offset-2">
                    <form role="form" method="POST" action="#">
                        <fieldset>
                            <legend><h1 className="text-center">Request For Accommodations Form</h1></legend>
                            {this.requestInfo()}
                        </fieldset>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary" onClick={this.goToHub}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
export default RequestForAccommodationsForm;