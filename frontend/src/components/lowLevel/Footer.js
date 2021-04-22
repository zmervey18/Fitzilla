import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <p>Fitzilla Copyright &copy; 2021</p>
            <Link className="linkRemove" to="/about">About Us</Link>
        </footer>
        </div>
    )
}

export default Footer
