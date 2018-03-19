/*global chrome*/
import React from 'react';
import './loginPage-Styles.css';

/**
 * controls Javascript behavior of The Account Creation Page
 */

class LoginPage extends React.Component {


    drawLogBackground() {
        return (<div id="loginBackgroundStretch" src>
            <img className="background-image" src={require('./../../public/images/loginBackground.jpg')}/>
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
        // alert(body);

        window.fetch('http://137.45.220.128:443/login',
            {
                method: 'POST',
                headers: headers,
                body: body
            })
            .then((res) => {
                if (res.status === 200) res.text().then(function (text) {
                    location.href = "/" + text; //eslint-disable-line
                })
                else alert('login failed')
            })
    }

    /**
     * renders the components associated with the Login page
     * @returns {XML} (Markup Language) for rendering the elements within this page
     */
    render() {
        return (
            <div id="LoginView-Container" className="login-page">
                {this.drawLogBackground()}
                <div id="loginFields-container">
                    <form className="form-signin" onSubmit={this.submit}>
                        <div id="top-div-Container">
                            <h2 className="form-signin-header">LOGIN</h2>
                        </div>
                        <br/>
                        <label htmlFor="inputUsername" className="sr-only">RU Email</label>
                        <input type="text" id="inputUserName" className="form-control" required
                               placeholder="Username" autoFocus/>
                        <br/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" required
                               placeholder="Password"/>
                        <br/>
                        <br/>
                        <button className="btn btn-lg btn-primary" type="submit">Sign in</button>
                        <div className="checkbox">
                            <label>

                                <input type="checkbox" value="remember-me"/>
                                Remember me
                            </label>
                            <br/>
                            <p>
                                <a href="/forgotPassword">Forgot your password?</a>

                                <a href="/Signup">Don't Have An Account?</a>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;