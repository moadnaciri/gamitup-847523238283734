import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
import Header2 from '../components/Header2';
import PaypalButton from '../components/PaypalButton';
function OrderPage(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }
  

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;
  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    
        <> <Header2 />
           <div className="billing-section padding-bottom-120 md-pd-top-110 padding-top-50 md-pd-bottom-50">
  <div className="container">
    {/*<div className="row">
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
    </div>*/}
    <div className="row billing-confirmation-area">
      <div className="col-lg-7" style={{ maxWidth: '100%', flex: '0 0 100%' }}>
        <div className="section-title text-left padding-bottom-30">
            <h3 style={{ textAlign: 'center' }}>Order Summary</h3>
          </div>
        <div className="order-summery-area padding-top-60">
          <div className="cart-checkout-wrapper ">
            <div className="cart-items-wrapper checout-items-wrap">
              {loadingPay && 
                <div className="summery-title">
                <h3 className="title">Finishing Payment...</h3>
              </div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
              }
              
              <div className="table-responsive">
                <table>
                  {/*<thead>
                    <tr>
                      <th className="product-name">Product</th>
                      <th className="product-name" />
                      <th className="product-price">Total</th>
                    </tr>
                  </thead>*/}
                  
                  <tbody>
                    {/*
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                    <tr>
                      <td className="product-thumb">
                        <div className="product-img">
                          <img src={item.image} />
                        </div>
                      </td>
                      <td className="product-name">
                        <div className="product-content">
                          <h3 className="title">{item.name} (x{item.qty})</h3>
                        </div>
                      </td>
                      <td className="product-price">${item.price*item.qty}</td>
                    </tr>
                    )
            */}
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Items</h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">{order.orderItems.reduce((a, c) => parseInt(a, 10) + parseInt(c.qty, 10), 0)}</p>
                        </div>
                      </td>
                    </tr>
                    {/*<tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Payment Method: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">{cart.payment.paymentMethod}</p>
                        </div>
                      </td>
                    </tr>*/}
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Shipping: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">{order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country}<span className="color-font"></span> </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Payment Method: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">{order.payment.paymentMethod}<span className="color-font"></span> </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Shipping Fee: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">$ 0<span className="color-font"></span> </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Tax: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">${order.taxPrice}<span className="color-font"></span> </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Order Total: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="total-price">
                          <p className="title">${order.totalPrice}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                   
                </table>
              </div>
              <div className="priceing-counter">
                <h5 style={{ textAlign: 'center' }}>{order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}</h5>
                {/*<h5>Cash in Delivery</h5>
                <h5>Pay with cash upon delivery.</h5>*/}
                {/*!order.isPaid && <div className="btn-wrapper">
                  <button className="boxed-btn" onClick={placeOrderHandler}>Try Again</button>
                </div>*/}
                {/*<p>Your personal data will be used to process your order, support your experience
                  throughout this website, and for other purposes described in our <Link style={{ color: 'var(--main-color-one)' }} to='/privacy-policy'>privacy policy</Link>.
                </p>*/}
                
              </div>
            </div>
          </div>
        </div>
     </div>
      
    </div>
  </div>
</div>

        </>
    
}

export default OrderPage
