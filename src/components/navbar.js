import * as React from 'react'
import { Link } from 'gatsby'
import DarkModeToggle from './themetoggle'
import useDarkMode from 'use-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const darkMode = useDarkMode(false);
    return(
        <div className="container d-flex justify-content-between mt-5">
            <nav>
            <Link to="#" onClick={darkMode.toggle}> { darkMode.value ? 'light' : 'dark' } </Link>
            </nav>
            <nav>
            <Link to="/" activeClassName="nav-active">home</Link>
            {/* <Link to="/skills">skills</Link> */}
            <Link to="/projects" activeClassName="nav-active">projects</Link>
            {/* <Link to="#" onClick={darkMode.toggle}> { darkMode.value ? 'light mode' : 'dark mode' } </Link> */}
            </nav>
            <script>
            </script>
        </div>
    )
}


export default Navbar
