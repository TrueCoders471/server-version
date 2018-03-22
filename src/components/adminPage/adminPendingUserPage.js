import React from 'react';
import './adminPendingUserPageStyles.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData} from "./Utils";


class adminNoteTakerApprovePage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
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
            </div>
        );
    };

}

export default adminNoteTakerApprovePage;