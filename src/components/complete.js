import "../styles/complete.css";
import React, { Component } from "react";
class Complete extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        question: "",
        answer: "",
      },
    };
  }
  handleInputs = (e) => {
    let inputClass = e.target.className;
    let input = e.target.value;
    let inputs = { ...this.state.inputs };
    inputs[inputClass] = input;
    this.setState({
      inputs,
    });
  };
  insertNewQuestion = () => {
    this.props.insertNewQuestion(this.state.inputs, "complete");
  };
  render() {
    return (
      <div className="complete">
        <input
          className="question"
          value={this.state.inputs.question}
          onChange={this.handleInputs}
          type="text"
          placeholder="Write the question here"
        />
        <input
          className="answer"
          value={this.state.inputs.answer}
          onChange={this.handleInputs}
          type="text"
          placeholder="Write the result here"
        />
        <button onClick={this.insertNewQuestion}>Save question</button>
      </div>
    );
  }
}

export default Complete;
