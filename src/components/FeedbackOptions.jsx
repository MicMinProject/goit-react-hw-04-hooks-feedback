import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

 const FeedbackOptions = ({onLeaveFeedback, options })=>{
  return(
  <>
    <button 
    css={{
      fontSize: '20px',
      backgroundColor: '#11ff11',
      marginRight: '20px',
      borderRadius: '5px',
    }}
      type='button' 
      onClick={onLeaveFeedback.incrementGood}>{options.labelGood}
    </button>
    <button 
    css={{
      fontSize: '20px',
      backgroundColor: '#fefefe',
      marginRight: '20px',
      borderRadius: '5px',
    }}
      type='button' 
      onClick={onLeaveFeedback.incrementNeutral}>{options.labelNeutral}
    </button>
    <button 
    css={{
      fontSize: '20px',
      backgroundColor: '#ff1111',
      marginRight: '20px',
      borderRadius: '5px',
    }}
      type='button' 
      onClick={onLeaveFeedback.incrementBad}>{options.labelBad}
    </button>
  </>
  )
}

FeedbackOptions.propTypes={
  onLeaveFeedback: PropTypes.shape({
    incrementGood: PropTypes.func,
    incrementNeutral: PropTypes.func,
    incrementBad: PropTypes.func,
  }),
  options: PropTypes.shape({
    labelGood: PropTypes.string,
    labelNeutral: PropTypes.string,
    labelBad: PropTypes.string,
  }),
}

export default FeedbackOptions;