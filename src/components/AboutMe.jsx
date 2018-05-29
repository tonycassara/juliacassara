import React, { Fragment } from 'react'
import createReactClass from 'create-react-class'
import { NavBar } from '../components'
// import svgMaker from '../helpers/svgMaker'
import julia from '../assets/julia.png'
import beautyskin from '../assets/logos/beautyskin.png'
import cappellos from '../assets/logos/cappellos.svg'
import douglas from '../assets/logos/douglas.svg'
import foreo from '../assets/logos/foreo.svg'
import glossybox from '../assets/logos/glossybox.svg'
import iherb from '../assets/logos/iherb.svg'
import kitehill from '../assets/logos/kitehill.png'
import larocheposay from '../assets/logos/larocheposay.png'
import lifefactory from '../assets/logos/lifefactory.svg'
import loreal from '../assets/logos/loreal.svg'
import philips from '../assets/logos/philips.svg'
import remington from '../assets/logos/remington.png'
import rossman from '../assets/logos/rossman.svg'
import sephora from '../assets/logos/sephora.svg'

const AboutMe = () => (
  <Fragment>
    <NavBar />
    <div className="about">
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat
        pretium nibh. Mauris sit amet massa vitae tortor condimentum lacinia
        quis vel. Orci porta non pulvinar neque laoreet suspendisse interdum
        consectetur. Aliquam ultrices sagittis orci a scelerisque. Faucibus
        vitae aliquet nec ullamcorper sit amet risus. Purus viverra accumsan in
        nisl nisi scelerisque eu ultrices vitae. Sed risus ultricies tristique
        nulla aliquet enim. Vel quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus. Ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus. Accumsan lacus vel facilisis volutpat est. Lectus quam
        id leo in vitae turpis massa. Amet massa vitae tortor condimentum
        lacinia.
      </p>
      <img src={julia} className="headshot" />
      <div className="client-grid">
        <h3>Previous Clients</h3>
        <img src={larocheposay} alt="La Roche-Posay" />
        <img src={kitehill} alt="Kite Hill" />
        <img src={beautyskin} alt="BeautySkin" />
        <img src={remington} alt="Remington" />
        {/* <img src={douglas} alt="Douglas"></img>
        <img src={foreo} alt="Foreo"></img>
        <img src={rossman} alt="Rossman"></img>
        <img src={lifefactory} alt="Lifefactory"></img>
        <img src={loreal} alt="L’Oreal"></img>
        <img src={glossybox} alt="GlossyBox"></img>
        <img src={philips} alt="Philips"></img>
        <img src={cappellos} alt="Cappello’s"></img>
        <img src={iherb} alt="iHerb"></img>
        <img src={sephora} alt="Sephora"></img> */}
      </div>
    </div>
  </Fragment>
)

export default AboutMe
