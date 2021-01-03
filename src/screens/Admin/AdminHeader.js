import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function AdminHeader(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  return (
    <>
      {/*============= Nav Area start here ===============*/}
<div className="total-content">
  <div className="header-section">
    {/* Mobile Search */}
    <div className="click-mobile-search">
      <form action="index.html" className="search-form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Type something to search" />
        </div>
      </form>
    </div>
    {/* Sing iN Popup */}
    {/* search Popup */}
    <div className="body-overlay" id="body-overlay" />
    <div className="search-popup" id="search-popup">
      <form action="index.html" className="search-form">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search....." />
        </div>
        <button className="submit-btn border-none"><i className=" flaticon-search" /></button>
      </form>
    </div>
    {/* Popup Section */}
    {/* navbar */}
    <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
      <div className="container nav-container">
        <div className="responsive-mobile-menu transparent-bg">
          <div className="logo-wrapper d-none d-lg-block">
            <Link to="/" className="logo">
              <img src="assets/img/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="logo-wrapper d-block d-lg-none">
            <Link to="/" className="logo">
              <img src="assets/img/logo/logo2.png" alt="logo" />
            </Link>
          </div>
          <div className="mobile-toggler">
            {userInfo ? (<>
            
            <Link to='/profile' ><i className="flaticon-user-1" /></Link>
            
            <Link style={{ color: 'red' }} to='/cart' ><i style={{ color: 'red' }} className="flaticon-shopping-cart" />{cartItems?.reduce((a, c) => parseInt(a, 10) + parseInt(c.qty, 10), 0)}</Link>
            
            </>): (<>
            <Link to='/signin'><i className="flaticon-user-1" /></Link>
            </>)}
          </div>
          <button className="navbar-toggler cross-menu" type="button" data-toggle="collapse" data-target="#lifeomic_main_menu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="cross-menu-wrapper">
              <span className="bar1" />
              <span className="bar2" />
              <span className="bar3" />
            </span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="lifeomic_main_menu">
          <ul className="navbar-nav">
            <li className="menu-item"><Link to="/admin/add-product">Add Product</Link>
              
            </li>
            <li className="menu-item"><Link to="/admin/view-products">View Products</Link>
              
            </li>
            {/*<li className="menu-item"><Link to="/shop">Shop</Link>
            </li>*/}
            <li className="menu-item"><Link to="/admin/users">Users</Link>
              
            </li>
            <li className="menu-item"><Link to="/admin/statistics">Statistics</Link>
              
            </li>
          </ul>
        </div>
        
            {userInfo ? (
              <div className="nav-right-content">
          <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Link to="/profile">
              <li className="search">
              <i className="flaticon-user-1" /></li>
              
            </Link>
              
                
              
            
              <li className="search">
                
                {cartItems?.length>=1 ? (<>
                  <Link to="/cart" style={{ color: 'red' }}><i className="flaticon-shopping-cart" style={{ color: 'red' }} />
                  {cartItems?.reduce((a, c) => parseInt(a, 10) + parseInt(c.qty, 10), 0)}
                  </Link>
                  </>
                ): (
                  <>
                  <Link to="/cart"><i className="flaticon-shopping-cart" />
                  </Link>
                  </>
                )}
                
              
            </li>
              <li className="search" id="search" style={{ margin: '0' }}>
              <i className="flaticon-search" />
            </li>
          </ul>
        </div>
            ) : (
              <div className="nav-right-content">
          <ul>
              <li className="login">
              <Link to='/signin'>Log In /</Link>
            </li>
            <li className="singup"><Link to='/register'>Sing Up</Link>
            </li>
              <li className="search" id="search">
              <i className="flaticon-search" />
            </li>
          </ul>
        </div>
            )}
            
            
            
      </div>
    </nav>
  </div>
  
</div>
{/*============= Nav Area End here ===============*/}

    
    </>
  )
}

export default AdminHeader

