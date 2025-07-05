import React from 'react'

const Footer = () => {
    const year = new Date();
    return (
        <footer>
            Copyright &copy; all rights reserved {year.getFullYear()}
        </footer>
    );
}

export default Footer;