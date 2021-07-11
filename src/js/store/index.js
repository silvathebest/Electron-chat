import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import chatReducer from '../reducers/chats'

export default function configureStore() {
  const middlewares = [
    thunkMiddleware
  ]

  return createStore(combineReducers({
      chats: chatReducer
    }),
    applyMiddleware(...middlewares))
}