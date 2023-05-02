import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/index.scss'
import Navbar from '../components/navbar'
import NowPlaying from '../components/nowplaying'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLastfm } from '@fortawesome/free-brands-svg-icons'

// TODO: Contact Info, email?

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fahim Faisal</title>
        <link rel="canonical" href="https://ffaisal.com" />
        <meta property="og:site_name" content="Website of Fahim Faisal" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fahim Faisal" />
        <meta property="og:url" content="https://ffaisal.com/ogimage.webp" />
        <meta property="og:description" content="Personal website of Fahim Faisal" />
        <meta property="og:image" content="/ogimage.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://ffaisal.com" />
        <meta property="twitter:url" content="https://ffaisal.com" />
        <meta name="twitter:title" content="Fahim Faisal" />
        <meta name="twitter:description" content="Personal website of Fahim Faisal" />
        <meta name="twitter:image" content="https://ffaisal.com/ogimage.webp" />
      </Helmet>
      <Navbar />
      <div className="container">
        <div>
          <h1 className="home-name">Hey, I'm Fahim Faisal</h1>
          I am a software engineer from Dhaka, Bangladesh. I like building things with Javascript and Python, and automating almost anything I can.
          My hobbies include space, <a href="https://open.spotify.com/user/sphincone?si=eec6f56b1c9941a2" target="_blank" rel="noreferrer" style={{ textDecoration: "none", fontStyle: "italic" }} class="hover-underline-animation">making playlists</a> and taking pictures. I also like comedy shows, I'm a big fan of SNL.
          Currently I'm working and making cool <Link to="/projects" className="hover-underline-animation" style={{ textDecoration: "none" }}>pet projects</Link>.
          {/* <div className="new-line">Note: This site is still being built. You can visit my old site here: <a href="https://old.fahim.tech">https://old.fahim.tech</a></div> */}
          <NowPlaying />
        </div>
        <div style={{ marginTop: 15 + 'px', marginBottom: 50 + 'px' }}>
          <a href="mailto:fahimpfaisal@gmail.com" class="home-links" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAt} /> fahimpfaisal@gmail.com</a>
          <br /><a href="https://github.com/i3p9/" class="home-links" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> i3p9</a>
          <br /><a href="https://twitter.com/fahplusim" class="home-links" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /> fahplusim</a>
          <br /><a href="https://www.last.fm/user/xfahim" class="home-links" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLastfm} /> xfahim</a>
        </div>
      </div>
    </main>
  )
}
export default IndexPage
