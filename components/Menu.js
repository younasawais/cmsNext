import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo.js';
import styling from '../styles/Nav.module.css';
import { Fragment } from 'react';

export default function Menu({articleMenuItems}) {
  return (
    <Fragment>
        <Logo />
        <Navbar bg="light" expand="lg" className={styling.navbar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <div className="test">
                        <Nav className="mr-auto" style={{flexWrap: 'wrap'}} >
                            {articleMenuItems.map( ({name, router}) => { return(
                                <Nav.Link href={"/article/" + router}>{name}</Nav.Link>                            
                            )})}
                            {/* <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/dummy">Dummy</Nav.Link> */}
                        </Nav>
                    </div>
                </Navbar.Collapse>
        </Navbar>
        <style jsx>{`
            @media (min-Width: 991px){
                .test{
                    overflow-y: scroll;
                    max-height: 5rem;
                }
            }
            @media (max-Width: 991px){
                .test{
                    overflow-y: scroll;
                    max-height: 20rem;
                }
            }
            
        `}</style>
    </Fragment>
  )
}

// const styles = {
//     navOverFlow : {
//         flexWrap: 'wrap', 
//         maxHeight: '2rem'
//     }
// }
