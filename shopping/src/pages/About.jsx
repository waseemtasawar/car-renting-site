import React from 'react'
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import {Container,Row,Col} from 'reactstrap'
import BecomeDeiver from '../components/UI/BecomeDeiver'
import driveImg from '../assest/all-images/drive.jpg'
import OurMember from '../components/UI/OurMember';
import '../Styles/about.css'



const About = () => {
  return (
    <Helmet title="About" >
      <CommonSection title="About Us" />
      <AboutSection aboutClass ='aboutPage'/>

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className="about__pahe-img">
                <img src={driveImg} alt="" className='w-100 rounded-3' />
              </div>
            </Col>


            <Col lg='6' md='6' sm='12'>
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed to Provide Save Ride Solution 
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatum soluta saepe omnis mollitia. Nostrum qui dolore fugit. Voluptatibus aperiam obcaecati sit tenetur, quasi ratione voluptate odio iste aut possimus!
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatum soluta saepe omnis mollitia. Nostrum qui dolore fugit. Voluptatibus aperiam obcaecati sit tenetur, quasi ratione voluptate odio iste aut possimus!
                </p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'><i class="ri-phone-line"></i>
                  </span>
                
                    <div>
                      <h6 className="section__subtitle">Need Any Help?</h6>
                      <h4>+923346438744</h4>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDeiver/>

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5 text-center' >
            <h6 className="section__subtitle">Experts</h6>
            <h2 className="section__title">Our Member</h2>
            </Col>
            <OurMember/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About
