import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'

import { routes } from './routes'

const App = (props) => (
  <div>
    <Router>
      <div>
        <Navigation />
        {
          routes.map(route => (
            <Route path={route.path} exact={route.exact} component={route.component} />
          ))
        }
      </div>
    </Router>
  </div>
)

export default App