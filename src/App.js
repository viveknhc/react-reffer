import React, { Component } from "react";



import "./App.css";
import Todo from "./Component/Todo";
import Counter from "./Component/Counter";
import Form from "./Component/Form"
import Uncontrolled from "./Component/Uncontrolled";

class App extends Component {
  state = {
    greetings: "hi good morning",
  };

  render() {
    return (
      <>
        <h1>{this.state.greetings}</h1>

        <Todo greet={this.state.greetings} />


<div className="event-counter">

<h1>EVENT IN COUNTER</h1>
        <Counter></Counter>
        <Form></Form>
        <Uncontrolled></Uncontrolled>

</div>

      </>
    );
  }
}

export default App;
