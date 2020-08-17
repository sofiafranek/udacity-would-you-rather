const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
const ADD_QUESTION = 'ADD_QUESTION';
const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const saveQuestionAnswer = (authedUser, qid, answer) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
};

export {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  SAVE_QUESTION_ANSWER,
  addQuestion,
  receiveQuestions,
  saveQuestionAnswer,
};
