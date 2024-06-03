import React from 'react'
import '../components/Order.css'
import phone from '../assets/images/PH2.webp'


const Order = () => {
  return (
    
      <div className='order-content'>
        <div className="pre-order-form">
          <h2>Shipping address</h2>
          <form>
            <div className="form-group">
              <input type="text" name='name' placeholder='First Name' />
            </div>
            <div className="form-group">
              <input type="email" name='email' placeholder='Email' />
            </div>
            <div className="form-group">
              <input type="text" name='address' placeholder='Country' />
            </div>
            <div className="form-group d-flex">
              <div className="mr-2" style={{ flex: '1' }}>
                <input type="text" name="zip" placeholder='ZIP Code' />
              </div>
              <div style={{ flex: '1' }}>
                <input type="text" name="city" placeholder='City'/>
              </div>
            </div>
            <div className="form-group">
              <input type="text" name='address' placeholder='Apartment, suite, etc.(optional)' />
            </div>
            <div className="form-group">
              <input type="number" name='quantity'  placeholder='Quantity' min='1' />
            </div>
            <button type='submit' className='btn'>Continue to Payment</button>
          </form>
        </div>
        <div className='pre-order-form'>
          
          <div className="card">
            <img src={phone} alt="TechWave XR" className="img-fluid" />
          </div>
        </div>
      </div>
      
    
  )
}

export default Order
