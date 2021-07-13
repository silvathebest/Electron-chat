import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import chatReducer from '../reducers/chats'
import authReducer from '../reducers/auth'

export default function configureStore() {
  const middlewares = [
    thunkMiddleware
  ]

  return createStore(combineReducers({
      chats: chatReducer,
      auth: authReducer
    }),
    applyMiddleware(...middlewares))
}