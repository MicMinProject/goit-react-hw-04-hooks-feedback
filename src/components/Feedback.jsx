import React from 'react';
import Button from './Button.jsx';

class Feedback extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
  
     incrementGood =()=>{
    this.setState({
      good: this.state.good + 1
    })
  }
     incrementNeutral =()=>{
    this.setState({
      neutral: this.state.neutral + 1
    })
  }
     incrementBad =()=>{
    this.setState({
      bad: this.state.bad + 1
    })
  }

  render() {
    
    return(
      <div>
        <h2>Please leave feedback</h2>
        <Button label='Good' onSelect={this.incrementGood} />
        <Button label='Neutral' onSelect={this.incrementNeutral} />
        <Button label='Bad' onSelect={this.incrementBad} />
        <h3>Statistics</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>

    )
  }

}

export default Feedback;