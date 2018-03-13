import React from 'react';
import './AdminStyles.css';

class NotetakersList extends React.Component {
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
                                Jane Doe
                            </td>
                            <td>
                                Note Taker
                            </td>
                            <td>
                                08/14/2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bob Ross
                            </td>
                            <td>
                                Note Taker
                            </td>
                            <td>
                                06/20/2017
                            </td>
                        </tr>
                        <tr>
                            <td>
                                James Smith
                            </td>
                            <td>
                                Note Taker
                            </td>
                            <td>
                                05/11/2016
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

export default NotetakersList;