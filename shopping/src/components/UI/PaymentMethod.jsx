

import React from 'react'
import masterCard from '../../assest/all-images/master-card.jpg'
import '../../Styles/payment-method.css'
const PaymentMethod = () => {
  return(
  <>
  <div className="payment">
    <label htmlFor="" className=' d-flex align-item-center gap-2'>
        <input type="radio" /> Direct Bank Transfer
    </label>
  </div>
  <div className="payment">
    <label htmlFor="" className=' d-flex align-item-center gap-2'>
        <input type="radio" /> Cheque Payment
    </label>
  </div>
  <div className="payment mt-3 d-flex align-item-center justify-content-between">
    <label htmlFor="" className=' d-flex align-item-center gap-2'>
        <input type="radio" /> Cradit Card
    </label>

    <img src={masterCard} alt="" />
  </div>

  <div className="payment mt-3 d-flex align-item-center justify-content-between">
    <label htmlFor="" className=' d-flex align-item-center gap-2'>
        <input type="radio" /> Master Card
    </label>

    <img src={masterCard} alt="" />
  </div>

  <div className='payment text-end mt-5'>
    <button>Reserve Now</button>
  </div>
  
  </>
  )
}

export default PaymentMethod
