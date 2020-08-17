import React, { useState } from 'react';
import Question from './Question';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DashBoard = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab({
        activeTab: tab,
      });
    }
  };

  const { unansweredQuestions, answeredQuestions } = props;
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Unanswered
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Answered
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            {unansweredQuestions.map((qid) => (
              <Col key={qid} sm="6" md="4">
                <Question id={qid} />
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            {answeredQuestions.map((qid) => (
              <Col key={qid} sm="6" md="4">
                <Question id={qid} />
              </Col>
            ))}
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

DashBoard.propTypes = {
  answeredPolls: PropTypes.array,
  unansweredPolls: PropTypes.array,
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    unansweredQuestions: Object.keys(questions)
      .filter((qid) => !answeredQuestions.includes(qid))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions,
  };
};

export default connect(mapStateToProps)(DashBoard);
