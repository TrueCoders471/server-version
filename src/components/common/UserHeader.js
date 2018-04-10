import React from 'react';
import './HeaderStyles.css';
/**
 * controls Javascript behavior of this Header Component
 */
class UserHeader extends React.Component {
    userType = "";
    constructor(props, _userType){
        super(props);
        this.userType = _userType;
    }
    /**
     * creates a reusable Header that can be reused across multiple views
     * UI Reference: see #mainHeader tag in styles.css for UI Behaviour
     * @returns {XML}
     */

    render() {
        return (
            <div className = "headerWrapper">
                <nav className="navbar navbar-default" role="navigation" id="signedInHeader">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand text-center" href="#">CAS Account</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <div className="col-sm-3 col-md-3">
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown"><p className="ihateCSS">Account <b className="glyphicon glyphicon-collapse-down"/></p>

                                </a>
                                <ul className="dropdown-menu">
                                    <li className="divider"/>
                                    <li><a href="/" id="custom-toggle">Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    );
    }
}

export default UserHeader;