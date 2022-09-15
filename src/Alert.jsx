import React from 'react';
import { useEffect } from 'react';

const Alert = ({ type, message, writeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => writeAlert('none', ''), 2000);
    return () => clearTimeout(timeOut);
  });

  return (
    <div className={`alert alert--${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
