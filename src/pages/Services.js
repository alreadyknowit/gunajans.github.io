import React from 'react'
import performanceImage from '../images/performans.png'
import ga4Image from '../images/ga4.png'
import seoImage from '../images/seo.png'
import socialMedia from '../images/socialmedia.png'
import servicesImage from '../images/services.png'
import {Container} from "reactstrap";
import ServicesComponent from "../components/services-component";
import "../styles/service-summary.css"
import image from "../images/services.png"

const summaryData = [{
    index: 0, title: 'Performans Pazarlama', imageSrc: performanceImage, // Replace with actual image source
    summaryText: "Pazarlama stratejinizi dijital dünyaya taşıyarak satışlarınızı arttırma, form toplama ve marka bilinirliğini arttırma" + " hedeflerinizi etkili şekilde gerçekleştiriyoruz.",
}, {
    index: 1, title: 'GA4', imageSrc: ga4Image, // Replace with actual image source
    summaryText: "Sitenizin ölçümlenebilmesini ve istatistikleri etkin şekilde takip edebilmeniz için raporlaştırılmasını sağlıyoruz.",
}, {
    index: 2, title: 'SEO', imageSrc: seoImage, // Replace with actual image source
    summaryText: "Sitenizin içeriğini optimize ederek arama motorlarında organik görünürlüğünü arttırıp üst sıralara çıkmanızı sağlıyoruz.",
}, {
    index: 3, title: 'SEO', imageSrc: socialMedia, // Replace with actual image source
    summaryText: "Sitenizin içeriğini optimize ederek arama motorlarında organik görünürlüğünü arttırıp üst sıralara çıkmanızı sağlıyoruz.",
}, {
    index: 4, title: 'Sosyal Medya', imageSrc: servicesImage, // Replace with actual image source
    summaryText: "Hesap yönetimi ve sosyal medya platformlarında reklam danışmanlığı hizmetimizle stratejik içerik planlaması ve hedef odaklı" + " reklam kampanyaları yapıyoruz.",
}];
export default function Services() {
    return (

        <Container>
            <div className="service-general">
                <p>Fotoğraf/Film Çekimi:Markanızın ihtiyacı olabilecek hizmetleri çeşitli ekipman desteğimizle sağlıyoruz.</p>
                <div className="row">
                    <div className="feature-list">
                        <span>Ürün Çekimi</span>
                        <span>Menü Çekimi</span>
                        <span>Film Çekimi</span>
                        <span>Drone Çekimi</span>
                    </div>
                    <img src={image} alt="General Text"/>
                </div>
            </div>
            <div className="summary-container-wrapper">
                {summaryData.map((data) => (<ServicesComponent key={data.index} {...data} />))}
            </div>
        </Container>)
}
