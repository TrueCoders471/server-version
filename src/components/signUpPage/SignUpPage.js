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
            <div className="SignInView-Container">
                {this.drawLogBackground()}
                <div className="signUpFields-container">
                    <fieldset>
                        <div>
                            <div className="form-group col-md-12">
                                <legend><h1 className="text-center"><b>Sign Up</b></h1></legend>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                                <input type="text" id="inputUserName" className="form-control" required
                                       placeholder="Username" autoFocus/>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputPassword" className="sr-only">Password</label>
                                <input type="password" id="inputPassword" className="form-control" required
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="inputPassword" className="sr-only">Re-Enter Password</label>
                                <input type="password" id="inputPasswordConf" className="form-control" required
                                       placeholder="Re-Enter Password"/>
                                <div className="form-group col-md-12" align="Center">
                                    <br/>
                                    <select id="acctTypeSelect" >
                                        <option>Select Account Type</option>
                                        <option value="Administrator">Administrator</option>
                                        <option value="Faculty">Faculty</option>
                                        <option value="Student">Student</option>
                                        <option value="Notetaker">Note taker</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12" align="Center">
                                    <button className="commonButton" type="submit" onClick={this.submitSignupRequest}>Sign Up</button>
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