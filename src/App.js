import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './Counter'
import PassingProps from './PassingProps'


const App = (props) => (
  <div>

    <Router>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/counter'}>Counter</Link>
        <Link to={'/counter-with-start-value'}>Counter 15</Link>
        <Link to={'/passing-props'}>Passing Props</Link>
        <Route path='/' exact component={Counter} />
        <Route path='/counter' component={Counter} />
        <Route path='/passing-props' component={PassingProps} />
        <Route path='/counter-with-start-value' component={
          () => <Counter startValue={15} />
        } />
        <Counter />
      </div>
    </Router>

  </div>
)

export default App