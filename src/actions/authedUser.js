const SET_AUTHED_USER = 'SET_AUTHED_USER';
const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER';

const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER,
    id,
  };
};

const unsetAuthedUser = () => {
  return {
    type: UNSET_AUTHED_USER,
  };
};

export { SET_AUTHED_USER, UNSET_AUTHED_USER, setAuthedUser, unsetAuthedUser };
