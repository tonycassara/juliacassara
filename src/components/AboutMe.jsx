import React, { Fragment } from 'react'
import { NavBar } from '../components'
import julia from '../assets/julia.png'

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
        <div>Douglas</div>
        <div>Foreo</div>
        <div>La Roche-Posay</div>
        <div>Rossman</div>
        <div>Lifefactory</div>
        <div>Kite hill</div>
        <div>Beauty Skin</div>
        <div>Remington</div>
        <div>L’Oreal</div>
        <div>beGLOSSY</div>
        <div>Phidivps</div>
        <div>Cappello’s</div>
        <div>iHerb</div>
        <div>Sephora</div>
      </div>
    </div>
  </Fragment>
)

export default AboutMe
