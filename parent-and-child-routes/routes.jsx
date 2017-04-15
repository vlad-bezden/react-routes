import React from 'react'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

/**
 * The 'App' component is rendered with every route
 */
import App from './App'

/**
 * The 'Users' component is loaded with '/users' route
 */
import UsersHeader from './users/UsersHeader'
import UsersMain from './users/UsersMain'

/**
 * The 'Users' component is loaded with '/users' route
 */
import GroupsHeader from './groups/GroupsHeader'
import GroupsMain from './groups/GroupsMain'

/**
 * List of route configurations
 */
const routes = [
  {
    isExact: true,
    path: '/',
    components: {},
  },
  {
    path: '/users',
    components: {
      header: UsersHeader,
      main: UsersMain,
    },
  },
  {
    path: '/groups',
    components: {
      header: GroupsHeader,
      main: GroupsMain,
    },
  },
]

/**
 * Create routes
 */
export default (
  <Router>
    <div>
      {routes.map(route => (
        <Route
          key={route.path}
          exact={route.isExact}
          path={route.path}
          render={() => <App {...route.components} />}
        />
      ))}
    </div>
  </Router>
)
