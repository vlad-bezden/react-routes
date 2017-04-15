import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import oneRoutes from './one/routes'
import twoRoutes from './two/routes'

export default (
  <Router>
    <div>
      {oneRoutes}
      {twoRoutes}
    </div>
  </Router>
)
