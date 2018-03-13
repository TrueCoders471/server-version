import React from 'react';

/**
 * controls Javascript behavior of this Header Component
 */
class Header extends React.Component {
    /**
     * creates a reusable Header that can be reused across multiple views
     * UI Reference: see #mainHeader tag in styles.css for UI Behaviour
     * @returns {XML}
     */




    render() {
        return (
            <div id="mainHeader">
                <banner-text>Radford University CAS</banner-text>
            </div>


        );
    }
}

export default Header;