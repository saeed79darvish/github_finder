import React from "react";



import { MDBCol,MDBView} from "mdbreact";

class UserItem extends React.Component {


    
 render() {

   const {login, avatar_url, html_url} = this.props.user;

        return (
            
                    <MDBCol  lg="2" md="3" className="mb-sm-2 mb-1">
                        <MDBView>
                        <div style={{ backgroundColor: "#564657", padding: "40px",  boxShadow: "10px 10px 5px #aaaaaa" }}>
                        <img
                            tag="img"
                            src={avatar_url}
                            className="rounded-circle z-depth-1 img-fluid"
                            alt=""
                        />
                          </div>
                        </MDBView>

                        <h5 className="font-weight-bold mt-4 mb-3">{login}</h5>
                        <div >
                        <button style={{ backgroundColor: "#ff0000"}}>
                             <a href={html_url} >More</a>
                        </button>
                        </div>
                    
                     </MDBCol>
                   
                
       
          
     
  
           
        );
    }

}


export default UserItem;