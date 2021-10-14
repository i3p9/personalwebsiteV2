import * as React from 'react'
import { Link } from 'gatsby'
// import DarkModeToggle from './themetoggle'
import useDarkMode from 'use-dark-mode'

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
            <Link to="/fun" activeClassName="nav-active">fun</Link>
            <a href="../../fahim_cv.pdf" target="_blank" class="resume-link">cv.pdf</a>
            {/* <Link to="#" onClick={darkMode.toggle}> { darkMode.value ? 'light mode' : 'dark mode' } </Link> */}
            </nav>
            <script>
            </script>
        </div>
    )
}


export default Navbar
