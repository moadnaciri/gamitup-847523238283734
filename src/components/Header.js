import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Header(props) {
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
    <nav className="navbar navbar-area navbar-expand-lg nav-style-01 nav-absolute transparent-bg">
      <div className="container nav-container">
        <div className="responsive-mobile-menu transparent-bg">
          <div className="logo-wrapper d-none d-lg-block">
            <Link to="/" className="logo">
              <img alt='popup-i' src="assets/img/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="logo-wrapper d-block d-lg-none">
            <Link to="/" className="logo">
              <img alt='popup-i' src="assets/img/logo/logo2.png" alt="logo" />
            </Link>
          </div>
          <div className="mobile-toggler">
            {userInfo ? (<>
            
            <Link to='/profile' ><i className="flaticon-user-1" /></Link>
            
            
            
            </>): (<>
            <Link to='/signin'><i className="flaticon-user-1" /></Link>
            </>)}
            <Link to='/cart' ><i className="flaticon-shopping-cart" /><small style={{ color: 'red', fontWeight: 'bold' }}>
              {cartItems?.reduce((a, c) => parseInt(a, 10) + parseInt(c.qty, 10), 0)}
              </small></Link>
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
            <li className="menu-item"><Link to="/">Home</Link>
              
            </li>
            {/*<li className="menu-item"><Link to="/shop">Shop</Link>
            </li>*/}
            <li className="menu-item-has-children"><Link to="/pc-gaming">PC Gaming</Link>
              <ul className="sub-menu">
                <li><Link to="/laptops">Laptops</Link></li>
                <li><Link to="/desktops">Desktops</Link></li>
                <li><Link to="/monitors">Monitors</Link></li>
                <li><Link to="/accessories">Accessories</Link></li>
                <li><Link to="/routers">Routers</Link></li>
                <li><Link to="/components">Components</Link></li>
                <li><Link to="/pc-games">PC Games</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><Link to="/video-games">Video Games</Link>
              <ul className="sub-menu">
                <li><Link to="/tv-home-cinema">TV & Home Cinema</Link></li>
                <li><Link to="/playstation-5-consoles">Playstation 5 Consoles</Link></li>
                <li><Link to="/xbox-series-x-consoles">XBox Series X Consoles</Link></li>
                <li><Link to="/nintendo-switch-consoles">Nintendo Switch Consoles</Link></li>
              </ul>
            </li>
            <li className="menu-item-has-children"><Link to="/more-gaming">More Gaming</Link>
              <ul className="sub-menu">
                <li><Link to="/virtual-reality">Virtual Reality</Link></li>
                <li><Link to="/mobile-gaming">Mobile Gaming</Link></li>
                <li><Link to="/gaming-merch">Gaming Merch</Link></li>
                <li><Link to="/retro-store">Retro Store</Link></li>
                <li><Link to="/e-sports-store">E-Sports Store</Link></li>
                <li><Link to="/digital-currency">Digital Currency</Link></li>
                <li><Link to="/gamers-food-and-drink">Gamers Food & Drink</Link></li>
              </ul>
            </li>
            <li><Link to="/contact-us">Contact</Link></li>
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
            <li className="search">
                
                {cartItems?.length>=1 ? (<>
                  <Link to="/cart"><i className="flaticon-shopping-cart" />
                  <small style={{ color: 'red', fontWeight: 'bold' }}>
              {cartItems?.reduce((a, c) => parseInt(a, 10) + parseInt(c.qty, 10), 0)}
              </small>
                  </Link>
                  </>
                ): (
                  <>
                  <Link to="/cart"><i className="flaticon-shopping-cart" />
                  </Link>
                  </>
                )}
                
              
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

export default Header

