import React from 'react';

export const ButtonGroup = ({children}) => (

  <div className="btn-group">
    { React.Children.map(children, child => React.cloneElement(child, {spacing: ''})) }
  </div>

)
