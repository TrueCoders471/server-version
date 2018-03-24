import React from 'react';
import './AdminStyles.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeListOfNoteTakers} from "./Utils";

class NotetakersList extends React.Component {

    constructor() {
        super();
        this.state = {
            data: makeListOfNoteTakers()
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <br/>
                <div className="Center">
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
                <br/>
            </div>
        );
    }
}

export default NotetakersList;