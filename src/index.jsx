import React from 'react'
import ReactDOM from 'react-dom'
import Typography from 'typography'
import juliaTheme from './theme'
import App from './app'

const typography = new Typography(juliaTheme)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

typography.injectStyles()
