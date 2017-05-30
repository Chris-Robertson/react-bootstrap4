import React from 'react';

export const Button = ({buttonType='info', children}) => (

  <button type='button' className={ `btn btn-${buttonType} mx-1`} >
    {children}
  </button>

)
