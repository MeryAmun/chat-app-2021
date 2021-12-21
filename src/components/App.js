import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext'
import Chats from './Chats'
import Login from './Login'
import React from 'react'

// chat-app01-2021
function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/' component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
