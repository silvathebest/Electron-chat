import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import HomeView from './views/Home'
import WelcomeView from './views/Welcome'
import SettingsView from './views/Settings'
import ChatView from './views/Chat'

import Navbar from './components/Navbar'
import {listenToAuthChanges} from './actions/auth'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import StoreProvider from './store/StoreProvider'
import LoadingView from './components/shared/LoadingView'

const ContentWrapper = ({children}) => <div className="content-wrapper">{children}</div>

function ChatApp() {
  const dispatch = useDispatch()
  const isChecking = useSelector(({auth}) => auth.isChecking)

  useEffect(() => {
    dispatch(listenToAuthChanges())
  }, [dispatch])

  if (isChecking) return <LoadingView/>

  return (
    <Router>
      <Navbar/>
      <ContentWrapper>
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
      </ContentWrapper>
    </Router>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp/>
    </StoreProvider>
  )
}