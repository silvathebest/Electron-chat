import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/auth'

export default function Navbar() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(({auth}) => auth.user)

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
          {/*<button
            onClick={() => history.push('/')}
            className="btn btn-sm btn-outline-success ml-2">
            Login
          </button>*/}
          {user &&
          <>
            <img className="avatar mr-2" src={user.avatar} alt=""/>
            <span className="logged-in-user">Hi, {user.username}</span>
            <button
              onClick={() => dispatch(logout())}
              className="btn btn-sm btn-outline-danger ml-3">
              Logout
            </button>
          </>
          }
        </div>
      </nav>
    </div>
  )
}