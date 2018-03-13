import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
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
    render() {
        return (
            <div className="App">
                <Header/>
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
