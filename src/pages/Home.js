import React from 'react'
import image2 from '../images/logo-body.jpg'
import image4 from '../images/image4.jpg'
import {Container} from 'reactstrap';
import SliderComponent from "../components/slider-component";
import SummaryComponent from "../components/sum-comp";
import AboutSummary from "../components/about-sum";
import ContactForm from "../components/contact-form";


const summaryData = [
    {
        index: 0,
        title: 'Hakkımızda',
        imageSrc: image2, // Replace with actual image source
        summaryText: "<span style='font-weight: bold'>Biz;</span> Sizin için güncel trendleri takip ederek markanızın ihtiyacına yönelik yenilikçi çözümler üretip harekete geçmenizi sağlayan iş ortağınız, MUV. ",
        linkTo: '/about',
        isLeft: true,
        motto: ""
    },
    {
        index: 1,
        title: 'Referanslar',
        imageSrc: image4, // Replace with actual image source
        summaryText: "Hizmet prensibimiz tektir: müşteriler kazandığında biz de kazanırız. Sade yapısı, tutarlı kalitesi ve tüm dikkatin odak" +
            " olduğu ticari sonuçlarıyla birinci sınıf müşteri hizmeti bizim birincil görevimizdir. Müşterilerimiz, küresel pazarda 60 milyar dolarlık medya harcamasını temsil eden ölçeğimizden yararlanmaktadır (COMvergence, 2021).",

        linkTo: '/references',
        isLeft: false,
        motto: ""
    }
];


export default function Home() {
    return (<div>
        <SliderComponent/>
        <Container>
            <div className="summary-container-wrapper">
                <AboutSummary/> {
                summaryData.map((data) => (<SummaryComponent key={data.index} {...data} />))
            }
            <ContactForm/>
            </div>
        </Container>
    </div>)
}
