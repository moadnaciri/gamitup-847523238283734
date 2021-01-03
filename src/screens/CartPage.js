import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header2 from '../components/Header2'

function CartPage(props) {
  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
    return (
        <>
        <Header2 />
          <div className="product-cart-area padding-top-120 md-pd-top-60 padding-bottom-120 md-pd-bottom-80">
  <div className="nav-container">
    <div className="row section-shadow">
      <div className="col-lg-8">
        <div className="cart-checkout-wrapper">
          <div className="cart-items-wrapper table-responsive">
            <div className="table-responsive">
              <table>
                <thead className="border-bottom">
                  <tr>
                    <th />
                    <th className="product-name" />
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-value">Quanty</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody className="border-bottom">
                  {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
                  <tr>
                    <td className="product-delete">
                      
                      <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      <i className="flaticon-close" />
                    </button>
                    </td>
                    <td className="product-thumb">
                      <div className="product-img">
                        <img src={item.image} />
                      </div>
                    </td>
                    <td className="product-name">
                      <div className="product-content">
                        <p className="title">{item.name}</p>
                      </div>
                    </td>
                    <td className="product-price">${item.price}</td>
                    <td className="product-quantity">
                      <div className="cart-wrap">
                        
                          {/*<li className="decrease">
                            -
                          </li>
                          <li className="quantity">
                            <input type="text" defaultValue={1} />
                          </li>
                          <li className="increase">
                            +
                          </li>*/}
                          <select className="quantity-count" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                        
                      </div>
                    </td>
                    <td className="total-price">${item.price*item.qty}</td>
                  </tr>
                  )
        }
                </tbody>
              </table>
            </div>
            <div className="coupon-area padding-top-80 md-pd-top-60">
              <form className="coupon-form">
                <div className="form-group">
                  <h5>Coupon: </h5>
                  <input type="text" className="form-control" placeholder="Coupon code" />
                </div>
                <a href className="submit-btn hover-border"><i className="flaticon-right-chevron-1" /></a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 md-pd-top-80 ">
        <div className="single-product-cart-wrapper">
          <div className="single-product-cart">
            <h4 className="cart-total">Cart Totals</h4>

            <div className="cart-price">
              <div className="cart-subtotal">
                <h4 className="title">Items :</h4>
              </div>
              <div className="total-price">
                <p>{cartItems.reduce((a, c) => parseInt(a, 10) + parseInt(c.qty, 10), 0)} items</p>
              </div>
            </div>
            <div className="cart-price">
              <div className="cart-subtotal">
                <h4 className="title">Subtotal :</h4>
              </div>
              <div className="total-price">
                <p>$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
              </div>
            </div>
            {/*<div className="shopping-content">
              <div className="shopping-title">
                <h4 className="title">
                  Shipping
                </h4>
              </div>
              <div className="right-content">
                <div className="check-box">
                  <form action="#">
                    <p>
                      <label htmlFor="test1">Flat rate: <span>$20.00</span></label>
                      <input type="radio" id="test1" name="radio-group" defaultChecked />
                    </p>
                    <p>
                      <label htmlFor="test2">Free shipping </label>
                      <input type="radio" id="test2" name="radio-group" />
                    </p>
                    <p>
                      <label htmlFor="test3">Local pickup: <span>$25.00</span></label>
                      <input type="radio" id="test3" name="radio-group" />
                    </p>
                  </form>
                </div>
                <p>Shipping to <span><b>USA</b></span></p>
                <a href="product-cart-two.html">Changing Address</a>
                <div className="select-option margin-top-30">
                  <select>
                    <option data-display="USA" value={1}>USA</option>
                    <option value={2}>Japan</option>
                    <option value={3}>BAngladesh</option>
                  </select>
                </div>
                <div className="select-option margin-top-30">
                  <select>
                    <option data-display="Town/City" value={1}>Town/City</option>
                    <option value={2}>New yerk</option>
                    <option value={3}>Florida</option>
                  </select>
                </div>
                <div className="select-option margin-top-30">
                  <select>
                    <option data-display="Sort by lates" value={1}>Post Code/Zip</option>
                    <option value={2}>1101</option>
                    <option value={3}>1105</option>
                  </select>
                </div>
                <div className="btn-wrapper">
                  <button className="boxed-btn" type="button">Update</button>
                </div>
              </div>
            </div>


            <div className="cart-price">
              <div className="cart-subtotal">
                <h4 className="title">Total</h4>
              </div>
              <div className="total-price">
                <p className="total-rate">$105.00</p>
              </div>
            </div>*/}
            <div className="check-out-area padding-bottom-60">
              <div className="btn-wrapper text-right">
                <a href="billing-info.html" className="submit-btn hover-border"><span /></a>
                
                  <button onClick={checkoutHandler} className="boxed-btn Proceed" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>
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

export default CartPage
