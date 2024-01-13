import React from "react";
import {Col, Row} from "reactstrap";
import "../styles/service-summary.css"

const ServicesComponent = (props) => {
    const isEven = props.index % 2 === 1;

    return (
        <div className={`service-summary-container ${isEven ? "even" : "odd"}`}>
            <Row>
                <Col className="service-summary-text-col">
                    <Row>
                        <h3>{props.title}</h3>
                        <h5>{props.motto}</h5>
                        <p className="service-summary-text" dangerouslySetInnerHTML={{__html: props.summaryText}}/>

                    </Row>
                </Col>
                <Col className="service-summary-image-col">
                    <img className="service-summary-image" src={props.imageSrc} alt={props.title}/>
                </Col>
            </Row>
        </div>
    );
};

export default ServicesComponent;
