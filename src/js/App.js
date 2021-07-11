import React from 'react'
import {Provider} from 'react-redux'

import HomeView from './views/Home'
import WelcomeView from './views/Welcome'
import SettingsView from './views/Settings'
import ChatView from './views/Chat'

import Navbar from './components/Navbar'

import configureStore from './store'

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <div className="content-wrapper">
          <Switch>
            <Route path="/" exact>
              <WelcomeView/>
            </Route>
            <Route path="/chat/:id">
              <ChatView/>
            </Route>
            <Route path="/settings">
              <SettingsView/>
            </Route>
            <Route path="/home">
              <HomeView/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}