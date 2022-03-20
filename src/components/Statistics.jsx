import React, { useState, useEffect } from 'react';
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

function Statistics() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  
 const incrementFuncs = {
  incrementGood: ()=>{
      setGood(good + 1);
  },
  incrementNeutral: ()=>{
      setNeutral(neutral + 1);
  },
  incrementBad: ()=>{
      setBad(bad + 1);
  },
}
  useEffect(() => {
    setTotal( good + neutral + bad);
  },[good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage( Math.round((good / total) * 100));
  },[total]);

  return(
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={incrementFuncs}  />
        </Section>
        <Section title='Statistics'>
          {total === 0 ? (<Notification message='There is no feedback' />) : 
          (
            <>
              <p>Good: {good}</p>
              <p>Neutral: {neutral}</p>
              <p>Bad: {bad}</p>
              <p>Total: {total}</p>
              <p>Positive percentage: {positivePercentage}%</p>
            </>
          )}
        </Section>
        
      </div>

    )
  

}

// Statistics.propTypes = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
//   total: PropTypes.number,
//   positivePercentage: PropTypes.number,
// }

export default Statistics;