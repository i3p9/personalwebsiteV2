import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import '../scss/index.scss'

const ArchivePage = () => {
    return(
        <main>
            <Navbar/>
            <div className="container">
                <div>
                    <h1 className="home-name">Archive</h1>
                    <Link to="/projects" class="proj-link hover-underline-animation">go back to projects</Link>
                </div>
                <table class="table table-default">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col" class="d-none d-md-table-cell">Made with</th>
                            <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Text in a Bottle</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">React</span><span class="techused-font">GatsbyJS</span></td>
                        <td><a href="https://github.com/i3p9/txt-in-a-bottle"><FontAwesomeIcon icon={ faGithub } /></a>&nbsp;&nbsp;<a href="https://txtinabottle.herokuapp.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Personal Website V2</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">React</span><span class="techused-font">GatsbyJS</span></td>
                        <td><a href="https://github.com/i3p9/personalwebsitev2"><FontAwesomeIcon icon={ faGithub } /></a>&nbsp;&nbsp;<a href="https://github.com/i3p9/personalwebsitev2"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2021</th>
                        <td>LyriCatch - Python Lyrics App</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Python</span></td>
                        <td><a href="https://github.com/i3p9/lyricatch"><FontAwesomeIcon icon={ faGithub } /> </a></td>
                        </tr>
                        </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2021</th>
                        <td>Opencore ScanPolicy Generator</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Javascript</span></td>
                        <td><a href="https://github.com/i3p9/oc-scanpolicy"><FontAwesomeIcon icon={ faGithub }/></a>&nbsp;&nbsp;<a href="https://oc-scanpolicy.vercel.app/"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                        </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Jumpstart - Ninite for macOS</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Javascript</span><span class="techused-font">Bash Shell</span></td>
                        <td><a href="https://github.com/i3p9/jumpstart"><FontAwesomeIcon icon={ faGithub }/></a>&nbsp;&nbsp;<a href="https://jumpstart.fahim.tech/"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Imgbb.sh - Imgbb CLI</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Shell</span><span class="techused-font">macOS/Linux</span></td>
                        <td><a href="https://github.com/i3p9/imgbb.sh"><FontAwesomeIcon icon={ faGithub } size="md" /></a>&nbsp;&nbsp;<a href="https://i3p9.github.io/imgbb.sh/"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>script-commands (macOS Automation)</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Shell</span><span class="techused-font">Python</span></td>
                        <td><a href="https://github.com/i3p9/script-commands"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>raycast-scripts</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Raycast</span><span class="techused-font">Shell</span><span class="techused-font">AS</span></td>
                        <td><a href="https://github.com/i3p9/raycast-scripts"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Radar - Doppler Radar Interface</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Javascript</span></td>
                        <td><a href="https://github.com/i3p9/radar"><FontAwesomeIcon icon={ faGithub } /></a>&nbsp;&nbsp;<a href="https://radar.fahim.tech/"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>MovieDB</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">NodeJS</span><span class="techused-font">MongoDB</span></td>
                        <td><a href="https://github.com/i3p9/node-moviedb"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Deekfake Detection with Xception</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Python</span></td>
                        <td><a href="https://github.com/i3p9/deepfake-detection-with-xception"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>python-scripts (Collection of apps)</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Python</span></td>
                        <td><a href="https://github.com/i3p9/python-scripts"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Personal Website V1</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Jekyll</span><span class="techused-font">Ruby</span></td>
                        <td><a href="https://github.com/i3p9/personalwebsite"><FontAwesomeIcon icon={ faGithub } /></a>&nbsp;&nbsp;<a href="https://fahim.tech/"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>VSCode Essential Pack (Extension)</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Typescript</span></td>
                        <td><a href="https://github.com/i3p9/vscode-essential-pack"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>mac-setup</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">DocifyJS</span><span class="techused-font">MD</span></td>
                        <td><a href="https://github.com/i3p9/mac-setup"><FontAwesomeIcon icon={ faGithub } /></a>&nbsp;&nbsp;<a href="https://mac-setup.vercel.app/"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>unified-remote-custom</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Lua</span><span class="techused-font">Python</span></td>
                        <td><a href="https://github.com/i3p9/unified-remote-custom"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>BigSur-OpenCore-Lenovo-T450s-efi</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">macOS</span><span class="techused-font">Obj-C</span></td>
                        <td><a href="https://github.com/i3p9/Hackintosh-BigSur-Catalina-OpenCore-Lenovo-T450s-efi"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>Pizzahouse</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Laravel</span><span class="techused-font">Vue</span></td>
                        <td><a href="https://github.com/i3p9/pizzahouse"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>QandA</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Laravel</span><span class="techused-font">Vue</span></td>
                        <td><a href="https://github.com/i3p9/laravel-qa-new"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2020</th>
                        <td>Edusharev2</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">PHP</span><span class="techused-font">MySQL</span></td>
                        <td><a href="https://github.com/i3p9/Edusharev2"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2019</th>
                        <td>MSI-Z97-Hackintosh-Opencore</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">macOS</span><span class="techused-font">Obj-C</span></td>
                        <td><a href="https://github.com/i3p9/MSI-Z97-Hackintosh-Opencore"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2019</th>
                        <td>InstaNot - Instagram Clone</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Java</span></td>
                        <td><a href="https://github.com/i3p9/InstaNot"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2018</th>
                        <td>Custom-HiDPI-Resolution-Mac</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Shell</span><span class="techused-font">Obj-C</span></td>
                        <td><a href="https://github.com/i3p9/Custom-HiDPI-Resolution-Mac"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2018</th>
                        <td>ocr2google</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Python</span><span class="techused-font">Shell</span></td>
                        <td><a href="https://github.com/i3p9/ocr2google"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2017</th>
                        <td>pebble-watchface-minimal</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Python</span><span class="techused-font">C</span></td>
                        <td><a href="https://github.com/i3p9/pebble-watchface-minimal"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2016</th>
                        <td>Fun2Text - Chrome Extension</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Javascript</span></td>
                        <td><a href="https://github.com/i3p9/fun2fuck"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2016</th>
                        <td>Steamlinkfix</td>
                        <td class="d-none d-md-table-cell"><span class="techused-font">Javascript</span></td>
                        <td><a href="https://github.com/i3p9/Steamlinkfix"><FontAwesomeIcon icon={ faGithub } /></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ArchivePage
