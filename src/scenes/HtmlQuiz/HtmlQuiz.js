import React, { useEffect, useState } from 'react';
import { Radio, message } from 'antd';
import { connect } from 'react-redux';

import { MainDiv, QuesDiv, StyledButton } from './HtmlQuizStyles';
import { useHistory } from 'react-router-dom';
import { decrement, increment } from '../../redux/Score/score.actions';

function HtmlQuiz(props) {
  const history = useHistory();
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [quiz, setQuiz] = useState([
    {
      "question": "HTML stands for?",
      "answer": "HyperText Markup Language",
      "options": [
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language"
      ]
    },
    {
      "question": "Which character is used to represent the closing of a tag in HTML?",
      "answer": "/",
      "options": [
        "/",
        "!",
        "%",
      ]
    },
    {
      "question": "How to create an ordered list in HTML?",
      "answer": "<ol>",
      "options": [
        "<ol>",
        "<ul>",
        "<li>"
      ]
    },
    {
      "question": "How to insert an image in HTML?",
      "answer": '<img src = "jtp.png" />',
      "options": [
        '<img href = "jtp.png" />',
        '<img src = "jtp.png" />',
        '<img link = "jtp.png" />',
      ]
    },
    {
      "question": "The <hr> tag in HTML is used for-",
      "answer": "horizontal ruler",
      "options": [
        "new line",
        "vertical ruler",
        "horizontal ruler"
      ]
    },
  ])



  useEffect(() => {
    setAnswer(null)
    console.log("scorestate",props.score);
  }, [question])

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setAnswer(e.target.value);
  };

  const onNext = () => {
    if (!answer) {
      message.error("Please select a answer")
    } else {
      console.log(question, "ques");
      setQuestion(question + 1);
      if (answer === quiz[question].answer) {
        props.increaseScore();
      }
      if(question === 4){
        history.push("/result");
      }
    }
  }

  const onPrevious = () => {
    if (question > 0) {
      setQuestion(question - 1);
    }
    setScore(score - 1);
    props.decreaseScore();
  }
  const onSkip = () => {
    setQuestion(question + 1);
    if(question === 4){
      history.push("/result");
    }
  }

  return (
    <MainDiv>
      <h1 style={{ marginBottom: "50px" }}>Html Quiz</h1>
      <div style={{ textAlign: 'left' }}>
        <QuesDiv>
          <h3 style={{ marginRight: '10px' }}>{question + 1}</h3>
          <h2>{quiz[question].question}</h2>
        </QuesDiv>
        <Radio.Group
          onChange={onChange}
          value={answer}
          style={{ display: "flex", flexDirection: "column", marginBottom: '30px' }}
        >
          {quiz[question].options.map(op => (
            <Radio value={op}>{op} </Radio>
          ))}
        </Radio.Group>
        <StyledButton
          size="medium"
          onClick={onPrevious}
        >Previous
          </StyledButton>
        <StyledButton
          type="primary"
          size="medium"
          onClick={onNext}
        >Next
          </StyledButton>
        <StyledButton
          size="medium"
          onClick={onSkip}
        >Skip
          </StyledButton>
      </div>

    </MainDiv>
  )
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseScore: () => dispatch(increment()),
    decreaseScore: () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HtmlQuiz);