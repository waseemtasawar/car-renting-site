import React from 'react'
import { Container ,Row, Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../Styles/footer.css'




const quickLinks=[
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]

const Footer = () => {

  const date= new Date();
  const year = date.getFullYear()


  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
        <div className="logo footer__logo">
              <h1>  
                <Link to='/home' className='d-flex align-items-center gap-3 ' >
                  <i class="ri-car-line"></i>
                  <span>Rent Car <br /> Service</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus doloribus accusantium ab, ullam nemo rem aut tenetur, nulla, reprehenderit ut magnam est modi. Iure laborum sunt delectus deleniti, reiciendis consequuntur.
            </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index)=>(
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                      <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <div className="mb-4">
        <h5 className="footer__link-title mb-4">Head Office</h5> 
        <p className='office__info'>T-Chok GT-Road Main Channu Pakistan</p>
        <p className='office__info'>Phone:   +92-302-6599014</p>
        <p className='office__info'>Email: waseemtasawar96@gmail.com</p>
        <p className='office__info'>Office Time: 10am - 8pm</p>
        </div>
        </Col>

        <Col lg='3' mb='4'>
          <div className="mb-4">
          <h5 className="footer__link-title">NewsLetter</h5>
          <p className="section__description">Subscribe our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder='Email' />
              <span><i class="ri-send-plane-line"></i></span>
          </div>
          </div>
        </Col>

        <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
            <i class="ri-copyright-line"></i>Copyright {year},
            Developed by Waseem Tasawar. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
