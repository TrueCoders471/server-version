import React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import {MuiThemeProvider} from "material-ui/styles/index";
import NotetakerNotesPage from "../notesPages/NotetakerNotesPage";

import NotetakersList from "../adminPage/VolunteersList";

class volFacClassPage extends React.Component {


    render(){
        return(
            <div>

                <MuiThemeProvider>
                    <Tabs>
                        <Tab label="Class Notes" className="default_tab">
                            <h3>Class Notes</h3>
                            <NotetakerNotesPage/>
                        </Tab>
                        <Tab label="Volunteers" className="default_tab">
                            <h3>Volunteers</h3>
                            <NotetakersList/>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }
}


export default volFacClassPage;