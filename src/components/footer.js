import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <div className="footer-links">
                <Link to="/">Anasayfa</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/contact">İletişim</Link>
                <Link to="/services">Hizmetler</Link>
                <Link to="/references">Referanslar</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} MUV Ajans. All rights reserved.</p>
        </footer>
    );
};

export default FooterComponent;
