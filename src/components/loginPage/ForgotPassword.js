import React from 'react';
import './ForgotPassword-Styles.css';


class ForgotPassword extends React.Component {

    drawLogBackground() {
        return (<div id="loginBackgroundStretch" src>
            <img alt="View of radford clocks and radford honer pledge" className="background-image" src={require('./../../public/images/loginBackground.jpg')}/>
        </div>);
    }

    resetPassword() {
        alert("An E-mail has been sent to the E-mail that was entered.");
    }

    render() {
        return (
            <div id="container">
                {this.drawLogBackground()}
                <form className="form-signin">
                    <br/><br/>
                    <div className="Fields-container">
                        <div id="primary">
                            <form>
                                <fieldset>
                                    <div>
                                        <div className="form-group col-md-12">
                                            <legend><h1 className="text-center"><b>Forgot Password</b></h1></legend>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <h5 className="text-center">Enter the E-mail address that was used to create the account, an E-mail will then be sent to the
                                                specified E-mail address that will allow you to reset your password.</h5>
                                        </div>
                                        <div className="form-group col-md-12" align="middle">
                                            <input type="text" id="inputUserName" className="form-control" required
                                                   placeholder="Username" autoFocus/>
                                        </div>
                                        <div className="form-group col-md-12" align="middle">
                                            <button className="commonButton" type="submit" onClick={this.resetPassword}>Submit</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

{/*<div id="top-div-Container">
    <h2 className="form-signin-header">Forgot Password</h2>
</div>


<br/><br/>

<h5>Enter the E-mail address that was used to create the account, an E-mail will then be sent to the
specified E-mail address that will allow you to reset your password.</h5>

<input type="text" id="UserEmail" className="form-control" placeholder="RU Email" required
       autoFocus/>
<br/><br/>

<button className="btn btn-lg btn-primary" type="submit" onClick={this.resetPassword}>Submit</button>
</div>*/}

export default ForgotPassword;
