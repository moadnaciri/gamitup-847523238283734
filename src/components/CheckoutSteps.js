import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps-container"><div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} ><h3>Signin</h3></div>
    <div className={props.step2 ? 'active' : ''} ><h3>Shipping</h3></div>
    <div className={props.step3 ? 'active' : ''} ><h3>Payment</h3></div>
    <div className={props.step4 ? 'active' : ''} ><h3>Place Order</h3></div>
  </div>
  </div>
}

export default CheckoutSteps;