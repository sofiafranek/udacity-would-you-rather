import { getInitialData } from '../utils/api';
import { addUserQuestion, saveUserAnswer, receiveUsers } from '../actions/users';
import { addQuestion, receiveQuestions, saveQuestionAnswer } from '../actions/questions';
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';

const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
};

const handleAddQuestion = (optionOneText, optionTwoText) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(authedUser, question.id));
    });
  };
};

const handleAnswer = (qid, option) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer: option,
    };
    _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(authedUser, qid, option));
      dispatch(saveUserAnswer(authedUser, qid, option));
    });
  };
};

export { handleInitialData, handleAddQuestion, handleAnswer };
