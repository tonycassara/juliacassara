import React, { Fragment } from 'react'
import createReactClass from 'create-react-class'
import { NavBar } from '../components'
// import svgMaker from '../helpers/svgMaker'
import julia from '../assets/julia.png'
import beautyskin from '../assets/logos/beautyskin.png'
import Cappellos from '../assets/logos/cappellos.svg'
import Douglas from '../assets/logos/douglas.svg'
import Foreo from '../assets/logos/foreo.svg'
import Glossybox from '../assets/logos/glossybox.svg'
import Iherb from '../assets/logos/iherb.svg'
import kitehill from '../assets/logos/kitehill.png'
import larocheposay from '../assets/logos/larocheposay.png'
import Lifefactory from '../assets/logos/lifefactory.svg'
import Loreal from '../assets/logos/loreal.svg'
import philips from '../assets/logos/philips.png'
import remington from '../assets/logos/remington.png'
import revlon from '../assets/logos/revlon.png'
import rossman from '../assets/logos/rossman.png'
import Sephora from '../assets/logos/sephora.svg'

const AboutMe = () => (
  <Fragment>
    <NavBar />
    <div className="about">
      <div className="about-text">
        <h3>I’m Julia</h3>
        <p>
          A videographer creating high quality video content for online
          platforms. Since 2013 I’ve been creating content for my blog with
          YouTube as my primary platform. I’ve worked with companies such as
          L’Oreal, La Roche-Posay, and Sephora to help create stunning digital
          content to inspire and inform millions of viewers across the globe.
        </p>
        <h6>Technical Skills:</h6>
        <div>
          <ul>Final Cut Pro, Adobe Premiere, Photoshop, Lightroom</ul>
          <ul>Directing, Recording, Editing, Cut-Downs</ul>
          <ul>Color Correcting, Touch-ups, Cross-Platform Content</ul>
        </div>
      </div>
      <img src={julia} className="headshot" />
      <h3>Previous Clients</h3>
      <div className="client-grid">
        <img src={larocheposay} alt="La Roche-Posay" />
        <Loreal />
        <img src={philips} alt="Philips" />
        <Sephora />
        <Foreo />
        <img src={revlon} alt="Revlon" />
        <img src={kitehill} alt="Kite Hill" />
        <img src={remington} alt="Remington" />
        <Douglas />
        <Iherb />
        <Lifefactory />
        <Glossybox />
        <Cappellos />
        <img src={rossman} alt="Rossman" />
        <img src={beautyskin} alt="BeautySkin" />
      </div>
    </div>
  </Fragment>
)

export default AboutMe
