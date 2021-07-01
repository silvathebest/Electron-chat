import React from "react"
import { Link, useHistory } from "react-router-dom"

export default function Navbar() {
  const history = useHistory()

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => history.goBack()}
            className="btn btn-outline-primary">
            Back
          </button>
          <button
            onClick={() => history.push('/settings')}
            className="btn btn-outline-success ml-2">Settings
          </button>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>
          <button
            onClick={() => history.push('/register')}
            className="btn btn-sm btn-outline-danger ml-2">Register</button> 
          <button
            onClick={() => history.push('/login')}
            className="btn btn-sm btn-outline-success ml-2">Login</button>
        </div>
      </nav>
    </div>
  )
}