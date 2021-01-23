import React from 'react';
import "./ErrorMessage.css"

function ErrorMessage() {
  return (
    <div className="errorMessage">
      <h1 className="errorMessage__header">404 not found</h1>
      <p className="errorMessage__info">Sorry only 100 free requests per day :(</p>
      <img src='https://media.giphy.com/media/d2Z4NRCUxsxZBvag/giphy.gif' alt="nope" />
    </div>
  )
}

export default ErrorMessage
