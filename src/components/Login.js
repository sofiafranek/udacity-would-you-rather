import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authedUser';

const Login = (props) => {
  const [userId, setUserId] = useState('');

  const handleChangeUser = (event) => {
    setUserId({ userId: event.target.value });
  };

  const handleSubmit = (event) => {
    const { authenticate } = props;
    if (userId) {
      authenticate(userId);
    } else {
      alert('Please select a user before.');
    }
    event.preventDefault();
  };

  const { users } = props;

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="userSelect">Select User</Label>
            <Input
              id="userSelect"
              type="select"
              name="select"
              value={userId}
              onChange={handleChangeUser}
            >
              <option value="" disabled>
                Please select
              </option>
              {Object.keys(users).map((user) => (
                <option key={user} value={user}>
                  {users[user].name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <input disabled={userId === ''} type="submit" value="Submit" />
        </Form>
      </Col>
    </Row>
  );
};

Login.propTypes = {
  users: PropTypes.object.isRequired,
  authenticate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (id) => {
      dispatch(setAuthedUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
