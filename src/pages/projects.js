// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@fontsource/inter'
import "@fontsource/montserrat"
import "@fontsource/yanone-kaffeesatz"
import '../scss/index.scss'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const codeStyles = {
  color: "#D0D3D4",
  padding: 2,
  backgroundColor: "#1C1C1B",
  fontSize: "0.75rem",
  borderRadius: 2,
}

const ProjectPage = () => {
  return (
    <main>
      <Navbar/>
      <div className="container">
        <div>
          <h1 className="home-name">Projects</h1>
          View More: <Link to="/archive">visit the archive</Link> <a href="#" onClick="testFunc();">click me (add toggle between 2grids here</a>
        </div>
        <div class="row row-col-sm-1 row-cols-md-1 g-4 project-start">
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">mac-setup</h5>
                <p class="card-text">Guide to setup a fresh macOS installation automatically, saving time and effort. Includes 3rd-party apps, ssh and gpg setups</p>
                <a href="https://github.com/i3p9/mac-setup" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://mac-setup.vercel.app/#/" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text"><code style={codeStyles}>Markdown | Docsify JS</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">LyriCatch</h5>
                <p class="card-text">Cross platform Python app to fetch, show and download lyrics from currently playing song. Supports Spotify and last.fm</p>
                <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Python</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Jumpstart</h5>
                <p class="card-text">Webapp for installing/updating multiple macOS Applications at once, amazingly faster compared to installing applications one-by-one.</p>
                <a href="https://github.com/i3p9/Jumpstart" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://jumpstart-mac.vercel.app/" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>JS | MDB | Shell</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Personalwebsite V1</h5>
                <p class="card-text">V1 of my personal website made using Jekyll, Ruby. Still accessible via demo!</p>
                <a href="https://github.com/i3p9/personalwebsite" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://google.com" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Ruby | Jekyll</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Imgbb.sh</h5>
                <p class="card-text">Command line interface to access Imgbb, supports uploading/deleting multiple images from various sources</p>
                <a href="https://github.com/i3p9/imgbb.sh" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://i3p9.github.io/imgbb.sh/" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Shell | macOS | Linux</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">python-scripts</h5>
                <p class="card-text">Collection of smaller python projects including Covid Data Tracker, OCR to Google, Tesla Charge Reminder etc.</p>
                <a href="https://github.com/i3p9/python-scripts" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Python</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Reach: WiFi Analyzer</h5>
                <p class="card-text">Reach automagically searches and figures out the best wifi channel for your network avoiding populated channels.</p>
                <a href="https://github.com/reach" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Python</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">shell-scripts</h5>
                <p class="card-text">Big collection of shell scripts including automating complete computer setup, system services and apps. Also includes a number of script to automate uploading, downloading and backing up computer. </p>
                <a href="https://github.com/i3p9/shell-scripts" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://github.com/i3p9/shell-scripts" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Bash Shell</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">EduShare V2</h5>
                <p class="card-text">A complete Education Management System made using pure php and MySQL. Supports classes, tests, interaction and more.</p>
                <a href="https://github.com/i3p9/Edusharev2" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>PHP MySQL</code></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">LyriCatch</h5>
                <p class="card-text">Cross platform Python app to fetch, show and download lyrics from currently playing song. Supports Spotify and last.fm</p>
                <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Python</code></p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">LyriCatch</h5>
                <p class="card-text">Cross platform Python app to fetch, show and download lyrics from currently playing song. Supports Spotify and last.fm</p>
                <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-project"> Github <FontAwesomeIcon icon={faCodeBranch} /></a> <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-project">Demo <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <p class="card-text card-techused"><code style={codeStyles}>Python</code></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
// Step 3: Export your component
export default ProjectPage
