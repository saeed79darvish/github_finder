import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

class SearchPage extends React.Component {
    render() {


        return (
            <div style={{ marginTop: "100px" }}>

                <MDBCol md="6" className="mt-5" >
                    <div className="input-group md-form form-sm form-2 pl-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text purple lighten-3" id="basic-text1">
                                <MDBIcon className="text-white" icon="search" />
                            </span>
                        </div>
                        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </MDBCol>
            </div>

        );
    }
}

export default SearchPage;