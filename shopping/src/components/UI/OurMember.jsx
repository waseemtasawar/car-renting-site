


import React from 'react'
import '../../Styles/our-member.css'
import {Col} from "reactstrap"
import {Link } from "react-router-dom"
import ava01 from '../../assest/all-images/ava-1.jpg'
import ava02 from '../../assest/all-images/ava-2.jpg'
import ava03 from '../../assest/all-images/ava-3.jpg'


const OUR__MEMBER = [
    {
        name:'Waseem',
        experience:'5 years of experience',
        fbUrl:'#',
        instUrl:'#',
        twitUrl:'#',
        linkedinUrl:'#',
        imgUrl: ava01,
    },
    {
        name:'Waseem',
        experience:'5 years of experience',
        fbUrl:'#',
        instUrl:'#',
        twitUrl:'#',
        linkedinUrl:'#',
        imgUrl: ava02,
    },
    {
        name:'Waseem',
        experience:'5 years of experience',
        fbUrl:'#',
        instUrl:'#',
        twitUrl:'#',
        linkedinUrl:'#',
        imgUrl: ava03,
    },
];

const OurMember = () => {
  return(
    <>
    {
        OUR__MEMBER.map((item,index)=>(
            <Col lg='3' md='3' sm='4' xs='6' key={index} className="mb-4">
                <div className="single__member">
                    <div className="single__member-img">
                        <img src={item.imgUrl} alt="" className='w-100' />

                        <div className="single__member-social">
                            <Link to={item.fbUrl}><i class="ri-facebook-circle-fill"></i></Link>
                        
                            <Link to={item.twitUrl}><i class="ri-twitter-fill"></i></Link>

                            <Link to={item.linkedinUrl}><i class="ri-linkedin-box-fill"></i></Link>

                            <Link to={item.instUrl}><i class="ri-instagram-fill"></i></Link>
                        

                        </div>
                    </div>

                    <h6 className='text-center mb-0 mt-3'>{item.name}</h6>
                    <p className="section__description text-center">{item.experience}</p>
                </div>

            </Col>
        ))
    }
    
    </>
  )
}

export default OurMember
