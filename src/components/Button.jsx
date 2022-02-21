import React from 'react';

 const Button = ({onSelect, label})=>{
  return(
  <button type='button' onClick={onSelect} >{label}</button>
  )
}

export default Button;