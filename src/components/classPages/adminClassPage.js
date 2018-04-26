import React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import {MuiThemeProvider} from "material-ui/styles/index";
import AdminNotesPage from "../notesPages/AdminNotesPage";
import AdminNoteTakerApprovePage from "../adminPage/adminPendingUserPage";
import VolunteersList from "../adminPage/VolunteersList";

class adminClassPage extends React.Component {


    render(){
        return(
            <div>

                <MuiThemeProvider>
                    <Tabs>
                        <Tab label="Class Notes" className="default_tab">
                            <h3>Class Notes</h3>
                            <AdminNotesPage/>
                        </Tab>
                        <Tab label="volunteers" className="default_tab">
                            <h3>Volunteers</h3>
                            <VolunteersList/>
                        </Tab>
                        <Tab label="Pending Volunteers" className="default_tab">
                            <h3>Pending Volunteers</h3>
                            <AdminNoteTakerApprovePage/>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }
}


export default adminClassPage;