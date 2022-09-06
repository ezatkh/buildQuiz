import React, { Component } from "react";
import "../styles/multipleChoice.css";
class MultipleChoice extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        question: "",
        firstChoice: "",
        secondChoice: "",
        thirdChoice: "",
        fourthChoice: "",
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
    this.props.insertNewQuestion(this.state.inputs, "multiple");
  };
  render() {
    return (
      <div>
        <input
          className="question"
          value={this.state.inputs.question}
          type="text"
          onChange={this.handleInputs}
          placeholder="Write the question here"
        />
        <input
          className="firstChoice"
          value={this.state.inputs.firstChoice}
          type="text"
          onChange={this.handleInputs}
          placeholder="Write the first choice here"
        />
        <input
          className="secondChoice"
          value={this.state.inputs.secondChoice}
          type="text"
          onChange={this.handleInputs}
          placeholder="Write the second choice here"
        />
        <input
          className="thirdChoice"
          value={this.state.inputs.thirdChoice}
          type="text"
          onChange={this.handleInputs}
          placeholder="Write the third choice here"
        />
        <input
          className="fourthChoice"
          value={this.state.inputs.fourthChoice}
          type="text"
          onChange={this.handleInputs}
          placeholder="Write the fourth choice here"
        />
        <div>
          <label htmlFor="choices">Choose the right solution</label>
          <select
            className="answer"
            name="choices"
            id="cars"
            onChange={this.handleInputs}
          >
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
          </select>
        </div>
        <button onClick={this.insertNewQuestion}>Save question</button>
      </div>
    );
  }
}

export default MultipleChoice;
