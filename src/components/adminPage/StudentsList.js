import React from 'react';
import './AdminStyles.css';


class StudentsList extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <div id="Center">
                    <table>
                        <tbody>
                        <tr>
                            <th id="tableHeader">
                                Name
                            </th>
                            <th id="tableHeader">
                                Account Type
                            </th>
                            <th id="tableHeader">
                                Date Submitted
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Ruby Jones
                            </td>
                            <td>
                                Note Viewer
                            </td>
                            <td>
                                01/21/2016
                            </td>
                        </tr>
                        <tr>
                            <td>
                                John Snow
                            </td>
                            <td>
                                Note Viewer
                            </td>
                            <td>
                                09/02/2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Jack Black
                            </td>
                            <td>
                                Note Viewer
                            </td>
                            <td>
                                03/11/2017
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
            </div>
        );
    }
}

export default StudentsList;