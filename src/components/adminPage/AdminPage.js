import React from 'react';
import './AdminStyles.css';
import StudentsList from "./StudentsList";
import CasForms from "./CasForms";
import NotetakersList from "./NotetakersList";
import FacultyList from "./FacultyList";

import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
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
                <Tab label="View Volunteers" className="default_tab">
                        <h3>Volunteers</h3>
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
            </Tabs>
        </MuiThemeProvider>
</div>

        );

    }
}

export default AdminPage;