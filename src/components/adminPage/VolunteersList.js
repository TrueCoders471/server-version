import React from 'react';
import './AdminStyles.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {makeListOfNoteTakers} from "./Utils";

export default class VolunteersList extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
        makeListOfNoteTakers().then((volunteers) => this.setState({data: volunteers}));
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
                <br/>
                <div className="Center">
                    <input type="text"
                           className="form-control"
                           value={this.state.username}
                           onChange={this.handleUsernameChange}
                           placeholder="Username to delete"/>
                    <br/>
                    <button type="submit"
                            className="commonButton"
                            onSubmit={this.disableUser}
                    >Delete User
                    </button>
                </div>
                <br/>
            </div>
        );
    }

    handleUsernameChange = (evt) => {
        this.setState({username: evt.target.value});
    };

    disableUser() {
        var headers = new Headers();
        const username = this.state.username;
        const body = JSON.stringify({username: username});
        headers.append("Content-Type", "application/json");
        //return (window.fetch('http://137.45.220.128:443/disableUser',
        return (window.fetch('http://localhost:7555/disableUser',
                {
                    method: 'POST',
                    headers: headers,
                    body: body
                }).then((res) => {
                if (res.status === 200) res.text().then(function (text) {
                    //location.href = "/" + text; //eslint-disable-line
                    alert(text);
                });
                else alert('Disabling failed')
            })
        )
    }
}