import React, { Component } from "react";
import "../styles/tf.css";
class TF extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        question: "",
        answer: "",
      },
    };
  }
  insertNewQuestion = () => {
    this.props.insertNewQuestion(this.state.inputs, "t/f");
  };
  handleInputs = (e) => {
    let inputClass = e.target.className;
    let input = e.target.value;
    let inputs = { ...this.state.inputs };
    inputs[inputClass] = input;
    this.setState({
      inputs,
    });
  };
  render() {
    return (
      <div>
        <input
          className="question"
          value={this.state.inputs.question}
          onChange={this.handleInputs}
          type="text"
          placeholder="Write the question here"
        />
        <div>
          <label htmlFor="choices">Choose the right solution</label>
          <select
            className="answer"
            name="choices"
            id="cars"
            onChange={this.handleInputs}
          >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
        <button onClick={this.insertNewQuestion}>Save question</button>
      </div>
    );
  }
}

export default TF;
