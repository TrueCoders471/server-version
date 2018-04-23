import React from 'react';
import ReactTable from 'react-table';
import './AdminStyles.css';
import {makeListOfDocuments} from "./Utils";

//import AAC from "../../../public/forms/AcademicAccommodationsContract-RevisedSpring2017.pdf";
class CasForms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fillable_data: [],
            info_data: []
        };
        makeListOfDocuments(1).then((documents) => this.setState({fillable_data: documents}));
        makeListOfDocuments(0).then((documents) => this.setState({info_data: documents}));
    }

    deleteForm() {
        alert("Deleted form!");
    }

    downloadForm() {
        alert("Download Form");
    }

    handleUploadFile(ev) {
        ev.preventDefault();
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        const data = new FormData();
        const file = document.getElementById("fileUpload").files[0];
        const isFillable = document.getElementById("isFillable").checked ? 1 : 0;
        console.log(isFillable);
        data.append('file', file);
        data.append('title', file.name);
        data.append('fileDate', file.lastModifiedDate.toDateString());
        data.append('isFillable', isFillable);

        //return (window.fetch('http://137.45.220.128:443/uploadDocument', {
        return (window.fetch('http://localhost:7555/uploadDocument', {
                method: 'POST',
                body: data,
            }).then((response) => {
                alert("File is uploaded");
                return "done";

            })
        );
    }

    render() {
        const fillableData = this.state.fillable_data;
        const infoData = this.state.info_data;
        console.log(fillableData);
        console.log(infoData);
        return (
            <div>
                <div align="middle">
                    <form onSubmit={this.handleUploadFile} >
                        <h4>Choose a file to upload:</h4>
                        <input
                            className="fileUpload"
                            type="file"
                            id="fileUpload"
                            name="fileUpload"
                        />
                        <br/>
                        <label>Is this a fillable form?</label>
                        <br/>
                        <input type="checkbox" id="isFillable"/>
                        <br/> {/* Break between the button and file uploader to have space */}
                        {/*This is where we have to grab the file that is in the temporary folder and send it in a
                       blob to the database*/}
                        <button className="commonButton">Upload File</button>
                    </form>
                </div>
                <h3>Fillable forms</h3>
                <div className="Center">
                    <ReactTable
                        data={fillableData}
                        columns={[
                            {
                                Header: "Title",
                                accessor: "title"
                            },
                            {
                                Header: "Last Modified",
                                accessor: "version"
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
                <br/>
                {/*<ul className="list-group">*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1RxGscoI-tNrCSEa1EyfzpHNwcPnCvibI">*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Academic Accommodations Contract </b>(Rev. Spring 2017)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1BGQnalxouP92azAKVwQYxb3Kx-_Hk2tR">*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Proctoring Request Form</b> (Rev. Aug. 2017)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1Q2DoW2s9FE_fRFTLyYNTEYUFAiYsBgz0">*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Request for Accommodations Form </b>(Rev. Feb. 2016)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1eSuPdncNGj6KXQeIuypgk7CqdweT5NiC">*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Student Accommodation Eligibility Form</b> (Rev. June 2016)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1HMnDdg4n-rELhIlhtZ2G6T5AbDOjN4eA"*/}
                {/*download>*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Student Registration Form </b>(Rev. Feb. 2016)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1gdx9-pCmJJN4BRtgAcNKY6bL3o8upfZI"*/}
                {/*download>*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>volunteer Notetaker Form</b> (Rev. July 2015)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*</ul>*/}
                <br/>
                <h3>Info Packet</h3>
                <div className="Center">
                    <ReactTable
                        data={infoData}
                        columns={[
                            {
                                Header: "Title",
                                accessor: "title"
                            },
                            {
                                Header: "Last Modified",
                                accessor: "version"
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
                <br/>
                <br/>
                {/*<ul className="list-group">*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1kLLCwuc9_x7VoIg3hhqq1idFwP-oq8_9">*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Becoming a Registered Student</b> (Rev. Oct. 2015)</a>*/}

                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}

                {/*</li>*/}

                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1pVInt1o_hWpoI4seVvs-gMEbO__Tz3Ok">*/}

                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Documentation Guidelines </b>(Rev. June 2016)</a>*/}

                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}

                {/*</li>*/}
                {/*<li className="list-group-item justify-content-between">*/}
                {/*<a href="https://drive.google.com/uc?export=download&id=1LMxf-6P7byI6Qvm9qE6pX9ArUHspFOZm">*/}
                {/*<span className="glyphicon glyphicon-download"/>*/}
                {/*<b>Policies and Procedures for Receiving Services</b> (Rev. Aug. 2017)</a>*/}
                {/*<span className="glyphicon glyphicon-trash" onClick={this.deleteForm}/>*/}
                {/*</li>*/}
                {/*<br/>*/}
                {/*</ul>*/}
            </div>

        );
    }
}

export default CasForms;