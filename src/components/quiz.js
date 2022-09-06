import React, { Component } from "react";
import "../styles/quiz.css";
class Quiz extends Component {
  render() {
    return (
      <div className="quiz">
        {this.props.questions.map((element) => {
          return (
            <div>
              <p>{element.question}</p>
              {Object.keys(element.choices).map((choice) => (
                <div>
                  <span>{choice}: </span>
                  <span>{element.choices[choice]}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Quiz;
