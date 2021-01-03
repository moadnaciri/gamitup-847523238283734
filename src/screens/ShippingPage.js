import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Header2 from '../components/Header2'

function ShippingPage(props) {
  const history = useHistory()
  const [address, setAddress] = useState('hghngh ghh thfrtrtrth');
  const [city, setCity] = useState('ghgng');
  const [postalCode, setPostalCode] = useState('90700');
  const [country, setCountry] = useState('morocco');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    history.push('payment');
  }
    return (
        <> <Header2 />
        <CheckoutSteps step1 step2 ></CheckoutSteps>
           <div className="billing-section padding-bottom-120 md-pd-top-80 padding-top-50 md-pd-bottom-50">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="coupon-area padding-bottom-40">
          <form className="coupon-form checkout-coupon-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Have a coupon?" />
            </div>
            <a href className="submit-btn hover-border">Enter your code</a>
          </form>
        </div>
      </div>
    </div>
    <div className="row billing-confirmation-area">
      <div className="col-lg-7" style={{ maxWidth: '100%', flex: '0 0 100%' }}>
        <div className="user-info ">
          <div className="section-title text-left padding-bottom-30">
            <h3 style={{ textAlign: 'center' }}>Shipping Information</h3>
          </div>



          <form onSubmit={submitHandler} className="user-form bg-white">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="textOne">First Name</label>
                  <input id="textOne" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="textTwo">Last Name</label>
                  <input id="textTwo" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="textThree">Company Name (optional) </label>
                  <input id="textThree" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Country<span>*</span></label>
                  <div className="totals-value materials">
                    <select>
                      <option value="volvo">Bangladesh</option>
                      <option value="saab">India</option>
                      <option value="opel">Morocco</option>
                      <option value="audi">Pakistan</option>
                    </select>
                    <div className="select-arrow" />
                    <div className="select-arrow" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="textFive">Street Address</label>
                  <input type="text" name="city" id="city" className="form-control" placeholder="House number and street name" onChange={(e) => setAddress(e.target.value)} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Apartment, suit, unite etc. (optional)" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="textSix">City/Town <span>*</span></label>
                  <input id="textSix" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>State / Country <span>*</span></label>
                  <div className="materials">
                    <select type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
                      <option value="volvo">Dhaka</option>
                      <option value="saab">Sylet</option>
                      <option value="opel">Morocco</option>
                      <option value="audi">Pakistan</option>
                    </select>
                    <div className="select-arrow" />
                    <div className="select-arrow" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="textEight">Postcode/ZIP</label>
                  <input className="form-control" type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}/>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="textSeven">Phone<span>*</span></label>
                  <input id="textSeven" type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="emailOne">E-mail<span>*</span></label>
                  <input id="emailOne" type="text" className="form-control" />
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

export default ShippingPage
