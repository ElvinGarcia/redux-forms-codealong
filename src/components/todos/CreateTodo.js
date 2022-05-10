import React, { Component } from 'react';
import {connect} from 'react-redux';


class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text:""
    }
  };

  handleChange = (event)=>{
    this.setState(
      { text: event.target.value }
    );
  }

    handleSubmit(event){
      event.preventDefault();
      //  dipatch does here--> this.state
      this.setState({ text:''});
    }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ text: ' ' });
    }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input name="text"
            placeholder='enter task'
            onChange={this.handleChange}
            value={this.state.text}
            autoFocus
          />
          <br/>
          <input type="submit" value="submit"/>
        </form>
        {/* debugging code
       */}
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
