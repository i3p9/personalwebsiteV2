import * as React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '../scss/index.scss'

const ArchivePage = () => {
    return(
        <main>
            <Navbar/>
            <div className="container">
                <div>
                    <h1 className="home-name">Archive</h1>
                </div>
                <table class="table table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Made with</th>
                            <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td>React Node</td>
                        <td><Link to="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></Link></td>
                    </tbody>
                    <tbody>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td>React Node</td>
                        <td><Link to="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></Link></td>
                    </tbody>
                    <tbody>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td>React Node</td>
                        <td><Link to="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></Link></td>
                    </tbody>
                    <tbody>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td>React Node</td>
                        <td><Link to="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></Link></td>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ArchivePage
