import React from 'react'
import './payment.css';

const Payment = () => {
  return (
    <>
      <div className='all-comp'>
        <div className='payment '>
          <h3 >Payment Sucessfull</h3>
          <p>Thank you for chossing Physics wallah</p>
          <span className='second-p'>order id: jhgt768778787</span>

        </div>
        <hr className='hr'></hr>
        <div className='pay-button'>
          <button><img src='./download.svg'></img>Download invoice</button>
          <button><img src='./whatsapp.svg'></img>Share invoice</button>
        </div>
      </div>
    </>
  )
}

export default Payment;