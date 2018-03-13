import React from 'react';

class NotetakerPage extends React.Component {

    openClasses() {
        location.href = "/notetakerClasses"; //eslint-disable-line
    }

    logOut() {
        location.href = "/"; //eslint-disable-line
    }

    render() {
        return (
            <div>
                <h1>Notateker</h1>
                <span className="glyphicon glyphicon-log-out" onClick={this.logOut}/>
                <button className="btn btn-lg btn-primary" type="submit" onClick={this.openClasses}>Open My Classes
                </button>
            </div>
        );

    }
}

export default NotetakerPage;