import React from 'react'

export default (svgMaker = svg => {
  React.createClass({
    render() {
      return { svg }
    },
  })
})
