import React from 'react'
import { RadioGroup, RadioButton } from 'react-toolbox';

export default class RadioExample extends React.Component {

  state = {
    value: 'vvendetta'
  };

  handleChange = (value) => {
    this.setState({value});
  };

  render () {
    return (
      <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
        <RadioButton label='The Walking Dead' value='thewalkingdead'/>
        <RadioButton label='From Hell' value='fromhell' disabled/>
        <RadioButton label='V for a Vendetta' value='vvendetta'/>
        <RadioButton label='Watchmen' value='watchmen'/>
      </RadioGroup>
    );
  }

}
