import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer
            className='footer-area d-flex align-items-center justify-content-center'>
            <p>Dream Weaver <small>copyright ©{year} </small></p>
        </footer>
    );
};

export default Footer;