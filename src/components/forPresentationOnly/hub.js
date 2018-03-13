import React from 'react';

class hub extends React.Component {

    openRequestForAccommodationsForm() {
        location.href = "/requestForAccommodationsForm"; //eslint-disable-line
    }
    openAcademicAccommodationsContract(){
        location.href = "/academicAccommodationsContract"; //eslint-disable-line

    }
    pprsForm() {
        location.href = "/pprs"; //eslint-disable-line
    }
    proctoringRequestForm(){
        location.href = "/proctoringRequestForm"; //eslint-disable-line
    }

    hubMenu() {
        return (
            <div className="text-center">
                <div className="form-group col-md-12">
                    <label className=".value" htmlFor="">1. Student Registration:</label>
                    <p>Seen after clicking student sign up.</p>
                    <label className=".value" htmlFor="">2. Volunteer Note Taker Sign-Up Sheet</label>
                    <p><a href="https://drive.google.com/uc?export=download&id=1gdx9-pCmJJN4BRtgAcNKY6bL3o8upfZI"download>
                        <b>Volunteer Notetaker Form</b> (Rev. July 2015)</a></p>
                    <label className=".value" htmlFor="">3. Request for Accommodations Form</label>
                    <p><a onClick={this.openRequestForAccommodationsForm} download>
                        <b>Request for Accommodations Form</b> (Rev. Aug. 2017)</a></p>
                    <label className=".value" htmlFor="">4. Policies and Procedures for Receiving Services</label>
                    <p><a onClick={this.pprsForm} download>
                        <b>Policies and Procedures for Receiving Services</b> (Rev. Aug. 2017)</a></p>
                    <label className=".value" htmlFor="">5. Academic Accommodations Contract</label>
                    <p><a onClick={this.openAcademicAccommodationsContract} download>
                        <b>Academic Accommodations Contract </b>(Rev. Spring 2017)</a></p>
                    <label className=".value" htmlFor="">6. Proctoring Request Form</label>
                    <p><a onClick={this.proctoringRequestForm} download>
                        <b>Proctoring Request Form</b> (Rev. Aug. 2017)</a></p>
                    <label className=".value" htmlFor="">7. Accommodation Letter</label>
                    <p>Received from admin at CAS office</p>
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
                                    <legend><h1 className="text-center"><b>Digitized CAS Forms</b></h1></legend>
                                    {this.hubMenu()}
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default hub;