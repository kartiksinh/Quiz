import React, { useEffect, useState } from 'react';
import { Radio, message, Button } from 'antd';
import { MainDiv, QuesDiv, StyledButton } from '../HtmlQuiz/HtmlQuizStyles';
import { useHistory, Link } from 'react-router-dom';


function JavascriptQuiz() {

  const hist = useHistory();
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState();
  const [question, setQuestion] = useState(0);
  const [quiz, setQuiz] = useState([
    {
      "question": "JavaScript is a ___ -side programming language",
      "answer": "Both",
      "options": [
        "Client",
        "Server",
        "Both"
      ]
    },
    {
      "question": "Inside which HTML element do we put the JavaScript?",
      "answer": "<script>",
      "options": [
        "<scripting>",
        "<javascript>",
        "<script>"
      ]
    },
    {
      "question": 'How do you write "Hello World" in an alert box?',
      "answer": "alert('Hello World')",
      "options": [
        "alert('Hello World')",
        "alertBox('Hello World')",
        "msg('Hello World')"
      ]
    },
    {
      "question": 'How do you call a function named "myFunction"?',
      "answer": "myFuntion()",
      "options": [
        "call myFuntion()",
        "myFuntion()",
        "call function myFuntion()",
      ]
    },
    {
      "question": "How do you round the number 7.25, to the nearest integer?",
      "answer": "Math.round(7.25)",
      "options": [
        "Math.round(7.25)",
        "round(7.25)",
        "Math.rnd(7.25)"
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
      setScore(score + 1);
    }
  }

  const onPrevious = () => {
    if (question > 0) {
      setQuestion(question - 1);
    }
    setScore(score - 1);
  }
  const onSkip = () => {
    setQuestion(question + 1);
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
        <h1 style={{ marginBottom: "50px" }}>JavaScript Quiz</h1>
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

export default JavascriptQuiz;