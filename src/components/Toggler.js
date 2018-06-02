import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    active: false,
  }

  onClickHandler = () => this.setState(({ active }) => ({ active: !active }));

  render() {
    const { active } = this.state;

    return (
      <button onClick={this.onClickHandler}>Toggle me! {active ? '✅' : '❌'}</button>
    );
  }
}

export default Toggler;