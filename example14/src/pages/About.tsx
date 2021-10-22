import React from 'react'
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>About</h1>
      <p>?</p>
      <button
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>
    </>
  )
}
