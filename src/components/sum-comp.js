import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Row} from "reactstrap";
import "../styles/summary.css";

const SummaryComponent = (props) => {
    const isEven = props.index % 2 === 0;

    return (
        <div className={`summary-container ${isEven ? "even" : "odd"}`}>
            <Row>
                <Col className="summary-text-col">
                    <Row>
                        <h3>{props.title}</h3>
                        <h5>{props.motto}</h5>
                        <p className="summary-text" dangerouslySetInnerHTML={{__html: props.summaryText}}/>

                        <Link to={props.linkTo}>
                            <Button className="custom-button">{props.title}</Button>
                        </Link>
                    </Row>
                </Col>
                <Col className="summary-image-col">
                    <img className="summary-image" src={props.imageSrc} alt={props.title}/>
                </Col>
            </Row>
        </div>
    );
};

export default SummaryComponent;
