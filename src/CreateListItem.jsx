import React, { Component } from 'react';

class NewListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A new list item was submitted: ' + this.state/value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <label>
          New Task:
          <input type="text" value=(this.state.value) onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
        </form>
    );
  }
}

// class List extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       {/*This will hold list items */}
//     }
//   }
//
//   render() {
//     const todoItems = this.props.items.map(item => {
//       return <ListItem item={item}></ListItem>
//     });
//     return (
//       <div>
//         <ul>{todoItems}</ul>
//       </div>
//     );
//   }
// }

export default List;
