import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Counter from './Counter'
import PassingProps from './PassingProps'
import Navigation from './Navigation'

const App = (props) => (
  <div>
    <Router>
      <div>
        <Navigation />
        <Route path='/' exact component={Counter} />
        <Route path='/counter' component={Counter} />
        <Route path='/counter-with-start-value' component={
          () => <Counter startValue={15} />
        } />
        {/* PassingProps component with no props */}
        <Route path='/passing-props' component={PassingProps} />
      </div>
    </Router>
  </div>
)

export default App