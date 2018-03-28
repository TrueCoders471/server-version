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
                        <a className="navbar-brand" href="#">CAS Account</a>
                    </div>
<<<<<<< HEAD
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <div className="col-sm-3 col-md-3">
=======

                    <div className="col-md-3">
                        <div id="custom-search-input">
                            <div className="input-group col-md-12">
                                <input type="text" className="form-control input-lg" placeholder="Search" />
                                <span className="input-group-btn">
                                    <button className="btn btn-info btn-lg" type="button">
                                        <i className="glyphicon glyphicon-search"/>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="row-inner">
                            <div className="col-md-6">
                                <button type="button" className="btn btn-default btn-lg">
                                    <span className="glyphicon glyphicon-bell"/>
                                </button>
                            </div>
                            <div className="col-md-6">
                                    <button className="btn btn-default btn-lg" type="button" id="dropdownMenu1"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <span className="glyphicon glyphicon-user"/>

                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">View Account</a></li>
                                        <li><a href="#">My Classes</a></li>
                                        <li role="separator" className="divider"/>
                                        <li><a href="/">Sign Out</a></li>
                                    </ul>
                            </div>
>>>>>>> 13542cf7c75c8b8e5a1a48d6a774f34ea9df7ed3
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Account
                                    <b className="caret"/>
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