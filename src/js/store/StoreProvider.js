import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './index'

const store = configureStore()

export default function StoreProvider({children}) {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}