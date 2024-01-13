import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import img1 from "../images/360.jpg";
import "../styles/about-summary.css";

const AboutSummary = (props) => {
    return (
        <div className="about-summary-container">
            <Row>
                <Col className="about-col about-summary-image-col">
                    <img className="summary-image" src={img1} alt="Services Picture" />
                </Col>
                <Col className="about-col about-summary-list-col">
                    <ul>
                        <li>
                            <span>Performans Pazarlama</span>
                        </li>
                        <li>
                            <span>GA4</span>
                        </li>
                        <li>
                            <span>SEO</span>
                        </li>
                        <li>
                            <span>Sosyal Medya</span>
                        </li>
                        <li>
                            <span>Fotoğraf/Film Çekimi</span>
                        </li>
                    </ul>
                </Col>
                <Col className="about-col about-summary-text-col">
                    <p className="about-summary-text">
                        Dijital reklam, ölçümleme, arama motoru optimizasyonu ve fotoğraf/film
                        çekimi hizmetlerimizle 360° dijital pazarlama hizmetini herkese
                        ulaştırmayı hedefliyoruz.
                    </p>
                    <Link to="/services">
                        <Button className="custom-button">Hizmetler</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default AboutSummary;
