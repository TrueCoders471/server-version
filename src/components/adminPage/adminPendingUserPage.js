import React from 'react';
import './adminPendingUserPageStyles.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {makeListOfNoteTakers} from "./Utils";


class AdminNoteTakerApprovePage extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
        makeListOfNoteTakers().then((volunteer) => this.setState({data: volunteer}));
    }


    render() {
        const data = this.state.data;
        return (
            <div>
                <div className="container">
                    <ReactTable
                        data={data}
                        columns={[
                            {

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
                        <br/>
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
                        <br/>
                        <button type="button" className="commonButton">Approve</button>
                        <div className="divider"/>
                        <button type="button" className="commonButton">Deny</button>
                        <br/>
                        <br/>
                    </div>
                    <div className="form-group col-md-3">
                        {/*Supposed to be empty*/}

                    </div>
                </div>
            </div>
        );
    };

}

export default AdminNoteTakerApprovePage;