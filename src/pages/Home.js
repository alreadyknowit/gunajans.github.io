
import React from 'react'
import '../styles/home.css'
import SummaryComponent from '../components/SummaryComponent';
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import CustomSlider from '../components/CustomSlider';
import { Container } from 'reactstrap';

export default function Home() {
    return (
        <div>
            <CustomSlider></CustomSlider>
            <Container fluid>
                <SummaryComponent alt="Image 1" image={image1} isLeft={false}></SummaryComponent>
                <SummaryComponent alt="Image 2" image={image2} isLeft={true}></SummaryComponent>
                <SummaryComponent alt="Image 3" image={image3} isLeft={false}></SummaryComponent>
                <SummaryComponent alt="Image 4" image={image4} isLeft={true}></SummaryComponent>
            </Container>
        </div>
    )
}
