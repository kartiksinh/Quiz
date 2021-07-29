import React, { useEffect, useState } from 'react';
import { Radio, message, Button } from 'antd';
import { MainDiv, QuesDiv, StyledButton } from './HtmlQuizStyles';
import { useHistory, Link } from 'react-router-dom';

function HtmlQuiz() {
  const hist = useHistory();
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState();
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
  }, [question])

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
    setScore(score-1);
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
}

export default HtmlQuiz;