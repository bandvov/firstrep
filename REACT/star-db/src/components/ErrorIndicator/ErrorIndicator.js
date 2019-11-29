import React from 'react';
import './ErrorIndicator.css'
import svg from './error.svg';

export default function ErrorIndicator() {
  return (
    <div className="d-flex error-indicator">
    {svg}
      <span>BOOM!</span>
      <span>Something went wrong</span>
      <span>we've already sent droids to fix it</span>
    </div>
  );
}
