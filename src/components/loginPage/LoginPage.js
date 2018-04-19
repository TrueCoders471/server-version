/*global chrome*/
import React from 'react';
import './loginPage-Styles.css';

/**
 * controls Javascript behavior of The Account Creation Page
 */

class LoginPage extends React.Component {


    drawLogBackground() {
        return (<div id="loginBackgroundStretch" src>
            <img className="background-image" src={require('./../../public/images/loginBackground.jpg')}
                 alt="View of the Radford University clocks art with quote of the Radford Honor Pledge"/>
        </div>);
    }

    /**
     * transitions the user to a particular Log-in persona specific view
     * based upon there account type
     */
    submit(e) {
        e.preventDefault();
        const username = document.getElementById("inputUserName").value;
        const password = document.getElementById("inputPassword").value;
        const body = JSON.stringify({username: username, password: password});
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        window.fetch('http://localhost:7555/login',
        //window.fetch('http://137.45.220.128:443/login',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                if (res.status === 200) res.text().then(function (text) {
                    location.href = "/" + text; //eslint-disable-line
                });
                else alert('login failed')
            })
    }


    /**
     * renders the components associated with the Login page
     * @returns {XML} (Markup Language) for rendering the elements within this page
     */
    render() {
        return (

            <div className="LoginView-Container">
                {this.drawLogBackground()}
                <div className="loginFields-container">
                    <div id="primary">
                        <form onSubmit={this.submit}>
                            <fieldset>
                                <div>
                                    <div className="form-group col-md-12">
                                        <legend><h1 className="text-center"><b>Login</b></h1></legend>
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
                                    <div className="form-group">
                                        <div className="text-center">
                                            <div id="submit-Container">
                                                <div className="checkbox">
                                                    <div className="form-group col-md-12">
                                                        <button type="submit" className="commonButton"
                                                                onClick={this.submit}>Log in
                                                        </button>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>
                                                            <input type="checkbox" value="remember-me"/>
                                                            Remember me
                                                        </label>
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                            <a className="loginLinks" href="/forgotPassword">Forgot your password?</a>
                                                            <a className="loginLinks" href="/Signup">Don't Have An Account?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
