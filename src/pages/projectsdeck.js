// Step 1: Import React
import * as React from 'react'
//import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@fontsource/inter'
import "@fontsource/montserrat"
import "@fontsource/yanone-kaffeesatz"
import '../scss/index.scss'
//import Navbars from '../components/navbars'

// Step 2: Define your component
const ProjectPageDeck = () => {
  return (
    <main>
      {/* <Navbar/> */}
      <div className="container">
        <div>
          <h1 className="home-name">Projects</h1>
        </div>
      </div>
    </main>
  )
}
// Step 3: Export your component
export default ProjectPageDeck
