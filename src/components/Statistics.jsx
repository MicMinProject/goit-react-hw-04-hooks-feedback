import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import Section from './Section.jsx';
import FeedbackOptions from './FeedbackOptions.jsx';
import Notification from './Notification.jsx';
import PropTypes from 'prop-types';

const options={
  labelGood: 'Good',
  labelNeutral: 'Neutral',
  labelBad: 'Bad',
}

class Statistics extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
      total: this.props.total,
      positivePercentage: this.props.positivePercentage,
    }
  }
  
  
  incrementGood =()=>{
      this.setState((state)=>({
         good: state.good + 1
        }));
        
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
  }
  incrementNeutral =()=>{
      this.setState((state)=>({
          neutral: state.neutral + 1
        }));
       
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
  }
  incrementBad =()=>{
      this.setState((state)=>({
          bad: state.bad + 1
        }));
        
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage()
  }
  countTotalFeedback=()=>{
    this.setState((state)=>({
      total: state.good + state.neutral + state.bad
    }))
  }
  countPositiveFeedbackPercentage=()=>{
    this.setState((state)=>({
      positivePercentage: Math.round((state.good / state.total) * 100)
    }))
  }

  render() {
    
    return(
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this}  />
        </Section>
        <Section title='Statistics'>
          {this.state.total === 0 ? (<Notification message='There is no feedback' />) : 
          (
            <>
              <p>Good: {this.state.good}</p>
              <p>Neutral: {this.state.neutral}</p>
              <p>Bad: {this.state.bad}</p>
              {this.state.total === undefined ? <p>Total: 0</p> : <p>Total: {this.state.total}</p>}
              {this.state.positivePercentage === undefined ? <p>Positive percentage: 0%</p> : <p>Positive percentage: {this.state.positivePercentage}%</p>}
            </>
          )}
        </Section>
        
      </div>

    )
  }

}

export default Statistics;