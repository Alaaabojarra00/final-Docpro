import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oops! Something is wrong.</p>
      <Link className="button" to="/">
        Go back in initial page, is better.
      </Link>
    </div>
  )
}
