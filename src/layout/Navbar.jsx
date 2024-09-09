import React from 'react'
import Navlogo from '../assets/IMG_6318 1.png'
import '../styles/Navbar.css'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menuimg from '../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'

const Navbar = () => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <>
        <nav className = 'container py-2 d-flex justify-content-between'>
            <div className = 'd-flex align-items-center gap-2'>
                <img src= {Navlogo} className ='img-fluid' alt="nav-logo"/>
                <h2>Innonson Group</h2>
            </div>
            <ul className = 'd-none list-unstyled d-lg-flex align-items-center gap-5'>
                <li>Home</li>
                <li>Companies</li>
                <li>Products</li>
                <li>About</li>
                <li className = 'btn'>Contact</li>
            </ul>
            {/* off canvas */}
            <div className = 'd-md-block d-lg-none mt-2'>
            <div className = 'd-lg-none' onClick = {handleShow}>
                <img  className = 'menu-img' src= {menuimg} alt="menu-img"/>
            </div>

      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mobile Nav</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className = 'd-flex flex-column list-unstyled gap-5 mobile-nav'>
                <li>Home</li>
                <li>Companies</li>
                <li>Products</li>
                <li>About</li>
                <li className = 'btn'>Contact</li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
            </div>
        </nav> 
        </>
    )
}

export default Navbar

