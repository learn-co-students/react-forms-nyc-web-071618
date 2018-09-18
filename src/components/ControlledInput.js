// Code ControlledInput Component Here

import React, {Component} from 'react'

export default class ControlledInput extends Component {

  state = {
    firstname:"",
    lastname :""
  }

  handleOnchange = (event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleOnsubmit = (event)=>{
    event.preventDefault()
    console.log(this.state.firstname +" " +this.state.lastname)
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleOnsubmit}>

        First Name:<input type="text" name="firstname" value={this.state.firstName} onChange={this.handleOnchange} />
        Last Name:<input type="text" name="lastname" value={this.state.lastName} onChange={this.handleOnchange} />
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}
