import React from 'react';
import FacultyClassesPage from "./FacultyClassesPage";

class FacultyPage extends React.Component {

    logOut() {
        location.href = "/"; //eslint-disable-line
    }

    render() {
        return (
            <div>
                <FacultyClassesPage/>
            </div>
        );

    }
}

export default FacultyPage;