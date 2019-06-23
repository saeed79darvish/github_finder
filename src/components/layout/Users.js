import React, { Component } from "react";
import UserItem from "./UserItem";
import { MDBRow, MDBCardBody, MDBCard } from "mdbreact";

class Users extends Component {
  state = {
    users: []
  };
  componentWillMount() {
    fetch("https://api.github.com/users?since=0")
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }
  render() {
    return (
      <div style={{ backgroundColor: "dark", padding: "1rem" }}>
        <MDBCard className="my-0 px-0 pb-2 text-center   mb-5 bg-white rounded">
          <MDBCardBody>
            <MDBRow>
              {this.state.users.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Users;
