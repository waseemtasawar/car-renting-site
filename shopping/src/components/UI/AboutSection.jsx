

import React from 'react'
import {Container, Row,Col} from 'reactstrap'
import '../../Styles/about-section.css'
import aboutImg from '../../assest/all-images/cars-img/bmw-offer.png'
 
const AboutSection = ({aboutClass}) => {
  return <section className='about__section' style={aboutClass=== 'aboutPage'?{marginTop:'0px'}:{marginTop:'280px'}} >
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__section-content">
                    <h4 className="section__subtitle">About Us </h4>
                    <h2 className="section__title">Welcome to Car Rent Service</h2>
                    <p className="section__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsa saepe? Officiis eius, quis perspiciatis nihil voluptas placeat nesciunt natus recusandae quaerat quibusdam amet dolorem ex hic ab quisquam? Aliquam aperiam dicta possimus incidunt nobis labore asperiores quis beatae deleniti.
                    </p>


                    <div className="about__section-item d-flex align-item-center">
                        <p className="section__description d-flex align-item-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Lorem ipsum dolor sit amet.
                        </p>

                        <p className="section__description d-flex align-item-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className="about__section-item d-flex align-item-center">
                        <p className="section__description d-flex align-item-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Lorem ipsum dolor sit amet.
                        </p>

                        <p className="section__description d-flex align-item-center gap-2">
                        <i class="ri-checkbox-circle-line"></i>
                        Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </Col>
        
            <Col lg='6' md='6'>

                <div className="about__img">
                    <img src={aboutImg} alt="" className='w-100' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

 
export default AboutSection
