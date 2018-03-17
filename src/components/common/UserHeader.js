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
            <div id="mainHeader">
                <div className="row-outer">
                    <div className="col-lg-8">
                        <div className='custom-banner'>
                            <banner-text>Radford University CAS Student</banner-text>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div id="custom-search-input">
                            <div className="input-group col-md-12">
                                <input type="text" className="form-control input-lg" placeholder="Buscar" />
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserHeader;