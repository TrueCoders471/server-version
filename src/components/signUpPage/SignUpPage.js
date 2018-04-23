import React from 'react';
import './signUpPage-Styles.css';
/**
 * controls Javascript behavior of The Account Creation Page
 */
class SignUpPage extends React.Component {
//

    drawLogBackground() {
        return (<div id="loginBackgroundStretch" src>
            <img className = "background-image" src = {require('./../../public/images/signupBackground.jpg')}
            alt="View of muse looking up at the clock tower."/>
        </div>);
    }
    /**
     * on click validate email, and passwords are matching
     */
    submitSignupRequest() {
        // Credentials validation not implemented due to database not
        // being in iteration 0.
        //switch statements & comparators here

        // Gets the account select element by its id.
        const acctOptions = document.getElementById("acctTypeSelect");

        // Gets the current selected choice from the menu
        const selectedAcct = acctOptions.options[acctOptions.selectedIndex].value;

        // Based on selection navigate to appropriate page or display a alert because
        // of non-selected choice
        switch(selectedAcct){
            //TODO: move this registration to admin - add another admin!
            case "Administrator":
                location.href = "/admin"; //eslint-disable-line
                break;
            case "Faculty":
                location.href = "/facultySignUpForm"; //eslint-disable-line
                break;
            case "Student":
                location.href = "/studentSignUpForm"; //eslint-disable-line
                break;
            case "Notetaker":
                location.href = "/volunteerSignUpForm"; //eslint-disable-line
                break;
            default:
                alert("Account type selection required!");
        }

    }

    /**
     * renders the components associated with this Account Creation page
     * @returns {XML} : (Markup Language) for rendering the elements within this page
     */
    render() {
        return (
            <div className="SignInView-Container">
                {this.drawLogBackground()}
                <div className="signUpFields-container">
                    <fieldset>
                        <div>
                            <div className="form-group col-md-12">
                                <legend><h1 className="text-center"><b>Sign Up</b></h1></legend>
                            </div>
                            <div className="form-group col-md-12">
                                <div className="form-group col-md-12" align="Center">
                                    <label><h3 className="text-center"><b>Who are you?</b></h3></label>
                                    <br/>
                                    <br/>
                                    <select id="acctTypeSelect" >
                                        <option>Select Account Type</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Faculty">Faculty</option>
                                        <option value="Student">Student</option>
                                        <option value="Notetaker">Volunteer</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12" align="Center">
                                    <button className="commonButton" type="submit" onClick={this.submitSignupRequest}>Sign Up</button>
                                    <br/>
                                    <br/>
                                    <p>
                                        <a className="loginLinks" href="/login">Already Have an Account?</a>
                                        <a className="loginLinks" href="/forgotPassword">Forgot your password?</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

            </div>

        );
    }

}
export default SignUpPage;