import React from 'react';


class regProgressBar extends React.Component {

    // This is still under development. -Isaac 
    render() {
        return (
            <div className="container">
                <h1>Student Registration Progress</h1>
                <table>
                    <tr>
                        <th> Step 1: CAS Sign Up Approval</th>
                        <th> Step 2: General Registration</th>
                        <th> Step 3: Request for Accommodations</th>
                        <th> Step 4: Policies and Procedures for Receiving Services</th>
                        <th> Step 5: Academic Accommodations Form</th>
                        <th> Registration Complete</th>
                    </tr>
                    <tr>
                        <td>Incomplete</td>
                        <td>Incomplete</td>
                        <td>Incomplete</td>
                        <td>Incomplete</td>
                        <td>Incomplete</td>
                        <td>Incomplete</td>
                    </tr>
                </table>
            </div>
        );
    };

}

export default regProgressBar;