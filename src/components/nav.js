import React from 'react';

export const Nav = ({navType='', href='#', children}) => (
    <a className={`nav-link ${navType}`} href={`${href}`} >
      {children}
    </a>
)







