import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';




const Navbarx = ({ icon, title }) => {

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" fixed="top">
        <h1 style={{ marginRight: "10px", color: "white" }}><i className={icon}></i></h1>
        <Navbar.Brand style={{ fontSize: "24px" }} href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    </div>
  );

}

Navbarx.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
}
Navbarx.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbarx;