import React from 'react';
import Navbar from '../components/Navbar';

export default ({children, ...props}) => {
  return (
    <>
      <Navbar {...props}/>
      {children}
    </>  
  )
}

export const getDisplayName = (Component) => {
  return Component.displayName || Component.name || 'Component';
}

export const withBaseLayout = (Component, config) => props => {
  const viewName = getDisplayName(Component);
  return (
    <>
      <Navbar {...config} view={viewName} />
      <Component {...props} />
    </>
  )
}

