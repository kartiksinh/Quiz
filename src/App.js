// import React from 'react';

import Login from './scenes/Login/Login';
import SelectLanguage from './scenes/SelectLanguage/SelectLanguage';
import Nav from './scenes/Nav/Nav';
import HtmlQuiz from './scenes/HtmlQuiz/HtmlQuiz';
import CssQuiz from './scenes/CssQuiz/CssQuiz';
import JavascriptQuiz from './scenes/JavascriptQuiz/JavascriptQuiz';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/javascript" component={JavascriptQuiz} />
          <Route path="/css" component={CssQuiz} />
          <Route path="/html" component={HtmlQuiz} />
          <Route path="/select" component={SelectLanguage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
