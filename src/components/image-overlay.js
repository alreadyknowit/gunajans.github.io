import React from "react";
import "../styles/image-overlay.css"
import brand1 from "../images/contact.jpg"
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";


const ImageOverlay = () => {
    return (
        <div className="image-overlay-container">
            <img src={brand1} alt="MUV AJANS" />
            <div className="overlay">
                <div className="icons-container">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaFacebook className="fa fa-facebook" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter className="fa fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram className="fa fa-instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageOverlay;