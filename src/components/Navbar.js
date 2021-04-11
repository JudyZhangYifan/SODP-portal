import React from 'react';
import styles from '../stylesheets/navbar.module.css'
// import '../stylesheets/styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LehighIcon from '../images/LehighU_official-logo_White.png';

function NavBar() {
    return (
        <div id="nav">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={LehighIcon}
              style={{verticalAlign: 'middle', height:'3em', paddingTop: '.5em'}}
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#/" className={styles.navBarLink}>Home</Nav.Link>
              <Nav.Link href="#/Datasets" className={styles.navBarLink}>Datasets</Nav.Link>
              <Nav.Link href="#/About" className={styles.navBarLink}>About Us</Nav.Link>
              <Nav.Link href="#/Resources" className={styles.navBarLink}>Resources</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
      </div>
    );
}

export default NavBar;