import React, {  useState } from 'react';
import { Radio, message, Button } from 'antd';
import { connect } from 'react-redux';
import { MainDiv, QuesDiv, StyledButton } from '../HtmlQuiz/HtmlQuizStyles';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { increment, decrement } from '../../redux/Score/score.actions';


function CssQuiz(props) {

  const history = useHistory();
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [quiz, setQuiz] = useState([
    {
      "question": "How can you create rounded corners using CSS?",
      "answer": "border-radius: 30px;",
      "options": [
        "border[round]: 30px;",
        "corner-effect: round;",
        "border-radius: 30px;"
      ]
    },
    {
      "question": "What does CSS stand for?",
      "answer": "Cascading Style Sheets",
      "options": [
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ]
    },
    {
      "question": 'Which HTML attribute is used to define inline styles?',
      "answer": "style",
      "options": [
        "styles",
        "class",
        "style"
      ]
    },
    {
      "question": 'Which is the correct CSS syntax?',
      "answer": "body {color: #fff;}",
      "options": [
        "body {color: #fff;}",
        "body {color= #fff;}",
        "body: {color: #fff;}",
      ]
    },
    {
      "question": "Which property is used to change the background color?",
      "answer": "background-color",
      "options": [
        "color",
        "bgcolor",
        "background-color"
      ]
    },
  ])

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setAnswer(e.target.value);
  };

  const onNext = () => {
    if (!answer) {
      message.error("Please select a answer")
    } else {
      setQuestion(question + 1);
    }
    if (answer === quiz[question].answer) {
      props.increaseScore();
    }
    if(question === 4){
      history.push("/result");
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

  if (question > 4) {
    return (
      <MainDiv>
        <h1>Your Score</h1>
        <h2>{score}</h2>
        <Link to="/html">
          <Button type="" style={{ marginRight: '10px' }}>Restart Quiz</Button>
        </Link>
        <Link to="/select">
          <Button>Start a new Quiz</Button>
        </Link>
      </MainDiv>
    )
  } else {
    return (
      <MainDiv>
        <h1 style={{ marginBottom: "50px" }}>Css Quiz</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CssQuiz);