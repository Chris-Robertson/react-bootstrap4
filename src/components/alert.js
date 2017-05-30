import React from 'react';

export const Alert = ({alertType='info', children}) => (

  <div className={ `alert alert-${alertType}`} role='alert'>
    {children}
  </div>
)
