import React from 'react'
 class ControlledInput extends React.Component {
  state = {
    value: '',
  }
   handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
   render() {
     console.log(this.state)
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" value={this.state.vaue} onChange={this.handleChange}/>
      </form>
    );
  }
}
 export default ControlledInput;
