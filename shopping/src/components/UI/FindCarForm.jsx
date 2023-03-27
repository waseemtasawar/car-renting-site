

import React from 'react'
import '../../Styles/find-car-form.css';
import {Form, FormGroup } from 'reactstrap'


const FindCarForm = () => {
  return <Form className='form'>
    <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className='form__group'>
            <input type="text" placeholder='from address' required />
        </FormGroup>

        <FormGroup className='form__group'>
            <input type="text" placeholder='To address' required />
        </FormGroup>

        <FormGroup className='form__group'>
            <input type="date" placeholder='journey data' required />
        </FormGroup>

        <FormGroup className='form__group'>
            <input className='journey__time' type="time" placeholder='journey time' required />
        </FormGroup>

        <FormGroup className='select__group'>
            <select>
                <option value="AC">AC Car</option>
                <option value="non-ac">Non AC Car</option>
            </select>
        </FormGroup>

        <FormGroup className='form__group'>
           <butten className="btn find__car-btn">Find Car</butten>
        </FormGroup>
    </div>
  </Form>
}

export default FindCarForm
