import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import HelloRoute from './HelloRoute'

const Routes = () => (
  <Router>
    <Route path='/' component={HelloRoute} />
  </Router>
)

export default Routes