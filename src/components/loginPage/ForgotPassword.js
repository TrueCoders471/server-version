import React from 'react';
import './ForgotPassword-Styles.css';


class ForgotPassword extends React.Component {

    resetPassword() {
        alert("An E-mail has been sent to the E-mail that was entered.");
    }

    render() {
        return (
            <div id="container" className="forgot-password">
                <form className="form-signin">
                    <br/><br/>
                    <div id="Fields-container">
                        <div id="top-div-Container">
                            <h2 className="form-signin-header">Forgot Password</h2>
                        </div>


                        <br/><br/>

                        <h5>Enter the E-mail address that was used to create the account, an E-mail will then be sent to the
                            specified E-mail address that will allow you to reset your password.</h5>

                        <input type="text" id="UserEmail" className="form-control" placeholder="RU Email" required
                                autoFocus/>
                        <br/><br/>

                        <button className="btn btn-lg btn-primary" type="submit" onClick={this.resetPassword}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;
