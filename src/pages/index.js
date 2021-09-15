// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@fontsource/inter'
import "@fontsource/montserrat"
import "@fontsource/open-sans"
import "@fontsource/yanone-kaffeesatz"
import '../scss/index.scss'
import Navbar from '../components/navbar'
import NowPlaying from '../components/nowplaying'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Navbar/>
    <div className="container">
      <div>
        <h1 className="home-name">Hey, I'm Fahim Faisal</h1>
      I'm a software engineer from Dhaka, Bangladesh. I like building things with Python and Javascript, I like automating almost anything I can.
My hobbies include space, making playlists and taking pictures. I also like comedy shows, I'm a big fan of SNL.
Currently I'm looking for work and making cool <Link to="/projects" className="hover-underline-animation" style={{ textDecoration: "none" }}>projects</Link> on my own.
  <NowPlaying/>
      </div>
      <div>
      </div>
    </div>
    </main>
  )
}
// Step 3: Export your component
export default IndexPage
