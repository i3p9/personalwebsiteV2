import * as React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from './themetoggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <div className="container d-flex justify-content-between mt-5">
            <nav>
            <div className="navName">Fahim Faisal</div>
            </nav>
            <nav>
            <Link to="/">home</Link>
            {/* <Link to="/projects">projects</Link> */}
            <Link to="/projects">projects (beta)</Link>
            </nav>
            <DarkModeToggle/> <FontAwesomeIcon icon={ faAdjust } />
        </div>
    )
}


export default Navbar
