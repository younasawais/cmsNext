import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Logo} from './';
import style from '../styles/Nav.module.css';
import { Fragment } from 'react';

export function Menu() {
  return (
    <Fragment>
        <Logo />
        <Navbar bg="light" expand="lg" className={style.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <div className={style.toTheRight}> */}
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/dummy">Dummy</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            {/* </div> */}
        </Navbar>
    </Fragment>
  )
}
