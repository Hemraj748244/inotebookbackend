import React from 'react';

const Alert = (props) => {
  return (
    <div className="container alert alert-primary" role="alert">
      {props.message}
    </div>
  )
}

export default Alert;