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
                <h1>Note Taker</h1>


                <div align="middle">
                    <button className="commonButton" type="submit" onClick={this.openClasses}>Open My Classes
                    </button>
                </div>
            </div>
        );

    }
}

export default NotetakerPage;