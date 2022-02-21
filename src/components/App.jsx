import React from 'react';
import Statistics from './Statistics.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Statistics good={0}
      neutral={0}
      bad={0}
      total={0}
      positivePercentage={0}/>
    </div>
  );
};
