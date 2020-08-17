import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import User from './User';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen({
      isOpen: !isOpen,
    });
  };

  const { authedUser } = props;

  return (
    <div>
      <Navbar bg="primary" variant="dark" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Would You Rather
        </NavbarBrand>
        {authedUser && (
          <>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/add">
                    New Question
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">
                    LeaderBoard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <User id={authedUser} />
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/logout">
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </>
        )}
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  authedUser: PropTypes.string,
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps, null)(NavBar));
