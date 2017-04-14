import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import HelloRoute from './HelloRoute'

export default () => (
  <Router>
    <Route path='/' component={HelloRoute} />
  </Router>
)
