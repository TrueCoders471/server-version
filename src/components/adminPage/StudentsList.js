import React from 'react';
import './AdminStyles.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {makeListOfStudents} from "./Utils";

class StudentsList extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
        makeListOfStudents().then((students) => this.setState({data: students}));
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                <br/>
                <div className="Center">
                    <ReactTable
                        data={data}

                        columns={[
                            {
                                Header: "First Name",
                                accessor: "firstName"
                            },
                            {
                                Header: "Last Name",
                                accessor: "lastName"
                            },
                            {
                                Header: "Email",
                                accessor: "email",
                            },
                            {
                                Header: "RU ID",
                                accessor: "studentID"
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

export default StudentsList;