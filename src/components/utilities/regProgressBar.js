import React from 'react';
import "./regProgressBarStyle.css";


class regProgressBar extends React.Component {

    stepOneComp = "Incomplete";
    stepTwoComp = "Incomplete";
    stepThreeComp = "Incomplete";
    stepFourComp = "Incomplete";
    stepFiveComp = "Incomplete";
    stepFinalComp = "Incomplete";


    regCheckFunction(step1, step2, step3, step4, step5, stepFinal) {
        if (step1) {
            this.stepOneComp = "Complete";
            if (step2) {
                this.stepTwoComp = "Complete";
                if (step3) {
                    this.stepThreeComp = "Complete";
                    if (step4) {
                        this.stepFourComp = "Complete";
                        if (step5) {
                            this.stepFiveComp = "Complete";
                            if (stepFinal) {
                                this.stepFinalComp = "Complete";
                            }
                        }
                    }
                }
            }
        }

    }

    // This is still under development. -Isaac
    render() {
        return (
            <div className="container">
                <h1>Student Registration Progress</h1>

                <br/>
                <br/>
                {this.regCheckFunction(true,true,false,false,false,false)};
                <table className="table" id="table">
                    <tr>
                        <th>Registration Step</th>
                        <th>Completion Status</th>
                    </tr>
                    <tr>
                        <th> Step 1: CAS Sign Up Approval</th>
                        <td id="stepOne">{this.stepOneComp}</td>
                    </tr>
                    <tr>
                        <th> Step 2: General Registration</th>
                        <td id="stepTwo">{this.stepTwoComp}</td>
                    </tr>
                    <tr>
                        <th> Step 3: Request for Accommodations</th>
                        <td id="stepThree">{this.stepThreeComp}</td>
                    </tr>
                    <tr>
                        <th> Step 4: Policies and Procedures for Receiving Services</th>
                        <td id="stepFour">{this.stepFourComp}</td>
                    </tr>
                    <tr>
                        <th> Step 5: Academic Accommodations Form</th>
                        <td id="stepFive">{this.stepFiveComp}</td>
                    </tr>
                    <tr>
                        <th> Registration Complete</th>
                        <td id="regComp">{this.stepFinalComp}</td>
                    </tr>
                </table>
            </div>

        );
    };

}

export default regProgressBar;