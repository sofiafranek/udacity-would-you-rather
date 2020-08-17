import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { handleAddQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

const NewQuestion = (props) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleOptionOneChange = (event) => {
    event.preventDefault();
    setOptionOne({
      optionOne: event.target.value,
    });
  };

  const handleOptionTwoChange = (event) => {
    event.preventDefault();
    setOptionTwo({
      optionTwo: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addQuestion(optionOne, optionTwo);
    setRedirect({ redirect: true });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
          <CardBody>
            <CardTitle>Would You Rather</CardTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="optionOne">Option One</Label>
                <Input
                  type="text"
                  name="optionOne"
                  value={optionOne}
                  onChange={handleOptionOneChange}
                  placeholder="Option One"
                />
              </FormGroup>
              <FormGroup>
                <Label for="optionTwo">Option Two</Label>
                <Input
                  type="text"
                  name="optionTwo"
                  value={optionTwo}
                  onChange={handleOptionTwoChange}
                  placeholder="Option Two"
                />
              </FormGroup>
              <Button disabled={optionOne === '' || optionTwo === ''}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

NewQuestion.propTypes = {
  authedUser: PropTypes.string,
  addQuestion: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddQuestion(optionOne, optionTwo));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewQuestion);
