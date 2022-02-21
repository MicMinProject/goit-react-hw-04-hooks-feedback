import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const Section =({title, children})=>{
  return(
    <section title={title}>
      <h2
        css={{
          marginBottom: '10px',
          marginTop: '10px',
        }}
        >{title}</h2>
      {children}
    </section>
    )
}

Section.propTypes={
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section;