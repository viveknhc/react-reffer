import React, { Component } from 'react'

class Uncontrolled extends Component {

    constructor(props){
        super(props)
        this.state={
            firstName:"",
            secondName:""
        };
        this.inputOne = React.createRef();
        this.inputTwo = React.createRef();

        onSubmit=()=>{
            console.log(this.inputOne.value);
            console.log(this.inputOne.value);
        }

    }
  render() {
    return (
        <form action="">
        <h2>Uncontrolled elements</h2>
        <input type="text" ref={input=>this.inputOne=input} value={this.inputValue}/>
        <input type="text" ref={input=>this.inputTwo=input} value={this.inputValue}/>
        <button type="submit" onClick={this.onSubmit}>
          Submit
        </button>
     </form>
    )
  }
}

export default Uncontrolled;
