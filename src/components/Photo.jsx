import React, { Fragment } from 'react'
import { NavBar } from '../components'
import p1source from '../assets/photos/portfolio1.png'
import p2source from '../assets/photos/portfolio2.png'
import p3source from '../assets/photos/portfolio3.png'

class Photo extends React.Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="photo">
          <img src={p1source} />
          <img src={p2source} />
          <img src={p3source} />
        </div>
      </Fragment>
    )
  }
}

export default Photo
