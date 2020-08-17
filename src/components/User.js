import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const User = (props) => {
  const { user } = props;
  console.log(user, 'props user');
  return (
    <>
      <img src={user.avatarURL} className="avatar" alt={`Avatar of ${user.name}`} />
      <span>{user.name}</span>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users[id],
  };
};

export default connect(mapStateToProps)(User);
