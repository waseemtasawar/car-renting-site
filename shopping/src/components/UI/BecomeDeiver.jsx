import React from 'react'
import {Container ,Row,Col} from 'reactstrap'
import '../../Styles/become-driver.css'

import driverImg from '../../assest/all-images/toyota-offer-2.png'
const BecomeDeiver = () => {
  return <section className="become__driver">
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become__driver-img'>
                <img src={driverImg} alt="" className='w-100' />
            </Col>
            

            <Col lg='6' md='6' sm='12'>
                <h2 className="section__title become__driver-title">
                    Do You Want to Earn With Us? So Don't Be Late.
                </h2>

                <butten className="btn become__driver-btn mt-4">
                    Become a Driver
                </butten>
            </Col>
        </Row>
    </Container>
  </section>
}

export default BecomeDeiver
