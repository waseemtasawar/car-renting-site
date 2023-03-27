


import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import CarItem from '../components/UI/CarItem'
import carData from  '../assest/data/carData' 



const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title ="Car Listing" />


    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className=' d-flex text-items-center gap-3 mb-5'>
              <span className=' d-flex text-items-center gap-2'><i class="ri-sort-asc"></i> Sort by</span>
           
              <select >
                <option >option</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </Col>

          {
            carData.map((item) =>(
              <CarItem item ={item} key={item.id}
               />
            ))
          }
        </Row>
      </Container>
    </section>

    </Helmet>
  )
}

export default CarListing
