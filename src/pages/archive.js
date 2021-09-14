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
                        <td>Hello World</td>
                        <td class="d-none d-md-table-cell">React Node</td>
                        <td><a href="https://github.com">linkto</a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td class="d-none d-md-table-cell">React Node</td>
                        <td><a href="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                        </tbody>
                    <tbody>
                        <tr>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td class="d-none d-md-table-cell">React Node</td>
                        <td><a href="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                        </tbody>
                    <tbody>
                    <tr>
                        <th scope="row">2021</th>
                        <td>Hello World</td>
                        <td class="d-none d-md-table-cell">React Node</td>
                        <td><a href="https://github.com"><FontAwesomeIcon icon={ faExternalLinkAlt }/></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ArchivePage
