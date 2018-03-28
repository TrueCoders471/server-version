import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import UserHeader from './common/UserHeader';
import Footer from './common/Footer';
import '../styles/General-Styles.css';

/**
 * This Class hierarchically is used to derive all Pages rendered within this project
 *
 * dev insight: this class should be extended to improve re-usability.
 */
class App extends Component {

    /**
     * This render is the first to be called throughout the project
     * every page is "Wrapped" with the Header banner and A Footer navigation
     * @returns {XML} (Markup Language) for rendering the footer and header around
     *                  elements within every page called specifically ->(props.children)
     */
    getTitle(){
        switch(this.props.location.pathname){
            case "/forgotPassword":
                return (<Header/>);
            case "/login":
                return (<Header/>);
            case "/admin":
                return (<UserHeader/>);
            case "/adminPendingUser":
                return (<UserHeader/>);
            default:
                return (<Header/>);
        }
    }

    render() {
        return (
            <div className="App">
                {this.getTitle()}
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
