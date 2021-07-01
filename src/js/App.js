import React from "react"
import HomeView from "./views/Home"

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/settings">
          <HomeView />
        </Route>
        <Route path="/login">
          <HomeView />
        </Route>
        <Route path="/register">
          <HomeView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>

    </Router>

  )
}