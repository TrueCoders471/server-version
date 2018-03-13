import React from 'react';
import './signUpPage-Styles.css';
/**
 * controls Javascript behavior of The Account Creation Page
 */
class SignUpPage extends React.Component {

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
            case "Administrator":
                location.href = "/admin"; //eslint-disable-line
                break;
            case "Faculty":
                location.href = "/faculty"; //eslint-disable-line
                break;
            case "Student":
                location.href = "/student"; //eslint-disable-line
                break;
            case "Notetaker":
                location.href = "/notetaker"; //eslint-disable-line
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
            <div id="SignupView-Container" className="sign-up-page">
                <div id="loginBackgroundStretch">
                    <img className = "background-image" src = {require('./../../public/images/signupBackground.jpg')}/>
                </div>
            <div id="SignupFields-Container">
                <form className="form-signin">

                    <div id="top-div-Container">
                        <h2 className="form-signin-header">Create Account</h2>
                    </div>

                    <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                    <input type="text" id="inputUserName" className="form-control" placeholder="RU Email" required
                           autoFocus />
                    <label htmlFor="inoutPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

                    <input type="password" id="inputPassword" className="form-control" placeholder="Re-Enter Password" required/>
                    <div className="checkbox">
                      <select id="acctTypeSelect">
                          <option>Select Account Type</option>
                          <option value="Administrator">Administrator</option>
                          <option value="Faculty">Faculty</option>
                          <option value="Student">Student</option>
                          <option value="Notetaker">Notetaker</option>
                      </select>
                        <br/>
                        <br/>
                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.submitSignupRequest}>Sign Up</button>
                        <p>
                            <a href="/login">Already Have an Account?</a>
                            <a href="/forgotPassword">Forgot your password?</a>
                        </p>

                    </div>
                </form>
            </div>
            </div>
        );
    }

}

export default SignUpPage;