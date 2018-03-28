import React from 'react';
//npm install --save html-to-reactimport ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './Accommodation-Styles.css';

class AcademicAccommodationsContract extends React.Component {
    goToHub() {
        location.href ="/hub"; //eslint-disable-line
    }
    formInfo(){
        return(
        <div className="form-group col-md-12">
            <div id="RegStudent-border">
                <div className="form-group col-md-12">
                    <label htmlFor="facName">Faculty Name</label>
                    <input type="text" name = "facNameField" className="form-control" id="facName"
                           placeholder="John Doe"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="courseName">Course Name/Section</label>
                    <input type="text" name = "courseName" className="form-control" id="courseName"
                           placeholder="ITEC 471"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="courseName">Term and Year</label>
                    <input type="text" name = "term" className="form-control" id="term"
                           placeholder="Spring 2018"/>
                </div>
                <p>
                    <b><u>Faculty Member:</u></b> A Disability Services Specialist has qualified this student for the
                    accommodation(s) listed on the accompanying Accommodation Letter. Accommodations listed are vetted
                    by due process procedures and supported by documentation on record in the CAS. Not all accommodations
                    are applicable to an online course. Discuss the applicability of accommodations to the course name
                    as indicated above.
                </p>

            </div>
        </div>
        );
    }

    altStrategyInfo(){
        return (
            <div>
                <p>
                    <h3>
                        COMPLETE THIS SECTION ONLY IF AN ALTERNATE STRATEGY IS NEEDED TO FULFILL AN ACCOMMODATION
                    </h3>
                </p>
                <p>
                    Only accommodation(s) that <b>violate</b> the technical standards or objectives of a class, major
                    or program require an <u>alternative strategy.</u> Both the student and faculty member must discuss
                    and agree to each alternative strategy. The faculty member must document each alternate strategy
                    below.
                </p>

                <div className="form-group col-md-6">
                    <label htmlFor="altStrat">Alternative Strategy</label>
                    <input type="text" name = "altStrat" className="form-control" id="altStrat"
                           placeholder="Strategy"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="replaceStrat">Replacing Which Accommodation?</label>
                    <input type="text" name = "replaceStrat" className="form-control" id="replaceStrat"
                           placeholder="Replacement"/>
                </div>
                <p>
                    <b><h5>If applicable: Students who qualify for AMENDED ATTENDANCE, as indicated on the Accommodation
                    Letter, are allowed additional absences ABOVE the standard number of absences allowed for the class.
                    </h5></b>
                </p>
                <div className="form-group col-md-6">
                    <label htmlFor="absences">Document those absences here</label>
                    <input type="text" name = "absences" className="form-control" id="absences"
                           placeholder="# of absences"/>
                </div>
            </div>


        );
    }

    legalAgreementInfo(){
        return(
            <div>
                <p>
                    <b>This is a legal document. By signing below, <u>both the Student and Faculty Member:</u></b>
                </p>
                <ul>
                    <li>acknowledge that the academic accommodation(s), as outlined on the accompanying <i>Accommodation
                        Letter</i>, have been read, discussed and will be applied.</li>
                    <li>agree to the academic accommodation(s), as listed on the student's Accommodation Letter, and/or
                    the Alternative Strategies (if any), as listed above.</li>
                    <li>acknowledge that accommodations are effective the date both the signatures are obtained.</li>
                    <li>understand that the <u>faculty member</u> agrees to return the <u>Volunteer Note Taker Sign-Up
                        Sheet,</u> if applicable, to the CAS within 5 business days to allow ample lead time for
                        coordination of services.</li>
                </ul>
                <div className="form-group col-md-7">
                    <label htmlFor="studentSig">Student Signature</label>
                    <input type="text" name = "studentSig" className="form-control" id="studentSig"
                           placeholder="Jane Doe"/>
                </div>

                <div className="form-group col-md-5">
                    <label htmlFor="studentDate">Document those absences here</label>
                    <input type="text" name = "studentDate" className="form-control" id="studentDate"
                           placeholder="01/01/2018"/>
                </div>

                <div className="form-group col-md-7">
                    <label htmlFor="facultySig">Faculty Signature</label>
                    <input type="text" name = "facultySig" className="form-control" id="facultySig"
                           placeholder="Bob Ross"/>
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="facultyDate">Document those absences here</label>
                    <input type="text" name = "facultyDate" className="form-control" id="facultyDate"
                           placeholder="01/01/2018"/>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container" align="left">
                <div className="row">
                    <div id = "primary" className="col-md-8 col-md-offset-2">
                        <form role="form" method="POST" action="#">
                            <fieldset>
                                <legend><h1 className="text-center">Academic Accommodations Contract</h1></legend>
                                {this.formInfo()}
                            </fieldset>
                            <fieldset>
                                {this.altStrategyInfo()}
                            </fieldset>
                            <fieldset>
                                {this.legalAgreementInfo()}
                            </fieldset>
                            <div className="text-center">
                            <button type="button" className="commonButton" onClick={this.goToHub}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default AcademicAccommodationsContract;