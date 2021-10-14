import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@fontsource/inter'
import "@fontsource/montserrat"
import "@fontsource/yanone-kaffeesatz"
import '../scss/index.scss'
import Navbar from '../components/navbar'

const ProjectPage = () => {
  return (
    <main>
      <Navbar/>
      <div className="container">
        <div>
          <h1 className="home-name">Projects</h1>
          <Link to="/archive" class="proj-link hover-underline-animation">visit the archive</Link>
        </div>
        <div class="row-col-sm-1 row-col-md-1 row-col-lg-1 g-4 project-start">
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">mac-setup</h5>
                <p class="card-text">Guide to setup a fresh macOS installation automatically, saving time and effort. Includes 3rd-party apps, ssh and gpg setups</p>
                <a href="https://github.com/i3p9/mac-setup" target="_blank" rel="noreferrer" class="button-git git hover-underline-animation">github</a> <a href="https://mac-setup.vercel.app/#/" target="_blank" rel="noreferrer" class="button-demo-beta demo">demo</a>
                <p class="card-text card-techused"><span class="techused-font">MD</span><span class="techused-font">Docify JS</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">LyriCatch</h5>
                <p class="card-text">Cross platform Python app to fetch, show and download lyrics from currently playing song. Supports Spotify and last.fm</p>
                <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-git git">github</a> <a href="https://github.com/i3p9/lyricatch" target="_blank" rel="noreferrer" class="button-demo demo">demo</a>
                <p class="card-text card-techused"><span class="techused-font">Python</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Text in a Bottle</h5>
                <p class="card-text">Simple and fast webapp made in Python to create and share text or code snippets. Has live Markdown editing and publishing,  supports creating super fast and light web page to share via Markdown. Made using Flask and MongoDB. Click demo to use the site.</p>
                <a href="https://github.com/i3p9/txt-in-a-bottle" target="_blank" rel="noreferrer" class="button-git git">github</a> <a href="https://txtinabottle.herokuapp.com/" target="_blank" rel="noreferrer" class="button-demo demo">demo</a>
                <p class="card-text card-techused"><span class="techused-font">Python</span><span class="techused-font">Flask</span><span class="techused-font">MongoDB</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Jumpstart</h5>
                <p class="card-text">Webapp for installing/updating multiple macOS Applications at once, amazingly faster compared to installing applications one-by-one.</p>
                <a href="https://github.com/i3p9/Jumpstart" target="_blank" rel="noreferrer" class="button-git git">github</a> <a href="https://jumpstart-mac.vercel.app/" target="_blank" rel="noreferrer" class="button-demo demo">demo</a>
                <p class="card-text card-techused"><span class="techused-font">Javascript</span><span class="techused-font">MDB</span><span class="techused-font">Shell</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Personalwebsite V1</h5>
                <p class="card-text">V1 of my personal website made using Jekyll, Ruby. Still accessible via demo!</p>
                <a href="https://github.com/i3p9/personalwebsite" target="_blank" rel="noreferrer" class="button-git git">github</a> <a href="https://old.fahim.tech" target="_blank" rel="noreferrer" class="button-demo demo">demo</a>
                <p class="card-text card-techused"><span class="techused-font">Ruby</span><span class="techused-font">Jekyll</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">Imgbb.sh</h5>
                <p class="card-text">Command line interface to access Imgbb, supports uploading/deleting multiple images from various sources</p>
                <a href="https://github.com/i3p9/imgbb.sh" target="_blank" rel="noreferrer" class="button-git git">github</a> <a href="https://i3p9.github.io/imgbb.sh/" target="_blank" rel="noreferrer" class="button-demo demo">demo</a>
                <p class="card-text card-techused"><span class="techused-font">Shell</span><span class="techused-font">macOS</span><span class="techused-font">Linux</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">python-scripts</h5>
                <p class="card-text">Collection of smaller python projects including Covid Data Tracker, OCR to Google, Tesla Charge Reminder etc.</p>
                <a href="https://github.com/i3p9/python-scripts" target="_blank" rel="noreferrer" class="button-git git">github</a>
                <p class="card-text card-techused"><span class="techused-font">Python</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body moveup">
              <div class="card-body">
                <h5 class="card-title proj-title">Reach: WiFi Analyzer</h5>
                <p class="card-text">Reach automagically searches and figures out the best wifi channel for your network avoiding populated channels.</p>
                <a href="https://github.com/reach" target="_blank" rel="noreferrer" class="button-git git">github</a>
                <p class="card-text card-techused"><span class="techused-font">Python</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">shell-scripts</h5>
                <p class="card-text">Big collection of shell scripts including automating complete computer setup, system services and apps. Also includes a number of script to automate uploading, downloading and backing up computer. </p>
                <a href="https://github.com/i3p9/shell-scripts" target="_blank" rel="noreferrer" class="button-git git">github</a>
                <p class="card-text card-techused"><span class="techused-font">Bash</span><span class="techused-font">Shell</span></p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card proj-body">
              <div class="card-body">
                <h5 class="card-title proj-title">EduShare V2</h5>
                <p class="card-text">A complete Education Management System made using pure php and MySQL. Supports classes, tests, interaction and more.</p>
                <a href="https://github.com/i3p9/Edusharev2" target="_blank" rel="noreferrer" class="button-git git">github</a>
                <p class="card-text card-techused"><span class="techused-font">PHP</span><span class="techused-font">MySQL</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default ProjectPage
