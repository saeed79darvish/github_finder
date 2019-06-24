import React from "react";
import UserItem from "./UserItem";
import { MDBRow, MDBCardBody, MDBCard } from "mdbreact";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={{ backgroundColor: "dark", padding: "1rem" }}>
        <MDBCard className="my-0 px-0 pb-2 text-center   mb-5 bg-white rounded">
          <MDBCardBody>
            <MDBRow>
              {users.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
