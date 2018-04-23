import React from 'react';
import './AdminStyles.css';
import StudentsList from "./StudentsList";
import CasForms from "./CasForms";
import NotetakersList from "./VolunteersList";
import FacultyList from "./FacultyList";
import AdminClassesPage from "./AdminClassesPage";

import {Tabs, Tab} from 'material-ui/Tabs';
import {MuiThemeProvider} from "material-ui/styles/index";



class AdminPage extends React.Component {
    logOut() {
        location.href = "/"; //eslint-disable-line
    }






    render() {
        return (

      <div className="adminMainCont">
        <MuiThemeProvider>
            <Tabs>
                <Tab label="View Registered Students" className="default_tab">
                        <h3>Students</h3>
                        <StudentsList/>
                </Tab>
                <Tab label="View volunteers" className="default_tab">
                        <h3>volunteers</h3>
                        <NotetakersList/>
                </Tab>
                <Tab label="View Faculty" className="default_tab">
                        <h3>Faculty</h3>
                        <FacultyList/>
                </Tab>
                <Tab label="CAS Forms" className="default_tab">
                    <h3>CAS Forms</h3>
                    <CasForms/>
                </Tab>
                <Tab label="Classes" className="default_tab">
                    <h3>Classes</h3>
                    <AdminClassesPage/>
                </Tab>
            </Tabs>
        </MuiThemeProvider>
</div>

        );

    }
}

export default AdminPage;