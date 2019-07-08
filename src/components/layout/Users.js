import React, { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import { MDBRow, MDBCardBody, MDBCard } from "mdbreact";
import Spinner from "./Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.mainUsers();
  }, []);

  const { users, loading } = githubContext;

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

export default Users;
