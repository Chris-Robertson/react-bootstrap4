import React from 'react';

export const Button = ({buttonType='info', children}) => (

  <button type='button' className={ `btn btn-${buttonType}`} >
    {children}
  </button>
)
