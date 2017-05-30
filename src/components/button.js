import React from 'react';

export const Button = ({buttonType='info', spacing='mx-1', children}) => (

  <button type='button' className={ `btn btn-${buttonType} ${spacing}`} >
    {children}
  </button>

)
