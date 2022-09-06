import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Complete from "./components/complete";
import Multiple from "./components/multipleChoice";
import TF from "./components/TF";
import Quiz from "./components/quiz";
class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {
          question: "What is NPM",
          choices: {
            A: "node package manager",
            B: "runtime environment",
            C: "high level language",
            D: "low level language",
          },
          answer: "A",
          type: "multiple",
        },
        {
          question: "What is node js",
          choices: {
            A: "node package manager",
            B: "runtime environment",
            C: "high level language",
            D: "low level language",
          },
          answer: "B",
          type: "multiple",
        },
        {
          question:
            "mobex is a simple, scalable, boilerplate-free state management solution.",
          choices: {
            A: "True",
            B: "False",
          },
          answer: "True",
          type: "t/f",
        },
      ],
    };
  }
  insertNewQuestion = (QuestionToAdd, newType) => {
    let questions = [...this.state.questions];
    let newQuestion = {
      type: newType,
      question: QuestionToAdd.question,
      answer: QuestionToAdd.answer,
    };
    if (newType === "t/f") newQuestion.choices = { A: "True", B: "False" };
    else if (newType === "complete") newQuestion.choices = {};
    else if (newType === "multiple") {
      newQuestion.choices = {
        A: QuestionToAdd.firstChoice,
        B: QuestionToAdd.secondChoice,
        C: QuestionToAdd.thirdChoice,
        D: QuestionToAdd.fourthChoice,
      };
    }
    questions.push(newQuestion);
    this.setState({
      questions: questions,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="lisToAdd">
            <Link to="/tf">T/F question</Link>
            <Link to="/multiple">Multiple choice question</Link>
            <Link to="/complete">complete question</Link>
          </div>
          <div className="questions">
            <Quiz questions={this.state.questions} />
            <Route
              path="/complete"
              exact
              render={() => (
                <Complete insertNewQuestion={this.insertNewQuestion} />
              )}
            />
            <Route
              path="/tf"
              exact
              render={() => <TF insertNewQuestion={this.insertNewQuestion} />}
            />
            <Route
              path="/multiple"
              exact
              render={() => (
                <Multiple insertNewQuestion={this.insertNewQuestion} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
