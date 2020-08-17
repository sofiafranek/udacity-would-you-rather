const RECEIVE_USERS = 'RECEIVE_USERS';
const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

const addUserQuestion = (authedUser, qid) => {
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    qid,
  };
};

const saveUserAnswer = (auth, qid, option) => {
  return {
    type: USER_ANSWER_QUESTION,
    auth,
    qid,
    option,
  };
};

export {
  RECEIVE_USERS,
  ADD_USER_QUESTION,
  USER_ANSWER_QUESTION,
  receiveUsers,
  addUserQuestion,
  saveUserAnswer,
};
