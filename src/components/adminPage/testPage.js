import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExampleWithAvatar from './myTestCardComp';
import "./testPageStyles.css";

//!!!!!!!! Still in Development !!!!!!!!!!
class testPage extends React.Component{


    render() {

        return (
            <div className="container">
                <div className="class-row">
                    <div className="class-column">
            <MuiThemeProvider>
                <CardExampleWithAvatar/>
            </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                    <div className="class-column">
                        <MuiThemeProvider>
                            <CardExampleWithAvatar/>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="class-row"></div>
                <br />
            </div>
        );
    }

}

export default testPage;