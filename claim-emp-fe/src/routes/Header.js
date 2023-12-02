import {Link, Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/HrConnect.png';
import styles from './View.module.css';






function Header(){


  return (
    <>
 
    <h1 className={styles.img}><img src={logo} alt="Logo" /> </h1>
 
    <nav>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className={styles.navContainer}>
        <Navbar.Brand >HR Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to="/employee">Create Profile</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/employee/view">Employee Record</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/claim">Submit Claim</Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/claim/view">Claim History</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
    <Outlet />
    </>
  )
}



export default Header;

