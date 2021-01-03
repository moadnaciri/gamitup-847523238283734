import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import Header2 from '../components/Header2'

function PlaceOrderPage(props) {
  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { success, order } = orderCreate;

  //const { cartItems, shipping, payment } = cart;
  const { cartItems } = cart;
  useEffect(() => {
    if (shipping) {
      //console.log(cart)
      //console.log(cartItems)
      //console.log(payment)
    }
    return () => {
      //
    }
  }, [cart])
  
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();
  const shipping = {
    country: 'Morocco',
    postalCode: '90300',
    city: 'Tetouan',
    address: 'adsfd gh v3345'
  }
  const payment = {
    paymentMethod: 'paypal'
  }

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
      taxPrice, totalPrice
    }));
  }
  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
    }

  }, [success]);
    return (
        <> <Header2 />
        <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
           <div className="billing-section padding-bottom-120 md-pd-top-80 padding-top-50 md-pd-bottom-50">
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
        <div className="order-summery-area padding-top-60">
          <div className="cart-checkout-wrapper ">
            <div className="cart-items-wrapper checout-items-wrap">
              <div className="summery-title">
                <h3 className="title">Your order</h3>
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
                    {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>
                    <tr>
                      <td className="product-thumb">
                        <div className="product-img">
                          <img src={item.image1} />
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
            }
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Subtotal</h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
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
                          <p className="title">{cart.payment.paymentMethod}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price-content">
                          <h5 className="title">Shipping Fees: </h5>
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
                          <h5 className="title">Shipping Address: </h5>
                        </div>
                      </td>
                      <td />
                      <td>
                        <div className="sub-price">
                          <p className="title">{cart.shipping.address}, {cart.shipping.city}, {cart.shipping.postalCode}, {cart.shipping.country}<span className="color-font"></span> </p>
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
                          <p className="title">$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                   
                </table>
              </div>
              <div className="priceing-counter">
                {/*<h5>Cash in Delivery</h5>
                <h5>Pay with cash upon delivery.</h5>*/}
                <p>Your personal data will be used to process your order, support your experience
                  throughout this website, and for other purposes described in our <Link style={{ color: 'var(--main-color-one)' }} to='/privacy-policy'>privacy policy</Link>.
                </p>
                <div className="btn-wrapper">
                  <button className="boxed-btn" onClick={placeOrderHandler}>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
      
    </div>
  </div>
</div>

        </>
    )
}

export default PlaceOrderPage
