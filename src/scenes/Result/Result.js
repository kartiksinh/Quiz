import { MainDiv } from '../HtmlQuiz/HtmlQuizStyles';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { reset } from '../../redux/Score/score.actions';
import { useEffect } from 'react';


function Result(props) {

  useEffect(() => {
    console.log("props",props);
  }, [])

  const history = useHistory();
  return (
    <MainDiv>
      <h1>Your Score</h1>
      <h2>{props.score.score}</h2>
      <Link to="/html">
        <Button type="" style={{ marginRight: '10px' }} onClick={() => props.resetScore()}>Restart Quiz</Button>
      </Link>
      <Link to="/select">
        <Button onClick={() => props.resetScore()}>Start a new Quiz</Button>
      </Link>
    </MainDiv>
  )
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
    route: state.route,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetScore: () => dispatch(reset()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);