

import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../assest/all-images/ava-1.jpg'
import ava02 from '../../assest/all-images/ava-2.jpg'
import ava03 from '../../assest/all-images/ava-3.jpg'
import ava04 from '../../assest/all-images/ava-4.jpg'

const Testimonial = () => {

   const settings ={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    slidesToShow:3,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToScroll:1,
    responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
    ],
   };
   
   
  return <Slider {...settings}>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam rerum accusantium libero enim saepe dolorum atque ratione delectus consequuntur consequatur porro excepturi, quasi temporibus animi quod corrupti harum. Molestias, ducimus.

            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
            </div>
                  <div>  
                <h6 className="mb-0 mt-3">Waseem Tasawar</h6>
                <p className="section__description">Customer</p>
                </div> 
        </div>

        
        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam rerum accusantium libero enim saepe dolorum atque ratione delectus consequuntur consequatur porro excepturi, quasi temporibus animi quod corrupti harum. Molestias, ducimus.

            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
            </div>
                  <div>  
                <h6 className="mb-0 mt-3">Waseem Tasawar</h6>
                <p className="section__description">Customer</p>
                </div> 
        </div>


        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam rerum accusantium libero enim saepe dolorum atque ratione delectus consequuntur consequatur porro excepturi, quasi temporibus animi quod corrupti harum. Molestias, ducimus.

            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava03} alt="" className='w-25 h-25 rounded-2' />
            </div>
                  <div>  
                <h6 className="mb-0 mt-3">Waseem Tasawar</h6>
                <p className="section__description">Customer</p>
                </div> 
        </div>


        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam rerum accusantium libero enim saepe dolorum atque ratione delectus consequuntur consequatur porro excepturi, quasi temporibus animi quod corrupti harum. Molestias, ducimus.

            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava04} alt="" className='w-25 h-25 rounded-2' />
            </div>
                  <div>  
                <h6 className="mb-0 mt-3">Waseem Tasawar</h6>
                <p className="section__description">Customer</p>
                </div> 
        </div>
  </Slider>
}

export default Testimonial
