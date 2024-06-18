import * as React from 'react';
import { Link } from 'gatsby';
import Navbar from '../../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import archiveData from '../../../content/projects-archive.json';

const ArchivePage = () => {
    return (
        <main>
            <Navbar />
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
                    {archiveData.archive.map((item, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{item.year}</th>
                                    <td>{item.title}</td>
                                    <td class="d-none d-md-table-cell">
                                        {item.tech_used.map((tech, index) => {
                                            return (
                                                <span class="techused-font">{tech}</span>
                                            );
                                        })}
                                    </td>
                                    <td><a aria-label="github link" href={item.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>&nbsp;&nbsp;
                                        {item.link !== "NA" && <a aria-label="demo link" href={item.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>}
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </main>
    );
};


export default ArchivePage
