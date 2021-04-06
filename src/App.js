import React from 'react'
import {  BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes'
import { isUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
  const user = null;

  return (
    <Router>
      <Switch>
        <isUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_IN}
          exact
          >
          <Signin />
        </isUserRedirect>

        <isUserRedirect 
            user={user} 
            loggedInPath={ROUTES.BROWSE} 
            path={ROUTES.SIGN_UP}
            exact
            >
            <Signup />
          </isUserRedirect>

        <ProtectedRoute 
          user={user} 
          path={ROUTES.BROWSE} 
          exact
        >
          <Browse />
        </ProtectedRoute>
        
        <isUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </isUserRedirect>
      </Switch>
    </Router>
  )
}


