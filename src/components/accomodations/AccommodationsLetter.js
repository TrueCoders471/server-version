import React from 'react';
//npm install --save html-to-reactimport ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './Accommodation-Styles.css';

class AccommodationsLetter extends React.Component {

    accommodationInfo() {
        return (
            <div className="form-group col-md-12">
                <div id="RegStudent-border">
                    <p>The student named is registered with the Disability Resource Office (DRO). The student has been
                     qualified for the following classroom and testing accommodations by a Disability Services Specialist
                     in accordance with the Americans with Disabilities Act.</p>
                    <br/>
                    <p>
                        A confidential discussion should ensue between the student and the professor for each course to
                        determine accommodation applicability. The discussion should take place in a confidential space
                        to maintain the student's right to privacy. For any accommodation that violates the technical
                        standards of a class, major program, <i>an equally effective alternate accommodation must be
                            determined and documented on the Accommodations Contract by the class Instructor/ Professor.</i>
                        Contact the DRO at (540)831-6350 or dro@radford.edu and a Disabilities Service Specialist can provide
                        guidance/suggestions.
                    </p>
                    <br/>
                    <p>
                        Signatures on the accompanying Academics Accommodation Contract (triplicate form) signify that
                        both parties have discussed and agree with how the accommodations will be provided. All DRO
                        documents are confidential and should be kept in a secure location.
                    </p>
                    <br/>
                    <ul>
                        <li>White copy to be returned to the DRO by the student within 5 business days of signatures.
                        </li>
                        <li>Yellow copy is for faculty member.
                        </li>
                        <li>Pink copy is for student.</li>
                    </ul>
                    <p>
                        Not ALL accommodations may apply to online courses or other types of web-based platforms.
                    </p>
                    <p>
                        Classroom Accommodations
                    </p>
                    <ul>
                        <li>50% extended time to complete in-class assignments.</li>
                        <li>Use of a recording device (student should disclose type of device to professor).</li>
                    </ul>
                    <p>
                        Testing Accommodations
                    </p>
                    <ul>
                        <li>Reduced distraction environment.</li>
                        <li>50% extended time on all assessments.</li>
                    </ul>
                </div>
            </div>
        );

    }

    render(){
        return (
            this.accommodationInfo()
        );
    }

}
export default AccommodationsLetter;