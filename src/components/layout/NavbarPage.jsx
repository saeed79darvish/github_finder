import React, { Component } from 'react';
import PropTypes from 'prop-types';



import { Nav, Navbar } from 'react-bootstrap';




class Navbarx extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" fixed="top">
          <h1 style={{ marginRight: "10px", color: "white" }}><i className={this.props.icon}></i></h1>
          <Navbar.Brand style={{ fontSize: "24px" }} href="/">{this.props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/about">About</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </div>
    );
  }
}

export default Navbarx;