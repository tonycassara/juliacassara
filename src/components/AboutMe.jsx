import React, { Fragment } from 'react'
import { Footer, NavBar } from '../components'
import julia from '../assets/julia.png'
import almay from '../assets/logos/almay.png'
import AmericanEagle from '../assets/logos/americaneagle.svg'
import beautyskin from '../assets/logos/beautyskin.png'
import Cappellos from '../assets/logos/cappellos.svg'
import Douglas from '../assets/logos/douglas.svg'
import Foreo from '../assets/logos/foreo.svg'
import google from '../assets/logos/google.png'
import Iherb from '../assets/logos/iherb.svg'
import kitehill from '../assets/logos/kitehill.png'
import larocheposay from '../assets/logos/larocheposay.png'
import Lifefactory from '../assets/logos/lifefactory.svg'
import Loreal from '../assets/logos/loreal.svg'
import maybelline from '../assets/logos/maybelline.png'
import philips from '../assets/logos/philips.png'
import remington from '../assets/logos/remington.png'
import revlon from '../assets/logos/revlon.png'
import rossman from '../assets/logos/rossman.png'
import Sephora from '../assets/logos/sephora.svg'

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
    this.toggleLoading = this.toggleLoading.bind(this)
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading,
    })
  }

  render() {
    const fadeIn = {
      animation: '350ms ease-out fadeIn forwards',
    }
    return (
      <Fragment>
        <NavBar />
        <div className="about">
          <div className="about-text">
            <h3>I’m Julia</h3>
            <p>
              A video editor, colorist, and producer creating high quality video
              content for online platforms. Since 2010 I’ve been creating
              content for my blog with YouTube as my primary platform. I’ve
              worked with companies such as L’Oreal, La Roche-Posay, and Sephora
              to help create stunning digital content to inspire and inform
              millions of viewers across the globe.
            </p>
            <h6>Technical Skills:</h6>
            <div>
              <li>Final Cut Pro, Adobe Premiere, Photoshop, Lightroom</li>
              <li>Directing, Recording, Editing, Cut-Downs, Audio Mixing</li>
              <li>Color Correcting, Touch-ups, Cross-Platform Content</li>
            </div>
          </div>
          <img
            src={julia}
            id="headshot"
            onLoad={this.toggleLoading}
            style={this.state.loading ? {} : fadeIn}
          />
          <h3>Previous Clients</h3>
          <div className="client-grid">
            <img src={larocheposay} alt="La Roche-Posay" />
            <AmericanEagle />
            <img src={maybelline} alt="Maybelline" />
            <img src={almay} alt="Almay" />
            <Loreal />
            <Sephora />
            <Foreo />
            <img src={revlon} alt="Revlon" />
            <img src={kitehill} alt="Kite Hill" />
            <img src={remington} alt="Remington" />
            <Douglas />
            <Iherb />
            <Lifefactory />
            <img src={google} alt="Google" />
            <Cappellos />
            <img src={rossman} alt="Rossman" />
            <img src={beautyskin} alt="BeautySkin" />
            <img src={philips} alt="Philips" />
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default AboutMe
