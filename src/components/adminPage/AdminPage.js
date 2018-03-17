import React from 'react';
import './AdminStyles.css';
import StudentsList from "./StudentsList";
import CasForms from "./CasForms";
import NotetakersList from "./NotetakersList";

class AdminPage extends React.Component {
    logOut() {
        location.href = "/"; //eslint-disable-line
    }

    render() {
        return (
            <div className = "AdminPage-Container">
                <ul className="nav  nav-tabs nav-justified">
                    <li className="active"><a data-toggle="tab" href="#students">View Registered Students</a></li>
                    <li><a data-toggle="tab" href="#notetakers">View Volunteers</a></li>
                    <li><a data-toggle="tab" href="#casForms">CAS Forms</a></li>
                </ul>
                <div className="tab-content">
                    <div id="students" className="tab-pane fade in active">
                        <h3>Students</h3>
                        <StudentsList/>
                    </div>
                    <div id="notetakers" className="tab-pane fade">
                        <h3>Notetakers</h3>
                        <NotetakersList/>
                    </div>
                    <div id="casForms" className="tab-pane fade">
                        <h3>CAS Forms</h3>
                        <CasForms/>
                    </div>
                </div>
            </div>
        );

    }
}

export default AdminPage;