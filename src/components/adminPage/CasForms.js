import React from 'react';
import './AdminStyles.css';
//import AAC from "../../../public/forms/AcademicAccommodationsContract-RevisedSpring2017.pdf";
class CasForms extends React.Component {

    deleteForm() {
        alert("Deleted form!");
    }

    downloadForm() {
        alert("Download Form");
    }

    render() {
        return (
            <div>
                <h3> Fillable forms</h3>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1RxGscoI-tNrCSEa1EyfzpHNwcPnCvibI">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Academic Accommodations Contract </b>(Rev. Spring 2017)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1BGQnalxouP92azAKVwQYxb3Kx-_Hk2tR">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Proctoring Request Form</b> (Rev. Aug. 2017)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1Q2DoW2s9FE_fRFTLyYNTEYUFAiYsBgz0">
                            <span className="glyphicon glyphicon-download"/>
                            <b>Request for Accommodations Form </b>(Rev. Feb. 2016)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1eSuPdncNGj6KXQeIuypgk7CqdweT5NiC">
                        <span className="glyphicon glyphicon-download"/>
                            <b>Student Accommodation Eligibility Form</b> (Rev. June 2016)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1HMnDdg4n-rELhIlhtZ2G6T5AbDOjN4eA"download>
                            <span className="glyphicon glyphicon-download"/>
                        <b>Student Registration Form </b>(Rev. Feb. 2016)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1gdx9-pCmJJN4BRtgAcNKY6bL3o8upfZI"download>
                            <span className="glyphicon glyphicon-download"/>
                            <b>Volunteer Notetaker Form</b> (Rev. July 2015)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                </ul>
                <br/>
                <h3>Info Packet</h3>
                <ul className="list-group">
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1kLLCwuc9_x7VoIg3hhqq1idFwP-oq8_9">
                        <span className="glyphicon glyphicon-download"/>
                            <b>Becoming a Registered Student</b> (Rev. Oct. 2015)</a>

                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>

                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1pVInt1o_hWpoI4seVvs-gMEbO__Tz3Ok">

                        <span className="glyphicon glyphicon-download"/>
                            <b>Documentation Guidelines </b>(Rev. June 2016)</a>

                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>

                    </li>
                    <li className="list-group-item justify-content-between">
                        <a href="https://drive.google.com/uc?export=download&id=1LMxf-6P7byI6Qvm9qE6pX9ArUHspFOZm">
                        <span className="glyphicon glyphicon-download"/>
                            <b>Policies and Procedures for Receiving Services</b> (Rev. Aug. 2017)</a>
                        <span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CasForms;