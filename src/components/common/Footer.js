import React from 'react';
import {IndexLink, Link} from 'react-router';

/**
 * controls Javascript behavior of this Footer Component
 */
class Footer extends React.Component {

    /**
     * creates a reusable footer that can be reused across multiple views
     * UI Reference: see .footer in styles.css for UI Behavior
     * @returns {XML}
     */
    render() {
        return (
            <div id="Footer-Container">

                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/login" activeClassName="active">Login</Link>
                {" | "}
                <Link to="/signup" activeClassName="active">Signup</Link>
                {/*{" | "}*/}
                {/*<IndexLink to="admin" activeClassName="active">Admin Page</IndexLink>*/}
                {/*{" | "}*/}
                {/*<Link to="/student" activeClassName="active">Student Page</Link>*/}
                {/*{" | "}*/}
                {/*<IndexLink to="/notetaker" activeClassName="active">Notetaker Page</IndexLink>*/}
                {/*{" | "}*/}
                {/*<Link to="/faculty" activeClassName="active">Faculty Page</Link>*/}
                {/*{" | "}*/}
            </div>
        );

    }
}

export default Footer;
