import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import First from './First'
import Second from './Second'

export default (
  <Router basename='/one'> 
    <div>
      <h2>One</h2>
      <ul>
        <li><Link to='/First'>One First</Link></li>
        <li><Link to='/Second'>One Second</Link></li>
      </ul>
    
      <Route path='/First' component={First} />
      <Route path='/Second' component={Second} />
    </div>
  </Router>
)