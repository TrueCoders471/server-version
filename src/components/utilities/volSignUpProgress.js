import React from 'react';
import "./volSignUpProgressStyle.css";


class volSignUpProgress extends React.Component {

    // This will need to pull from the database when who ever is looking up the progress.
    currentViewedVolunteer = "Bob";

    stepOneComp = "Incomplete";
    stepTwoComp = "Incomplete";
    stepThreeComp = "Incomplete";
    finalComp = "Incomplete";

    volSignUpcheck(step1,step2,step3,finalStep){
        if(step1){
            this.stepOneComp = "Complete";
            if(step2){
                this.stepTwoComp = "Complete";
                if(step3){
                    this.stepThreeComp = "Complete";
                    if(finalStep){
                        this.finalComp = "Complete";
                    }
                }
            }
        }
    }

    render(){
        // This code needs to be integrated into the database function.
        this.volSignUpcheck(false,false,false,false);
      return(
          <div className="container">
              <h1>Volunteer Note Taker {this.currentViewedVolunteer}'s  Progress</h1>

              <br/>
              <br/>
              <table className="table" id="table">
                  <tr>
                      <th>Volunteer Note Take Steps:</th>
                      <th>Completion Status</th>
                  </tr>
                  <tr>
                      <th> Step 1: Volunteer note taker form filled out</th>
                      <td id="stepOne">{this.stepOneComp}</td>
                  </tr>
                  <tr>
                      <th> Step 2: Admin review complete</th>
                      <td id="stepTwo">{this.stepTwoComp}</td>
                  </tr>
                  <tr>
                      <th> Step 3: Account password updated</th>
                      <td id="stepThree">{this.stepThreeComp}</td>
                  </tr>
                  <tr>
                      <th>Volunteer note take sign up process</th>
                      <td id="finalStep">{this.finalComp}</td>
                  </tr>
              </table>
          </div>
      );
    };
}

export default volSignUpProgress;