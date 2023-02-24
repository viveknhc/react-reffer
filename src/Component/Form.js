// onChange EVENT

import React, { Component } from 'react'

class Form extends Component {

    state={
        inputValue:""
    }

    onChangeHandle=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
        // console.log(event.target.value)
    }

    formSubmit=()=>{
        console.log(this.state.inputValue)
    }


  render() {
    return (
     <form action="">
        <h2>Form component</h2>
        <input type="text" value={this.inputValue} onChange={this.onChangeHandle} />
        <button type="submit" onClick={this.formSubmit}>
          Submit
        </button>
     </form>
    )
  }
}

export default Form;
