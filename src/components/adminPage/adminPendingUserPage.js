import React from 'react';
import './adminPendingUserPageStyles.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeListOfAdmins} from "./Utils";


class adminNoteTakerApprovePage extends React.Component {

    constructor() {
        super();
        this.state = {
            data: makeListOfAdmins()
        };
    }

    checkImage = <img className="pendingUsersImageIcons" src={require('./../../public/images/greencheck.png')}/>;
    xImage = <img className="pendingUsersImageIcons" src={require('./../../public/images/redx.png')}/>;



    render() {
        const { data } = this.state;
        return (
            <div>
                <div className="container">
                    <legend><h1 className="text-center"><b>Pending Users Panel</b></h1></legend>
                    <ReactTable
                        data={data}
                        columns={[
                            {
                                Header: "Name",
                                columns: [
                                    {
                                        Header: "First Name",
                                        accessor: "firstName"
                                    },
                                    {
                                        Header: "Last Name",
                                        id: "lastName",
                                        accessor: d => d.lastName
                                    }
                                ]
                            },
                            {
                                Header: "Info",
                                columns: [
                                    {
                                        Header: "Account Type",
                                        accessor: "accountType"
                                    },
                                    {
                                        Header: "Student ID",
                                        accessor: "studentID"
                                    }

                                ]
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
                <div className="container" align="Center">
                    <div className="form-group col-md-12" align="Center">
                        <p>To approve or deny a user look at the table above and copy the persons student ID
                            into the field.</p>
                    </div>
                    <div className="form-group col-md-3">
                        {/*Supposed to be empty*/}
                    </div>
                    <div className="form-group col-md-6" align="Center">
                        <label>Student ID</label>
                        <input type="password" id="inputStudentID" className="form-control" required
                               placeholder="Student ID"/>
                        <br />
                        <button type="button" className="commonButton">Approve</button>
                        <div className="divider"/>
                        <button type="button" className="commonButton">Deny</button>
                    </div>
                    <div className="form-group col-md-3">
                        {/*Supposed to be empty*/}

                    </div>
                </div>
            </div>
        );
    };

}

export default adminNoteTakerApprovePage;