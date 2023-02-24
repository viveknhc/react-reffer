import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        {/* this. is used because of class component */}

        <h4>{this.state.count}</h4>
        <Button variant="success" onClick={this.decrement}>
          -
        </Button>
        <Button variant="warning" onClick={this.increment}>
          +
        </Button>
      </div>
    );
  }
}
export default Counter;
