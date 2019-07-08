import React from "react";
import { MDBCol,MDBView} from "mdbreact";
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";

const UserItem = ({user: { login, avatar_url, html_url} }) => {

   

        return (
            
                    <MDBCol  lg="2" md="3" className="mb-sm-2 mb-1">
                        <MDBView>
                        <div style={{ backgroundColor: "#6699cc", padding: "40px",  boxShadow: "10px 10px 5px #aaaaaa" }}>
                        <img
                            tag="img"
                            src={avatar_url}
                            className="rounded-circle z-depth-1 img-fluid"
                            alt=""
                        />
                          </div>
                        </MDBView>

                        <h5 className="font-weight-bold mt-4 mb-3 ">{login}</h5>
                        <div >
                        <button style={{ backgroundColor: "#ff0000",boxShadow: "3px 3px 3px #aaaaaa" }}>
                             <Link to={`user/${login}`} >More</Link>
                        </button>
                        </div>
                    
                     </MDBCol>
          );
}

UserItem.propTypes={
    user : PropTypes.object.isRequired
}
export default UserItem;