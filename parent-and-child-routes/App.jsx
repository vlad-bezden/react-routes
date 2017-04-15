import React from 'react'
import PropTypes from 'prop-types'

/**
 * Application template
 * @param {object} header - React element to be rendered in place of header
 * @param {object} main - React element to be rendered in place of main
 */
const App = ({ header, main }) => (
  <section>
    <h1>APP</h1>
    <header>
      {header}
    </header>
    <main>
      {main}
    </main>
  </section>
)

App.propTypes = {
  header: PropTypes.element,
  main: PropTypes.element,
}

App.defaultProps = {
  header: <h4>Default Header</h4>,
  main: <h4>Default Main</h4>,
}

export default App
