import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import {MuiThemeProvider} from "material-ui/styles/index";
import CreateVolunteer from "./CreateVolunteer";
import CreateStudent from "./CreateStudent";
import CreateFaculty from "./CreateFaculty";
import CreateAdmin from "./CreateAdmin";

export default class AdminUserManagement extends React.Component {

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Tabs>
                        <Tab label="Create Admin Account" className="default_tab">
                            <h3>Create new Admin User</h3>
                            <CreateAdmin/>
                        </Tab>
                        <Tab label="Create Student Account" className="default_tab">
                            <h3>Create new Student Use</h3>
                            <CreateStudent/>
                        </Tab>
                        <Tab label="Create Volunteer Account" className="default_tab">
                            <h3>Create new Volunteer User</h3>
                            <CreateVolunteer/>
                        </Tab>
                        <Tab label="Create Faculty Account" className="default_tab">
                            <h3>Create new Faculty User</h3>
                            <CreateFaculty/>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }
}