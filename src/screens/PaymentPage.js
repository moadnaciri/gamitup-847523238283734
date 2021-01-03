import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Header2 from '../components/Header2'

function PaymentPage(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  };
    return (
        <>
        <Header2 />
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
           <div className="billing-section padding-bottom-120 md-pd-top-80 padding-top-50 md-pd-bottom-50">
  <div className="container">
    
    <div className="row billing-confirmation-area">
      <div className="col-lg-7" style={{ maxWidth: '100%', flex: '0 0 100%' }}>
        <div className="user-info ">
          <div className="section-title text-left padding-bottom-30">
            <h3 style={{ textAlign: 'center' }}>Payment Information</h3>
          </div>
          <form onSubmit={submitHandler} className="user-form bg-white">
            <div className="row">{/*
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="textOne">First Name</label>
                  <input id="textOne" type="text" className="form-control" />
                </div>
              </div>*/}
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  style={{ marginRight: '10px' }}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></input>
                  <label htmlFor="textThree">Paypal</label>
                </div>
              </div>
              {/*<div className="col-md-12">
                <div className="check-box">
                  <label className="container"> Create an account ?
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>*/}
            </div>
            {/*<div className="col-lg-5 md-pd-top-60">
        <div className="notes-info">
          <div className="check-box ">
            <label className="container"> Ship to a different Address
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
          <p>Oder Note Option</p>
            <textarea name="note" rows={6} className="from-control" placeholder="Note about your order ,eg ,specials note for delivery" defaultValue={""} />*/}
            <div className="btn-wrapper">
                  <button className="boxed-btn" type="submit">Continue</button>
                </div>
          </form>
        </div>
        {/*<div className="order-summery-area padding-top-60">
          <div className="cart-checkout-wrapper ">
            <div className="cart-items-wrapper checout-items-wrap">
              <div className="summery-title">
                <h3 className="title">your order</h3>
              </div>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th className="product-name">Product</th>
                      <th className="product-name" />
                      <th className="product-price">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumb">
                        <div className="product-img">
                          <img src="assets/img/cart/checkout1.png" />
                        </div>
                      </td>
                      <td className="product-name">
                        <div className="product-content">
                          <h3 className="title">Single Cotton Sofa</h3>
                        </div>
                      </td>
                      <td className="product-price">$100.99</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Subtotal</h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">$90.00</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Shipping</h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">Local pickup: <span className="color-font">$15.00</span> </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Total</h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="total-price">
                          <p className="title">$105.00</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="priceing-counter">
                <h5>Cash in Delivery</h5>
                <h5>Pay with cash upon delivery.</h5>
                <p>Your personal data will be used to process your order, support your experience
                  throughout this website, and for other purposes described in our privacy policy.
                </p>
                <div className="btn-wrapper">
                  <button className="boxed-btn" type="submit">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
*/}      </div>
      
    </div>
  </div>
</div>

        </>
    )
}

export default PaymentPage
